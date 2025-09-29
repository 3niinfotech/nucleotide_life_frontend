import { useState, useEffect } from 'react';
import { TextStyle } from 'react-native';
import {
  createPoppinsStyle,
  fontStyles,
  typography,
  fontSizes,
  fontWeights,
  poppinsWeights,
  poppinsItalicWeights,
} from '../utils/fonts';
import {
  loadPoppinsFonts,
  isPoppinsAvailable,
} from '../utils/fontRegistration';

// Hook for font loading status
export const useFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [fontsError, setFontsError] = useState<string | null>(null);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        const loaded = await loadPoppinsFonts();
        if (loaded) {
          setFontsLoaded(true);
        } else {
          setFontsError('Failed to load Poppins fonts');
        }
      } catch (error) {
        setFontsError(
          error instanceof Error ? error.message : 'Unknown font loading error',
        );
      }
    };

    loadFonts();
  }, []);

  return { fontsLoaded, fontsError };
};

// Hook for creating custom font styles
export const useFontStyle = () => {
  const createStyle = (
    weight: keyof typeof poppinsWeights = 'regular',
    size: keyof typeof fontSizes = 'base',
    italic: boolean = false,
    customSize?: number,
  ): TextStyle => {
    return {
      ...createPoppinsStyle(weight, italic),
      fontSize: customSize || fontSizes[size],
    };
  };

  return { createStyle };
};

// Hook for responsive font sizing
export const useResponsiveFonts = () => {
  const getResponsiveSize = (baseSize: number, scale: number = 1): number => {
    return baseSize * scale;
  };

  const getResponsiveStyle = (
    weight: keyof typeof poppinsWeights = 'regular',
    baseSize: number,
    scale: number = 1,
    italic: boolean = false,
  ): TextStyle => {
    return {
      ...createPoppinsStyle(weight, italic),
      fontSize: getResponsiveSize(baseSize, scale),
    };
  };

  return { getResponsiveSize, getResponsiveStyle };
};

// Hook for predefined font styles
export const useTypography = () => {
  return {
    // Headers
    heroTitle: fontStyles.heroTitle,
    sectionTitle: fontStyles.sectionTitle,
    cardTitle: fontStyles.cardTitle,
    subsectionTitle: fontStyles.subsectionTitle,

    // Body text
    paragraph: fontStyles.paragraph,
    paragraphLarge: fontStyles.paragraphLarge,
    paragraphSmall: fontStyles.paragraphSmall,

    // UI elements
    buttonPrimary: fontStyles.buttonPrimary,
    buttonSecondary: fontStyles.buttonSecondary,
    label: fontStyles.label,
    caption: fontStyles.caption,

    // Special
    overline: fontStyles.overline,
    subtitle: fontStyles.subtitle,

    // All typography styles
    all: typography,
  };
};

// Hook for font weight utilities
export const useFontWeights = () => {
  return {
    weights: fontWeights,
    poppinsWeights,
    poppinsItalicWeights,
    createStyle: createPoppinsStyle,
  };
};

// Hook for font sizes
export const useFontSizes = () => {
  return {
    sizes: fontSizes,
    getSize: (size: keyof typeof fontSizes) => fontSizes[size],
  };
};
