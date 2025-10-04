import { useState, useEffect } from "react";
import { TextStyle, Platform } from "react-native";
import {
  createPoppinsStyle,
  fontStyles,
  typography,
  fontSizes,
  fontWeights,
  poppinsWeights,
  poppinsItalicWeights,
  createResponsiveFontSize,
} from "../utils/fonts";
import {
  loadPoppinsFonts,
  isPoppinsAvailable,
} from "../utils/fontRegistration";
import { useResponsive } from "./useResponsive";

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
          setFontsError("Failed to load Poppins fonts");
        }
      } catch (error) {
        setFontsError(
          error instanceof Error ? error.message : "Unknown font loading error"
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
    weight: keyof typeof poppinsWeights = "regular",
    size: keyof typeof fontSizes = "base",
    italic: boolean = false,
    customSize?: number
  ): TextStyle => {
    return {
      ...createPoppinsStyle(weight, italic),
      fontSize: customSize || fontSizes[size],
    };
  };

  return { createStyle };
};

// Hook for responsive font sizing with screen dimensions and accessibility
export const useResponsiveFonts = () => {
  const { width, height } = useResponsive();

  const getResponsiveSize = (
    baseSize: number,
    scale: number = 1,
    accessibilityScale?: number
  ): number => {
    return createResponsiveFontSize(
      baseSize * scale,
      width,
      height,
      accessibilityScale
    );
  };

  const getResponsiveStyle = (
    weight: keyof typeof poppinsWeights = "regular",
    baseSize: number,
    scale: number = 1,
    italic: boolean = false,
    accessibilityScale?: number
  ): TextStyle => {
    return {
      ...createPoppinsStyle(weight, italic),
      fontSize: getResponsiveSize(baseSize, scale, accessibilityScale),
    };
  };

  const getResponsiveTypography = (): Record<string, TextStyle> => {
    return {
      // Headings with responsive sizing
      h1: {
        ...createPoppinsStyle("bold"),
        fontSize: getResponsiveSize(fontSizes["5xl"]),
        lineHeight: getResponsiveSize(fontSizes["6xl"]),
      },
      h2: {
        ...createPoppinsStyle("bold"),
        fontSize: getResponsiveSize(fontSizes["4xl"]),
        lineHeight: getResponsiveSize(fontSizes["5xl"]),
      },
      h3: {
        ...createPoppinsStyle("semiBold"),
        fontSize: getResponsiveSize(fontSizes["3xl"]),
        lineHeight: getResponsiveSize(fontSizes["4xl"]),
      },
      h4: {
        ...createPoppinsStyle("semiBold"),
        fontSize: getResponsiveSize(fontSizes["2xl"]),
        lineHeight: getResponsiveSize(fontSizes["3xl"]),
      },
      h5: {
        ...createPoppinsStyle("medium"),
        fontSize: getResponsiveSize(fontSizes.xl),
        lineHeight: getResponsiveSize(fontSizes["2xl"]),
      },
      h6: {
        ...createPoppinsStyle("medium"),
        fontSize: getResponsiveSize(fontSizes.lg),
        lineHeight: getResponsiveSize(fontSizes.xl),
      },

      // Body text with responsive sizing
      body: {
        ...createPoppinsStyle("regular"),
        fontSize: getResponsiveSize(fontSizes.base),
        lineHeight: getResponsiveSize(fontSizes.xl),
      },
      bodyLarge: {
        ...createPoppinsStyle("regular"),
        fontSize: getResponsiveSize(fontSizes.lg),
        lineHeight: getResponsiveSize(fontSizes["2xl"]),
      },
      bodySmall: {
        ...createPoppinsStyle("regular"),
        fontSize: getResponsiveSize(fontSizes.sm),
        lineHeight: getResponsiveSize(fontSizes.base),
      },

      // Small text with responsive sizing
      caption: {
        ...createPoppinsStyle("regular"),
        fontSize: getResponsiveSize(fontSizes.sm),
        lineHeight: getResponsiveSize(fontSizes.base),
      },
      small: {
        ...createPoppinsStyle("regular"),
        fontSize: getResponsiveSize(fontSizes.xs),
        lineHeight: getResponsiveSize(fontSizes.sm),
      },

      // Buttons with responsive sizing
      button: {
        ...createPoppinsStyle("semiBold"),
        fontSize: getResponsiveSize(fontSizes.base),
      },
      buttonLarge: {
        ...createPoppinsStyle("semiBold"),
        fontSize: getResponsiveSize(fontSizes.lg),
      },
      buttonSmall: {
        ...createPoppinsStyle("medium"),
        fontSize: getResponsiveSize(fontSizes.sm),
      },

      // Labels with responsive sizing
      label: {
        ...createPoppinsStyle("medium"),
        fontSize: getResponsiveSize(fontSizes.sm),
      },
      labelLarge: {
        ...createPoppinsStyle("medium"),
        fontSize: getResponsiveSize(fontSizes.base),
      },

      // Special text styles with responsive sizing
      overline: {
        ...createPoppinsStyle("medium"),
        fontSize: getResponsiveSize(fontSizes.xs),
        textTransform: "uppercase",
        letterSpacing: 1.2,
      },
      subtitle: {
        ...createPoppinsStyle("medium"),
        fontSize: getResponsiveSize(fontSizes.lg),
        lineHeight: getResponsiveSize(fontSizes.xl),
      },
      subtitle2: {
        ...createPoppinsStyle("regular"),
        fontSize: getResponsiveSize(fontSizes.base),
        lineHeight: getResponsiveSize(fontSizes.lg),
      },
    };
  };

  return {
    getResponsiveSize,
    getResponsiveStyle,
    getResponsiveTypography,
    screenWidth: width,
    screenHeight: height,
  };
};

