import { useCallback, useEffect, useRef } from 'react';

export function useInfiniteScroll({
  hasMore,
  loading,
  onLoadMore,
  rootMargin = '240px',
  threshold = 0,
}: {
  hasMore: boolean;
  loading: boolean;
  onLoadMore: () => void;
  rootMargin?: string;
  threshold?: number;
}) {
  const onLoadMoreRef = useRef(onLoadMore);
  const triggeredRef = useRef(false);
  const wasIntersectingRef = useRef(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const nodeRef = useRef<HTMLElement | null>(null);
  const loadingRef = useRef(loading);
  const hasMoreRef = useRef(hasMore);

  useEffect(() => {
    onLoadMoreRef.current = onLoadMore;
  }, [onLoadMore]);

  useEffect(() => {
    loadingRef.current = loading;
    if (!loading) {
      triggeredRef.current = false;
    }
  }, [loading]);

  useEffect(() => {
    hasMoreRef.current = hasMore;
  }, [hasMore]);

  const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    if (!entry) {
      return;
    }

    if (!entry.isIntersecting) {
      wasIntersectingRef.current = false;
      return;
    }

    const wasIntersecting = wasIntersectingRef.current;
    wasIntersectingRef.current = true;

    if (wasIntersecting) {
      return;
    }

    if (triggeredRef.current || loadingRef.current || !hasMoreRef.current) {
      return;
    }

    triggeredRef.current = true;
    onLoadMoreRef.current();
  }, []);

  const sentinelRef = useCallback((node: HTMLElement | null) => {
    if (nodeRef.current === node) {
      return;
    }

    if (observerRef.current && nodeRef.current) {
      observerRef.current.unobserve(nodeRef.current);
    }

    nodeRef.current = node;

    triggeredRef.current = false;
    wasIntersectingRef.current = false;

    if (observerRef.current && node) {
      observerRef.current.observe(node);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => handleIntersect(entries), {
      root: null,
      rootMargin,
      threshold,
    });

    observerRef.current = observer;

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => {
      observer.disconnect();
      if (observerRef.current === observer) {
        observerRef.current = null;
      }
    };
  }, [handleIntersect, rootMargin, threshold]);

  return { sentinelRef };
}
