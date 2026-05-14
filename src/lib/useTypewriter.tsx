import { useEffect, useMemo, useState, type ReactNode } from 'react';

export type TypewriterSegment = { kind: 'text'; text: string; className?: string } | { kind: 'br' };

export function useTypewriter(segments: TypewriterSegment[], speedMs = 32, startDelayMs = 250) {
  const totalChars = useMemo(
    () =>
      segments.reduce((sum, seg) => {
        if (seg.kind !== 'text') return sum;
        return sum + seg.text.length;
      }, 0),
    [segments],
  );

  const [typedChars, setTypedChars] = useState(0);
  const isDone = typedChars >= totalChars;

  useEffect(() => {
    let intervalId: number | null = null;

    const resetTimeoutId = window.setTimeout(() => setTypedChars(0), 0);

    const startTimeoutId = window.setTimeout(() => {
      setTypedChars(0);
      intervalId = window.setInterval(() => {
        setTypedChars((current) => {
          if (current >= totalChars) {
            if (intervalId !== null) window.clearInterval(intervalId);
            return current;
          }

          const next = current + 1;
          if (next >= totalChars && intervalId !== null) window.clearInterval(intervalId);
          return next;
        });
      }, speedMs);
    }, startDelayMs);

    return () => {
      window.clearTimeout(resetTimeoutId);
      window.clearTimeout(startTimeoutId);
      if (intervalId !== null) window.clearInterval(intervalId);
    };
  }, [speedMs, startDelayMs, totalChars]);

  const [caretOn, setCaretOn] = useState(true);

  useEffect(() => {
    if (isDone) return;
    const intervalId = window.setInterval(() => setCaretOn((v) => !v), 500);
    return () => window.clearInterval(intervalId);
  }, [isDone]);

  const content = useMemo(() => {
    const result = segments.reduce<{ offset: number; nodes: ReactNode[] }>(
      (acc, seg, index) => {
        const offsetBefore = acc.offset;

        if (seg.kind === 'br') {
          if (typedChars < offsetBefore) return { offset: offsetBefore, nodes: acc.nodes };
          return { offset: offsetBefore, nodes: [...acc.nodes, <br key={`br-${index}`} />] };
        }

        const visibleChars = Math.max(0, Math.min(typedChars - offsetBefore, seg.text.length));

        if (visibleChars === 0) {
          return { offset: offsetBefore + seg.text.length, nodes: acc.nodes };
        }

        return {
          offset: offsetBefore + seg.text.length,
          nodes: [
            ...acc.nodes,
            <span key={`t-${index}`} className={seg.className}>
              {seg.text.slice(0, visibleChars)}
            </span>,
          ],
        };
      },
      { offset: 0, nodes: [] },
    );

    return result.nodes;
  }, [segments, typedChars]);

  const caret = !isDone ? (
    <span aria-hidden className={`inline-block w-[0.6ch] ${caretOn ? 'opacity-100' : 'opacity-0'}`}>
      |
    </span>
  ) : null;

  return { content, caret, isDone, typedChars, totalChars };
}
