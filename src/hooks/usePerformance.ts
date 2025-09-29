import React, {
  useCallback,
  useRef,
  useEffect,
  useState,
  useMemo,
} from 'react';
import { InteractionManager, Platform } from 'react-native';

/**
 * Custom hook for performance optimizations
 * Provides utilities for debouncing, throttling, and interaction management
 */

export const useDebounce = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number,
): T => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => callback(...args), delay);
    },
    [callback, delay],
  ) as T;

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return debouncedCallback;
};

export const useThrottle = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number,
): T => {
  const lastCallRef = useRef<number>(0);

  const throttledCallback = useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastCallRef.current >= delay) {
        lastCallRef.current = now;
        callback(...args);
      }
    },
    [callback, delay],
  ) as T;

  return throttledCallback;
};

export const useInteractionManager = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const task = InteractionManager.runAfterInteractions(() => {
      setIsReady(true);
    });

    return () => task.cancel();
  }, []);

  return isReady;
};

export const useOptimizedCallback = <T extends (...args: any[]) => any>(
  callback: T,
  deps: React.DependencyList,
): T => {
  return useCallback(callback, deps);
};

export const useOptimizedMemo = <T>(
  factory: () => T,
  deps: React.DependencyList,
): T => {
  return useMemo(factory, deps);
};

/**
 * Hook for handling scroll performance
 */
export const useScrollPerformance = () => {
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isScrollingRef = useRef(false);

  const handleScrollBegin = useCallback(() => {
    isScrollingRef.current = true;
  }, []);

  const handleScrollEnd = useCallback(() => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 150);
  }, []);

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return {
    isScrolling: isScrollingRef.current,
    handleScrollBegin,
    handleScrollEnd,
  };
};

/**
 * Hook for FlatList performance optimizations
 */
export const useFlatListPerformance = () => {
  const getItemLayout = useCallback(
    (data: any[] | null | undefined, index: number, itemHeight: number) => ({
      length: itemHeight,
      offset: itemHeight * index,
      index,
    }),
    [],
  );

  const keyExtractor = useCallback(
    (item: any, index: number) => `item-${index}`,
    [],
  );

  const renderItemOptimized = useCallback(
    (renderItem: (props: any) => React.ReactElement) => React.memo(renderItem),
    [],
  );

  return {
    getItemLayout,
    keyExtractor,
    renderItemOptimized,
    // FlatList performance props
    removeClippedSubviews: Platform.OS === 'android',
    maxToRenderPerBatch: 10,
    updateCellsBatchingPeriod: 50,
    initialNumToRender: 10,
    windowSize: 10,
    getItemLayout,
  };
};

/**
 * Hook for image loading performance
 */
export const useImagePerformance = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    setHasError(false);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoaded(false);
  }, []);

  return {
    isLoaded,
    hasError,
    handleLoad,
    handleError,
  };
};

export default {
  useDebounce,
  useThrottle,
  useInteractionManager,
  useOptimizedCallback,
  useOptimizedMemo,
  useScrollPerformance,
  useFlatListPerformance,
  useImagePerformance,
};
