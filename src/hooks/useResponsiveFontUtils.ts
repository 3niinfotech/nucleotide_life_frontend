import { useEffect } from "react";
import { ResponsiveFontUtils } from "../utils/responsiveFonts";
import { useResponsive } from "./useResponsive";

// Hook that automatically updates the ResponsiveFontUtils with current screen dimensions
export const useResponsiveFontUtils = () => {
  const { width, height } = useResponsive();

  useEffect(() => {
    ResponsiveFontUtils.updateScreenDimensions(width, height);
  }, [width, height]);

  return {
    getResponsiveSize: ResponsiveFontUtils.getResponsiveSize,
    getResponsiveStyle: ResponsiveFontUtils.getResponsiveStyle,
    getResponsiveTypography: ResponsiveFontUtils.getResponsiveTypography,
    getResponsiveSpacing: ResponsiveFontUtils.getResponsiveSpacing,
    getScreenSizeCategory: ResponsiveFontUtils.getScreenSizeCategory,
    screenWidth: width,
    screenHeight: height,
  };
};
