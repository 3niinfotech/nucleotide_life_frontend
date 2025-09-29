import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  NativeScrollEvent,
  NativeSyntheticEvent,
  LayoutChangeEvent,
  Dimensions,
  Platform,
} from 'react-native';
import { semantic } from '../../utils/colors';

type Props = {
  slides: React.ReactNode[];
  autoPlayMs?: number | null;
  rounded?: boolean;
  testID?: string;
};

const Carousel: React.FC<Props> = React.memo(
  ({ slides, autoPlayMs = 5000, rounded = true, testID }) => {
    const scrollRef = useRef<ScrollView | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const { width: screenWidth } = Dimensions.get('window');

    const onScroll = useCallback(
      (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const x = e.nativeEvent.contentOffset.x;
        const idx = containerWidth ? Math.round(x / containerWidth) : 0;
        if (idx !== activeIndex && idx >= 0 && idx < slides.length) {
          setActiveIndex(idx);
        }
      },
      [activeIndex, containerWidth, slides.length],
    );

    const onLayout = useCallback(
      (evt: LayoutChangeEvent) => {
        const w = Math.round(evt.nativeEvent.layout.width);
        if (w !== containerWidth && w > 0) {
          setContainerWidth(w);
        }
      },
      [containerWidth],
    );

    const scrollToSlide = useCallback(
      (index: number) => {
        if (containerWidth > 0 && scrollRef.current) {
          scrollRef.current.scrollTo({
            x: index * containerWidth,
            animated: true,
          });
        }
      },
      [containerWidth],
    );

    const nextSlide = useCallback(() => {
      const next = (activeIndex + 1) % slides.length;
      scrollToSlide(next);
    }, [activeIndex, slides.length, scrollToSlide]);

    useEffect(() => {
      if (!autoPlayMs || slides.length <= 1 || containerWidth === 0) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        return;
      }

      intervalRef.current = setInterval(nextSlide, autoPlayMs);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      };
    }, [autoPlayMs, slides.length, containerWidth, nextSlide]);

    const containerStyle = useMemo(
      () => [
        styles.container,
        { height: '100%' as const },
        rounded && styles.rounded,
      ],
      [rounded],
    );

    const slideWidth = useMemo(
      () => containerWidth || screenWidth,
      [containerWidth, screenWidth],
    );

    const dots = useMemo(
      () =>
        slides.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i === activeIndex ? styles.dotActive : styles.dotInactive,
            ]}
            testID={`${testID}-dot-${i}`}
          />
        )),
      [slides, activeIndex, testID],
    );

    return (
      <View onLayout={onLayout} style={containerStyle} testID={testID}>
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          scrollEventThrottle={Platform.OS === 'ios' ? 16 : 32}
          decelerationRate="fast"
          bounces={false}
          removeClippedSubviews={true}
        >
          {slides.map((node, i) => (
            <View
              key={i}
              style={{
                width: slideWidth,
                height: '100%',
              }}
              testID={`${testID}-slide-${i}`}
            >
              {node}
            </View>
          ))}
        </ScrollView>
        {slides.length > 1 && <View style={styles.dotsRow}>{dots}</View>}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    backgroundColor: semantic.background.secondary,
  },
  rounded: {
    borderRadius: 12,
  },
  dotsRow: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: semantic.interactive.primary,
    width: 24,
  },
  dotInactive: {
    backgroundColor: 'rgba(0,0,0,0.15)',
  },
});

export default Carousel;