// Hook for predefined font styles with responsive sizing
export const useTypography = () => {
  const { getResponsiveTypography } = useResponsiveFonts();
  const responsiveTypography = getResponsiveTypography();

  return {
    // Headers (responsive)
    heroTitle: responsiveTypography.h1,
    sectionTitle: responsiveTypography.h2,
    cardTitle: responsiveTypography.h3,
    subsectionTitle: responsiveTypography.h4,

    // Body text (responsive)
    paragraph: responsiveTypography.body,
    paragraphLarge: responsiveTypography.bodyLarge,
    paragraphSmall: responsiveTypography.bodySmall,

    // UI elements (responsive)
    buttonPrimary: responsiveTypography.button,
    buttonSecondary: responsiveTypography.buttonSmall,
    label: responsiveTypography.label,
    caption: responsiveTypography.caption,

    // Special (responsive)
    overline: responsiveTypography.overline,
    subtitle: responsiveTypography.subtitle,

    // All typography styles (responsive)
    all: responsiveTypography,

    // Legacy support - non-responsive versions
    legacy: {
      heroTitle: fontStyles.heroTitle,
      sectionTitle: fontStyles.sectionTitle,
      cardTitle: fontStyles.cardTitle,
      subsectionTitle: fontStyles.subsectionTitle,
      paragraph: fontStyles.paragraph,
      paragraphLarge: fontStyles.paragraphLarge,
      paragraphSmall: fontStyles.paragraphSmall,
      buttonPrimary: fontStyles.buttonPrimary,
      buttonSecondary: fontStyles.buttonSecondary,
      label: fontStyles.label,
      caption: fontStyles.caption,
      overline: fontStyles.overline,
      subtitle: fontStyles.subtitle,
      all: typography,
    },
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

// Hook for accessibility font scaling (Dynamic Type support)
export const useAccessibilityFonts = () => {
  const [accessibilityScale, setAccessibilityScale] = useState(1);
  const { getResponsiveSize, getResponsiveStyle } = useResponsiveFonts();

  useEffect(() => {
    // For iOS, we can listen to accessibility changes
    if (Platform.OS === "ios") {
      // This would typically use AccessibilityInfo from React Native
      // For now, we'll use a default scale
      setAccessibilityScale(1);
    }
  }, []);

  const getAccessibleSize = (baseSize: number, scale: number = 1): number => {
    return getResponsiveSize(baseSize, scale, accessibilityScale);
  };

  const getAccessibleStyle = (
    weight: keyof typeof poppinsWeights = "regular",
    baseSize: number,
    scale: number = 1,
    italic: boolean = false
  ): TextStyle => {
    return getResponsiveStyle(
      weight,
      baseSize,
      scale,
      italic,
      accessibilityScale
    );
  };

  return {
    accessibilityScale,
    getAccessibleSize,
    getAccessibleStyle,
  };
};
