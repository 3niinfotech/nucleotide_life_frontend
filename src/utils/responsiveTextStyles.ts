import { TextStyle } from "react-native";
import { useResponsiveFontUtils } from "../hooks";

// Helper function to create responsive text styles
export const createResponsiveTextStyle = (
  baseStyle: TextStyle,
  weight:
    | "thin"
    | "extraLight"
    | "light"
    | "regular"
    | "medium"
    | "semiBold"
    | "bold"
    | "extraBold"
    | "black",
  fontSize: number,
  italic?: boolean
): TextStyle => {
  const { getResponsiveStyle } = useResponsiveFontUtils();

  return {
    ...baseStyle,
    ...getResponsiveStyle(weight, fontSize, 1, italic),
  };
};

// Predefined responsive text styles for common use cases
export const responsiveTextStyles = {
  // Headings
  h1: (baseStyle: TextStyle = {}) =>
    createResponsiveTextStyle(baseStyle, "bold", 48),
  h2: (baseStyle: TextStyle = {}) =>
    createResponsiveTextStyle(baseStyle, "bold", 36),
  h3: (baseStyle: TextStyle = {}) =>
    createResponsiveTextStyle(baseStyle, "semiBold", 30),
  h4: (baseStyle: TextStyle = {}) =>
    createResponsiveTextStyle(baseStyle, "semiBold", 24),
  h5: (baseStyle: TextStyle = {}) =>
    createResponsiveTextStyle(baseStyle, "medium", 20),
  h6: (baseStyle: TextStyle = {}) =>
    createResponsiveTextStyle(baseStyle, "medium", 18),

  // Body text
  body: (baseStyle: TextStyle = {}) =>
    createResponsiveTextStyle(baseStyle, "regular", 16),
  bodyLarge: (baseStyle: TextStyle = {}) =>
    createResponsiveTextStyle(baseStyle, "regular", 18),
  bodySmall: (baseStyle: TextStyle = {}) =>
    createResponsiveTextStyle(baseStyle, "regular", 14),

  // UI elements
  button: (baseStyle: TextStyle = {}) =>
    createResponsiveTextStyle(baseStyle, "semiBold", 16),
  buttonSmall: (baseStyle: TextStyle = {}) =>
    createResponsiveTextStyle(baseStyle, "medium", 14),
  label: (baseStyle: TextStyle = {}) =>
    createResponsiveTextStyle(baseStyle, "medium", 14),
  caption: (baseStyle: TextStyle = {}) =>
    createResponsiveTextStyle(baseStyle, "regular", 12),

  // Special
  overline: (baseStyle: TextStyle = {}) =>
    createResponsiveTextStyle(baseStyle, "medium", 12),
  subtitle: (baseStyle: TextStyle = {}) =>
    createResponsiveTextStyle(baseStyle, "medium", 18),
};
