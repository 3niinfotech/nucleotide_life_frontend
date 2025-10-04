import React, { createContext, useContext, useEffect, ReactNode } from "react";
import { ResponsiveFontUtils } from "../utils/responsiveFonts";
import { useResponsive } from "../hooks/useResponsive";

interface ResponsiveContextType {
  screenWidth: number;
  screenHeight: number;
  getResponsiveSize: (
    baseSize: number,
    scale?: number,
    accessibilityScale?: number
  ) => number;
  getResponsiveStyle: (
    weight?: string,
    baseSize?: number,
    scale?: number,
    italic?: boolean,
    accessibilityScale?: number
  ) => any;
  getResponsiveTypography: () => any;
  getResponsiveSpacing: (baseSpacing: number) => number;
  getScreenSizeCategory: () => string;
}

const ResponsiveContext = createContext<ResponsiveContextType | undefined>(
  undefined
);

interface ResponsiveProviderProps {
  children: ReactNode;
}

export const ResponsiveProvider: React.FC<ResponsiveProviderProps> = ({
  children,
}) => {
  const { width, height } = useResponsive();

  // Update ResponsiveFontUtils whenever dimensions change
  useEffect(() => {
    ResponsiveFontUtils.updateScreenDimensions(width, height);
  }, [width, height]);

  const contextValue: ResponsiveContextType = {
    screenWidth: width,
    screenHeight: height,
    getResponsiveSize: (
      baseSize: number,
      scale: number = 1,
      accessibilityScale?: number
    ) => {
      ResponsiveFontUtils.updateScreenDimensions(width, height);
      return ResponsiveFontUtils.getResponsiveSize(
        baseSize,
        scale,
        accessibilityScale
      );
    },
    getResponsiveStyle: (
      weight: string = "regular",
      baseSize: number = 16,
      scale: number = 1,
      italic: boolean = false,
      accessibilityScale?: number
    ) => {
      ResponsiveFontUtils.updateScreenDimensions(width, height);
      return ResponsiveFontUtils.getResponsiveStyle(
        weight as any,
        baseSize,
        scale,
        italic,
        accessibilityScale
      );
    },
    getResponsiveTypography: () => {
      ResponsiveFontUtils.updateScreenDimensions(width, height);
      return ResponsiveFontUtils.getResponsiveTypography();
    },
    getResponsiveSpacing: (baseSpacing: number) => {
      ResponsiveFontUtils.updateScreenDimensions(width, height);
      return ResponsiveFontUtils.getResponsiveSpacing(baseSpacing);
    },
    getScreenSizeCategory: () => {
      ResponsiveFontUtils.updateScreenDimensions(width, height);
      return ResponsiveFontUtils.getScreenSizeCategory();
    },
  };

  return (
    <ResponsiveContext.Provider value={contextValue}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export const useResponsiveContext = (): ResponsiveContextType => {
  const context = useContext(ResponsiveContext);
  if (context === undefined) {
    throw new Error(
      "useResponsiveContext must be used within a ResponsiveProvider"
    );
  }
  return context;
};
