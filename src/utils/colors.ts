/**
 * Color utilities for the Nucleotide Life Frontend
 * Centralized color definitions to maintain consistency across the app
 */

// Primary Brand Colors
export const primary = {
  teal: '#14b8a6', // Primary teal for logo and accents
  purple: '#8b5cf6', // Primary purple for buttons and highlights
  darkBlue: '#1e1b4b', // Dark blue for footer background
} as const;

// Neutral Colors
export const neutral = {
  white: '#ffffff',
  black: '#000000',
  gray50: '#f9fafb',
  gray100: '#f3f4f6',
  gray200: '#E7E7E7',
  gray300: '#d1d5db',
  gray400: '#9ca3af',
  gray500: '#6b7280',
  gray600: '#4b5563',
  gray700: '#374151',
  gray800: '#1f2937',
  gray900: '#111827',
  grayBBB: '#BBBBBB',
} as const;

// Status Colors
export const status = {
  success: '#22c55e', // Green for success states
  warning: '#f59e0b', // Orange for warnings
  error: '#ef4444', // Red for errors
  info: '#3b82f6', // Blue for info
} as const;

// Rating Colors
export const rating = {
  excellent: '#FFD700', // Gold for excellent ratings
  veryGood: '#FFA500', // Orange for very good ratings
  good: '#FF8C00', // Dark orange for good ratings
  average: '#FF6347', // Tomato for average ratings
  poor: '#DC143C', // Crimson for poor ratings
} as const;

// Gradient Colors
export const gradients = {
  pinkOrange: ['#ec4899', '#f59e0b'] as string[], // Pink to orange gradient
  bluePurple: ['#3b82f6', '#8b5cf6'] as string[], // Blue to purple gradient
} as const;

// Special Colors
export const special = {
  coupon: '#FF7169', // Orange for coupon elements
  couponBg: '#FFF9E6', // Light orange background for coupons
  footer: '#101828', // Dark footer background
  teal: '#34C9AD', // Teal accent color
  green: '#4CAF50', // Green accent color
  greenBg: 'rgba(34, 197, 94, 0.1)', // Light green background
  purpleBg: 'rgba(136,107,249,0.04)', // Light purple background
  tealBg: 'rgba(20,184,166,0.15)', // Light teal background
} as const;

// Semantic Colors
export const semantic = {
  // Text colors
  text: {
    primary: neutral.gray900, // #111827 - Main text
    secondary: neutral.gray700, // #374151 - Secondary text
    tertiary: neutral.gray500, // #6b7280 - Tertiary text
    placeholder: neutral.gray400, // #9ca3af - Placeholder text
    inverse: neutral.white, // #ffffff - Text on dark backgrounds
    light: neutral.grayBBB, // #f3f4f6 - Light text
  },

  // Background colors
  background: {
    primary: neutral.white, // #ffffff - Main background
    secondary: neutral.gray50, // #f9fafb - Secondary background
    tertiary: neutral.gray100, // #f3f4f6 - Tertiary background
    dark: primary.darkBlue, // #1e1b4b - Dark background
    overlay: neutral.gray700, // #374151 - Overlay background
    footer: special.footer, // #101828 - Footer background
  },

  // Border colors
  border: {
    light: neutral.gray200, // #e5e7eb - Light borders
    medium: neutral.gray300, // #d1d5db - Medium borders
    dark: neutral.gray500, // #6b7280 - Dark borders
    divider: neutral.gray700, // #374151 - Divider borders
  },

  // Interactive colors
  interactive: {
    primary: primary.purple, // #8b5cf6 - Primary buttons
    secondary: neutral.gray100, // #f3f4f6 - Secondary buttons
    hover: neutral.gray50, // #f9fafb - Hover states
    active: neutral.gray200, // #e5e7eb - Active states
  },

  // Shadow colors
  shadow: {
    light: neutral.black, // #000000 - Light shadows
    colored: primary.purple, // #8b5cf6 - Colored shadows
  },
} as const;

// Logo colors
export const logo = {
  teal: primary.teal, // #14b8a6 - First X in logo
  purple: primary.purple, // #8b5cf6 - Second X in logo
} as const;

// Utility functions for color manipulation
export const colors = {
  // Get color with opacity
  withOpacity: (color: string, opacity: number): string => {
    // Convert hex to rgba
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  },

  // Get color with transparency
  transparent: (color: string, alpha: number): string => {
    return colors.withOpacity(color, alpha);
  },
} as const;

// Export all colors for easy access
export const allColors = {
  primary,
  neutral,
  semantic,
  logo,
  status,
  rating,
  gradients,
  special,
  colors,
} as const;

// Default export for convenience
export default allColors;
