import { useCallback, useEffect, useRef, useState } from 'react';
import type { ApiOptions, ApiState } from './types';

export function useApi<T>(
  service: (params?: Record<string, unknown>) => Promise<T>,
  options: ApiOptions = {}
): ApiState<T> & { execute: (params?: Record<string, unknown>) => Promise<T | undefined> } {
  const { immediate = true } = options;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const serviceRef = useRef(service);
  serviceRef.current = service;

  const execute = useCallback(async (params?: Record<string, unknown>): Promise<T | undefined> => {
    setLoading(true);
    setError(null);

    try {
      const result = await serviceRef.current(params);
      setData(result);
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error');
      setError(error);
      setData(null);
      return undefined;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { data, loading, error, execute };
}

export function useApiWithParams<T, P extends Record<string, unknown>>(
  service: (params: P) => Promise<T>,
  initialParams?: P,
  options: ApiOptions = {}
): ApiState<T> & {
  execute: (params?: P) => Promise<T | undefined>;
  params: P;
  setParams: (params: P) => void;
} {
  const { immediate = true } = options;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [params, setParams] = useState<P>(initialParams || ({} as P));

  const serviceRef = useRef(service);
  serviceRef.current = service;

  const execute = useCallback(
    async (execParams?: P): Promise<T | undefined> => {
      setLoading(true);
      setError(null);

      try {
        const result = await serviceRef.current(execParams || params);
        setData(result);
        return result;
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Unknown error');
        setError(error);
        setData(null);
        return undefined;
      } finally {
        setLoading(false);
      }
    },
    [params]
  );

  const handleSetParams = useCallback((newParams: P) => {
    setParams(newParams);
  }, []);

  useEffect(() => {
    if (immediate) {
      execute(params);
    }
  }, [execute, params, immediate]);

  return { data, loading, error, execute, params, setParams: handleSetParams };
}
