import { Platform, TextStyle } from 'react-native';

// Poppins font family configuration
export const fonts = {
  // Primary font family - Poppins for all platforms
  primary: Platform.select({
    web: 'Poppins',
    ios: 'Poppins',
    android: 'Poppins',
    default: 'Poppins',
  }),

  // Secondary font family - Poppins with fallbacks
  secondary: Platform.select({
    web: 'Poppins',
    ios: 'Poppins',
    android: 'Poppins',
    default: 'Poppins',
  }),

  // Monospace font for code/technical content
  monospace: Platform.select({
    web: 'monospace',
    ios: 'Menlo',
    android: 'monospace',
    default: 'monospace',
  }),
};

// Poppins font weights mapping
export const fontWeights = {
  thin: '100',
  extraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
} as const;

// Font weight names for Poppins variants
export const poppinsWeights = {
  thin: 'Poppins-Thin',
  extraLight: 'Poppins-ExtraLight',
  light: 'Poppins-Light',
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  semiBold: 'Poppins-SemiBold',
  bold: 'Poppins-Bold',
  extraBold: 'Poppins-ExtraBold',
  black: 'Poppins-Black',
} as const;

// Italic variants
export const poppinsItalicWeights = {
  thin: 'Poppins-ThinItalic',
  extraLight: 'Poppins-ExtraLightItalic',
  light: 'Poppins-LightItalic',
  regular: 'Poppins-Italic',
  medium: 'Poppins-MediumItalic',
  semiBold: 'Poppins-SemiBoldItalic',
  bold: 'Poppins-BoldItalic',
  extraBold: 'Poppins-ExtraBoldItalic',
  black: 'Poppins-BlackItalic',
} as const;

// Font sizes
export const fontSizes = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
  '6xl': 60,
};

// Utility function to create Poppins font styles
export const createPoppinsStyle = (
  weight: keyof typeof poppinsWeights = 'regular',
  italic: boolean = false,
): TextStyle => {
  const fontFamily = italic
    ? poppinsItalicWeights[weight]
    : poppinsWeights[weight];

  return {
    fontFamily: Platform.select({
      web: `"${fontFamily}"`,
      ios: fontFamily,
      android: fontFamily,
      default: fontFamily,
    }),
    fontWeight: fontWeights[weight],
  };
};

// Utility function to create responsive font sizes
export const createResponsiveFontSize = (baseSize: number): number => {
  return Platform.select({
    web: baseSize,
    ios: baseSize,
    android: baseSize * 0.95, // Slightly smaller on Android for better readability
    default: baseSize,
  });
};

// Typography styles using Poppins
export const typography: Record<string, TextStyle> = {
  // Headings
  h1: {
    ...createPoppinsStyle('bold'),
    fontSize: createResponsiveFontSize(fontSizes['5xl']),
    lineHeight: createResponsiveFontSize(fontSizes['6xl']),
  },
  h2: {
    ...createPoppinsStyle('bold'),
    fontSize: createResponsiveFontSize(fontSizes['4xl']),
    lineHeight: createResponsiveFontSize(fontSizes['5xl']),
  },
  h3: {
    ...createPoppinsStyle('semiBold'),
    fontSize: createResponsiveFontSize(fontSizes['3xl']),
    lineHeight: createResponsiveFontSize(fontSizes['4xl']),
  },
  h4: {
    ...createPoppinsStyle('semiBold'),
    fontSize: createResponsiveFontSize(fontSizes['2xl']),
    lineHeight: createResponsiveFontSize(fontSizes['3xl']),
  },
  h5: {
    ...createPoppinsStyle('medium'),
    fontSize: createResponsiveFontSize(fontSizes.xl),
    lineHeight: createResponsiveFontSize(fontSizes['2xl']),
  },
  h6: {
    ...createPoppinsStyle('medium'),
    fontSize: createResponsiveFontSize(fontSizes.lg),
    lineHeight: createResponsiveFontSize(fontSizes.xl),
  },

  // Body text
  body: {
    ...createPoppinsStyle('regular'),
    fontSize: createResponsiveFontSize(fontSizes.base),
    lineHeight: createResponsiveFontSize(fontSizes.xl),
  },
  bodyLarge: {
    ...createPoppinsStyle('regular'),
    fontSize: createResponsiveFontSize(fontSizes.lg),
    lineHeight: createResponsiveFontSize(fontSizes['2xl']),
  },
  bodySmall: {
    ...createPoppinsStyle('regular'),
    fontSize: createResponsiveFontSize(fontSizes.sm),
    lineHeight: createResponsiveFontSize(fontSizes.base),
  },

  // Small text
  caption: {
    ...createPoppinsStyle('regular'),
    fontSize: createResponsiveFontSize(fontSizes.sm),
    lineHeight: createResponsiveFontSize(fontSizes.base),
  },
  small: {
    ...createPoppinsStyle('regular'),
    fontSize: createResponsiveFontSize(fontSizes.xs),
    lineHeight: createResponsiveFontSize(fontSizes.sm),
  },

  // Buttons
  button: {
    ...createPoppinsStyle('semiBold'),
    fontSize: createResponsiveFontSize(fontSizes.base),
  },
  buttonLarge: {
    ...createPoppinsStyle('semiBold'),
    fontSize: createResponsiveFontSize(fontSizes.lg),
  },
  buttonSmall: {
    ...createPoppinsStyle('medium'),
    fontSize: createResponsiveFontSize(fontSizes.sm),
  },

  // Labels
  label: {
    ...createPoppinsStyle('medium'),
    fontSize: createResponsiveFontSize(fontSizes.sm),
  },
  labelLarge: {
    ...createPoppinsStyle('medium'),
    fontSize: createResponsiveFontSize(fontSizes.base),
  },

  // Special text styles
  overline: {
    ...createPoppinsStyle('medium'),
    fontSize: createResponsiveFontSize(fontSizes.xs),
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  subtitle: {
    ...createPoppinsStyle('medium'),
    fontSize: createResponsiveFontSize(fontSizes.lg),
    lineHeight: createResponsiveFontSize(fontSizes.xl),
  },
  subtitle2: {
    ...createPoppinsStyle('regular'),
    fontSize: createResponsiveFontSize(fontSizes.base),
    lineHeight: createResponsiveFontSize(fontSizes.lg),
  },
};

// Predefined font combinations for common use cases
export const fontStyles = {
  // Headers
  heroTitle: typography.h1,
  sectionTitle: typography.h2,
  cardTitle: typography.h3,
  subsectionTitle: typography.h4,

  // Body text
  paragraph: typography.body,
  paragraphLarge: typography.bodyLarge,
  paragraphSmall: typography.bodySmall,

  // UI elements
  buttonPrimary: typography.button,
  buttonSecondary: typography.buttonSmall,
  label: typography.label,
  caption: typography.caption,

  // Special
  overline: typography.overline,
  subtitle: typography.subtitle,
} as const;
