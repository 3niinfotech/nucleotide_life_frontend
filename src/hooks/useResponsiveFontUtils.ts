import { useEffect, useCallback } from "react";
import { ResponsiveFontUtils } from "../utils/responsiveFonts";
import { useResponsive } from "./useResponsive";

// Hook that automatically updates the ResponsiveFontUtils with current screen dimensions
export const useResponsiveFontUtils = () => {
  const { width, height } = useResponsive();

  // Update screen dimensions immediately when hook is called
  useEffect(() => {
    ResponsiveFontUtils.updateScreenDimensions(width, height);
  }, [width, height]);

  // Create memoized functions that use current dimensions
  const getResponsiveSize = useCallback(
    (baseSize: number, scale: number = 1, accessibilityScale?: number) => {
      // Ensure we're using the latest dimensions
      ResponsiveFontUtils.updateScreenDimensions(width, height);
      return ResponsiveFontUtils.getResponsiveSize(
        baseSize,
        scale,
        accessibilityScale
      );
    },
    [width, height]
  );

  const getResponsiveStyle = useCallback(
    (
      weight: keyof typeof import("../utils/fonts").poppinsWeights = "regular",
      baseSize: number,
      scale: number = 1,
      italic: boolean = false,
      accessibilityScale?: number
    ) => {
      // Ensure we're using the latest dimensions
      ResponsiveFontUtils.updateScreenDimensions(width, height);
      return ResponsiveFontUtils.getResponsiveStyle(
        weight,
        baseSize,
        scale,
        italic,
        accessibilityScale
      );
    },
    [width, height]
  );

  const getResponsiveTypography = useCallback(() => {
    // Ensure we're using the latest dimensions
    ResponsiveFontUtils.updateScreenDimensions(width, height);
    return ResponsiveFontUtils.getResponsiveTypography();
  }, [width, height]);

  const getResponsiveSpacing = useCallback(
    (baseSpacing: number) => {
      // Ensure we're using the latest dimensions
      ResponsiveFontUtils.updateScreenDimensions(width, height);
      return ResponsiveFontUtils.getResponsiveSpacing(baseSpacing);
    },
    [width, height]
  );

  const getScreenSizeCategory = useCallback(() => {
    // Ensure we're using the latest dimensions
    ResponsiveFontUtils.updateScreenDimensions(width, height);
    return ResponsiveFontUtils.getScreenSizeCategory();
  }, [width, height]);

  return {
    getResponsiveSize,
    getResponsiveStyle,
    getResponsiveTypography,
    getResponsiveSpacing,
    getScreenSizeCategory,
    screenWidth: width,
    screenHeight: height,
  };
};
