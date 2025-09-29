import { useState, useEffect } from 'react';
import { Dimensions, Platform } from 'react-native';
import { getScreenSize, isWeb } from '../utils/platform';

export interface ResponsiveBreakpoints {
  mobile: number;
  tablet: number;
  desktop: number;
}

export const defaultBreakpoints: ResponsiveBreakpoints = {
  mobile: 768,
  tablet: 1024,
  desktop: 1200,
};

export interface ResponsiveState {
  screenSize: 'mobile' | 'tablet' | 'desktop';
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
  height: number;
  orientation: 'portrait' | 'landscape';
}

export const useResponsive = (
  breakpoints: ResponsiveBreakpoints = defaultBreakpoints,
): ResponsiveState => {
  const [dimensions, setDimensions] = useState(() => {
    if (isWeb() && typeof window !== 'undefined') {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
    const { width, height } = Dimensions.get('window');
    return { width, height };
  });

  useEffect(() => {
    if (isWeb() && typeof window !== 'undefined') {
      const handleResize = () => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    } else {
      const subscription = Dimensions.addEventListener(
        'change',
        ({ window }) => {
          setDimensions({
            width: window.width,
            height: window.height,
          });
        },
      );

      return () => subscription?.remove();
    }
  }, []);

  const { width, height } = dimensions;

  const screenSize: 'mobile' | 'tablet' | 'desktop' =
    width < breakpoints.mobile
      ? 'mobile'
      : width < breakpoints.tablet
      ? 'tablet'
      : 'desktop';

  const orientation: 'portrait' | 'landscape' =
    width > height ? 'landscape' : 'portrait';

  return {
    screenSize,
    isMobile: screenSize === 'mobile',
    isTablet: screenSize === 'tablet',
    isDesktop: screenSize === 'desktop',
    width,
    height,
    orientation,
  };
};

// Hook for conditional rendering based on platform
export const usePlatform = () => {
  return {
    isWeb: Platform.OS === 'web',
    isIOS: Platform.OS === 'ios',
    isAndroid: Platform.OS === 'android',
    platform: Platform.OS as 'web' | 'ios' | 'android',
  };
};

// Hook for responsive styles
export const useResponsiveStyles = <T>(
  mobileStyles: T,
  tabletStyles?: Partial<T>,
  desktopStyles?: Partial<T>,
): T => {
  const { screenSize } = useResponsive();

  const getStyles = (): T => {
    let styles = { ...mobileStyles };

    if (screenSize === 'tablet' && tabletStyles) {
      styles = { ...styles, ...tabletStyles };
    }

    if (screenSize === 'desktop' && desktopStyles) {
      styles = { ...styles, ...desktopStyles };
    }

    return styles;
  };

  return getStyles();
};

