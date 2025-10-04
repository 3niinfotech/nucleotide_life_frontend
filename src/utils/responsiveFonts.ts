import { TextStyle } from "react-native";
import {
  createPoppinsStyle,
  fontSizes,
  poppinsWeights,
  createResponsiveFontSize,
} from "./fonts";
import { useResponsive } from "../hooks/useResponsive";

// Responsive font utility functions that can be used without hooks
export class ResponsiveFontUtils {
  private static screenWidth: number = 375; // Default mobile width
  private static screenHeight: number = 667; // Default mobile height

  // Update screen dimensions (should be called when screen changes)
  static updateScreenDimensions(width: number, height: number) {
    this.screenWidth = width;
    this.screenHeight = height;
  }

  // Get responsive font size
  static getResponsiveSize(
    baseSize: number,
    scale: number = 1,
    accessibilityScale?: number
  ): number {
    return createResponsiveFontSize(
      baseSize * scale,
      this.screenWidth,
      this.screenHeight,
      accessibilityScale
    );
  }

  // Get responsive font style
  static getResponsiveStyle(
    weight: keyof typeof poppinsWeights = "regular",
    baseSize: number,
    scale: number = 1,
    italic: boolean = false,
    accessibilityScale?: number
  ): TextStyle {
    return {
      ...createPoppinsStyle(weight, italic),
      fontSize: ResponsiveFontUtils.getResponsiveSize(
        baseSize,
        scale,
        accessibilityScale
      ),
    };
  }

  // Get responsive line height
  static getResponsiveLineHeight(
    baseSize: number,
    scale: number = 1,
    accessibilityScale?: number
  ): number {
    return ResponsiveFontUtils.getResponsiveSize(
      baseSize * 1.2,
      scale,
      accessibilityScale
    );
  }

  // Predefined responsive font styles
  static getResponsiveTypography() {
    return {
      // Headings
      h1: {
        ...createPoppinsStyle("bold"),
        fontSize: ResponsiveFontUtils.getResponsiveSize(fontSizes["5xl"]),
        lineHeight: ResponsiveFontUtils.getResponsiveSize(fontSizes["6xl"]),
      },
      h2: {
        ...createPoppinsStyle("bold"),
        fontSize: ResponsiveFontUtils.getResponsiveSize(fontSizes["4xl"]),
        lineHeight: ResponsiveFontUtils.getResponsiveSize(fontSizes["5xl"]),
      },
      h3: {
        ...createPoppinsStyle("semiBold"),
        fontSize: ResponsiveFontUtils.getResponsiveSize(fontSizes["3xl"]),
        lineHeight: ResponsiveFontUtils.getResponsiveSize(fontSizes["4xl"]),
      },
      h4: {
        ...createPoppinsStyle("semiBold"),
        fontSize: ResponsiveFontUtils.getResponsiveSize(fontSizes["2xl"]),
        lineHeight: ResponsiveFontUtils.getResponsiveSize(fontSizes["3xl"]),
      },
      h5: {
        ...createPoppinsStyle("medium"),
        fontSize: ResponsiveFontUtils.getResponsiveSize(fontSizes.xl),
        lineHeight: ResponsiveFontUtils.getResponsiveSize(fontSizes["2xl"]),
      },
      h6: {
        ...createPoppinsStyle("medium"),
        fontSize: ResponsiveFontUtils.getResponsiveSize(fontSizes.lg),
        lineHeight: ResponsiveFontUtils.getResponsiveSize(fontSizes.xl),
      },

      // Body text
      body: {
        ...createPoppinsStyle("regular"),
        fontSize: ResponsiveFontUtils.getResponsiveSize(fontSizes.base),
        lineHeight: ResponsiveFontUtils.getResponsiveSize(fontSizes.xl),
      },
      bodyLarge: {
        ...createPoppinsStyle("regular"),
        fontSize: ResponsiveFontUtils.getResponsiveSize(fontSizes.lg),
        lineHeight: ResponsiveFontUtils.getResponsiveSize(fontSizes["2xl"]),
      },
      bodySmall: {
        ...createPoppinsStyle("regular"),
        fontSize: ResponsiveFontUtils.getResponsiveSize(fontSizes.sm),
        lineHeight: ResponsiveFontUtils.getResponsiveSize(fontSizes.base),
      },

      // Small text
      caption: {
        ...createPoppinsStyle("regular"),
        fontSize: ResponsiveFontUtils.getResponsiveSize(fontSizes.sm),
        lineHeight: ResponsiveFontUtils.getResponsiveSize(fontSizes.base),
      },
      small: {
        ...createPoppinsStyle("regular"),
        fontSize: ResponsiveFontUtils.getResponsiveSize(fontSizes.xs),
        lineHeight: ResponsiveFontUtils.getResponsiveSize(fontSizes.sm),
      },

      // Buttons
      button: {
        ...createPoppinsStyle("semiBold"),
        fontSize: ResponsiveFontUtils.getResponsiveSize(fontSizes.base),
      },
      buttonLarge: {
        ...createPoppinsStyle("semiBold"),
        fontSize: ResponsiveFontUtils.getResponsiveSize(fontSizes.lg),
      },
      buttonSmall: {
        ...createPoppinsStyle("medium"),
        fontSize: ResponsiveFontUtils.getResponsiveSize(fontSizes.sm),
      },

      // Labels
      label: {
        ...createPoppinsStyle("medium"),
        fontSize: ResponsiveFontUtils.getResponsiveSize(fontSizes.sm),
      },
      labelLarge: {
        ...createPoppinsStyle("medium"),
        fontSize: ResponsiveFontUtils.getResponsiveSize(fontSizes.base),
      },

      // Special text styles
      overline: {
        ...createPoppinsStyle("medium"),
        fontSize: ResponsiveFontUtils.getResponsiveSize(fontSizes.xs),
        textTransform: "uppercase" as const,
        letterSpacing: 1.2,
      },
      subtitle: {
        ...createPoppinsStyle("medium"),
        fontSize: ResponsiveFontUtils.getResponsiveSize(fontSizes.lg),
        lineHeight: ResponsiveFontUtils.getResponsiveSize(fontSizes.xl),
      },
      subtitle2: {
        ...createPoppinsStyle("regular"),
        fontSize: ResponsiveFontUtils.getResponsiveSize(fontSizes.base),
        lineHeight: ResponsiveFontUtils.getResponsiveSize(fontSizes.lg),
      },
    };
  }

