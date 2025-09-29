import { Platform } from 'react-native';

export type PlatformType = 'ios' | 'android' | 'web';

export const getPlatform = (): PlatformType => {
  if (Platform.OS === 'web') return 'web';
  if (Platform.OS === 'ios') return 'ios';
  return 'android';
};

export const isWeb = (): boolean => Platform.OS === 'web';
export const isMobile = (): boolean => Platform.OS !== 'web';
export const isIOS = (): boolean => Platform.OS === 'ios';
export const isAndroid = (): boolean => Platform.OS === 'android';

// Screen size detection for responsive design
export const getScreenSize = (): 'mobile' | 'tablet' | 'desktop' => {
  if (isWeb()) {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 768) return 'mobile';
      if (width < 1024) return 'tablet';
      return 'desktop';
    }
    return 'desktop'; // Default for web
  }
  return 'mobile'; // Default for native platforms
};

// Platform-specific component selector
export const selectPlatformComponent = <T>(
  webComponent: T,
  mobileComponent: T,
  iosComponent?: T,
  androidComponent?: T,
): T => {
  const platform = getPlatform();

  if (platform === 'ios' && iosComponent) return iosComponent;
  if (platform === 'android' && androidComponent) return androidComponent;

  return isWeb() ? webComponent : mobileComponent;
};