  // Get screen size category
  static getScreenSizeCategory():
    | "smallMobile"
    | "mobile"
    | "largeMobile"
    | "smallTablet"
    | "tablet"
    | "desktop"
    | "largeDesktop"
    | "xlDesktop" {
    if (this.screenWidth <= 320) return "smallMobile";
    if (this.screenWidth <= 375) return "mobile";
    if (this.screenWidth <= 414) return "largeMobile";
    if (this.screenWidth <= 768) return "smallTablet";
    if (this.screenWidth <= 1024) return "tablet";
    if (this.screenWidth <= 1280) return "desktop";
    if (this.screenWidth <= 1440) return "largeDesktop";
    return "xlDesktop";
  }

  // Get responsive spacing based on screen size
  static getResponsiveSpacing(baseSpacing: number): number {
    const category = this.getScreenSizeCategory();
    const multipliers = {
      smallMobile: 0.7,
      mobile: 0.8,
      largeMobile: 0.9,
      smallTablet: 0.95,
      tablet: 1,
      desktop: 1,
      largeDesktop: 1.05,
      xlDesktop: 1.1,
    };
    return Math.round(baseSpacing * multipliers[category]);
  }
}

// Convenience functions for common use cases
export const getResponsiveFontSize = (
  baseSize: number,
  scale: number = 1
): number => {
  return ResponsiveFontUtils.getResponsiveSize(baseSize, scale);
};

export const getResponsiveFontStyle = (
  weight: keyof typeof poppinsWeights = "regular",
  baseSize: number,
  scale: number = 1,
  italic: boolean = false
): TextStyle => {
  return ResponsiveFontUtils.getResponsiveStyle(
    weight,
    baseSize,
    scale,
    italic
  );
};

export const getResponsiveTypography = () => {
  return ResponsiveFontUtils.getResponsiveTypography();
};

// Screen size detection utilities
export const isSmallScreen = (): boolean => {
  return ResponsiveFontUtils.getScreenSizeCategory() === "smallMobile";
};

export const isMobileScreen = (): boolean => {
  const category = ResponsiveFontUtils.getScreenSizeCategory();
  return ["smallMobile", "mobile", "largeMobile"].includes(category);
};

export const isTabletScreen = (): boolean => {
  const category = ResponsiveFontUtils.getScreenSizeCategory();
  return ["smallTablet", "tablet"].includes(category);
};

export const isDesktopScreen = (): boolean => {
  const category = ResponsiveFontUtils.getScreenSizeCategory();
  return ["desktop", "largeDesktop", "xlDesktop"].includes(category);
};

// Font size presets for different screen sizes
export const responsiveFontPresets = {
  smallMobile: {
    h1: 24,
    h2: 20,
    h3: 18,
    h4: 16,
    h5: 14,
    h6: 12,
    body: 12,
    caption: 10,
  },
  mobile: {
    h1: 28,
    h2: 24,
    h3: 20,
    h4: 18,
    h5: 16,
    h6: 14,
    body: 14,
    caption: 12,
  },
  tablet: {
    h1: 32,
    h2: 28,
    h3: 24,
    h4: 20,
    h5: 18,
    h6: 16,
    body: 16,
    caption: 14,
  },
  desktop: {
    h1: 36,
    h2: 32,
    h3: 28,
    h4: 24,
    h5: 20,
    h6: 18,
    body: 18,
    caption: 16,
  },
} as const;
