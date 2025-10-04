# Responsive Font System

This document describes the comprehensive responsive font system implemented for the React Native app. The system provides automatic font scaling based on screen size, platform, and accessibility preferences.

## Overview

The responsive font system provides:

- **Automatic scaling** based on screen dimensions
- **Platform-specific adjustments** for iOS, Android, and Web
- **Accessibility support** for Dynamic Type (iOS) and user preferences
- **Consistent typography** across all screen sizes
- **Easy-to-use hooks** and utility functions
- **Performance optimized** with memoization

## Key Features

### 1. Screen Size Categories

The system automatically categorizes screens into:

- **Small Mobile** (≤320px): iPhone SE, small Android phones
- **Mobile** (≤375px): Standard mobile phones
- **Large Mobile** (≤414px): iPhone Plus, large Android phones
- **Small Tablet** (≤768px): iPad Mini, small tablets
- **Tablet** (≤1024px): iPad, standard tablets
- **Desktop** (≤1280px): Small desktop screens
- **Large Desktop** (≤1440px): Large desktop screens
- **XL Desktop** (>1440px): Extra large desktop screens

### 2. Responsive Scaling

Font sizes are automatically scaled based on screen width:

- **Small screens**: 70-80% of base size
- **Medium screens**: 85-95% of base size
- **Large screens**: 100-110% of base size

### 3. Platform Adjustments

- **iOS**: Standard sizing
- **Android**: 95% of base size for better readability
- **Web**: Standard sizing with CSS fallbacks

## Usage

### Basic Usage with Hooks

```tsx
import { useResponsiveFontUtils, useTypography } from "../hooks";

const MyComponent = () => {
  const { getResponsiveTypography } = useResponsiveFontUtils();
  const typography = useTypography();
  const responsiveTypography = getResponsiveTypography();

  return (
    <View>
      {/* Using hook-based typography */}
      <Text style={typography.heroTitle}>Hero Title</Text>
      <Text style={typography.paragraph}>Body text</Text>

      {/* Using responsive typography directly */}
      <Text style={responsiveTypography.h1}>Heading 1</Text>
      <Text style={responsiveTypography.body}>Body text</Text>
    </View>
  );
};
```

### Custom Font Sizes

```tsx
import { useResponsiveFontUtils } from "../hooks";

const MyComponent = () => {
  const { getResponsiveSize, getResponsiveStyle } = useResponsiveFontUtils();

  return (
    <View>
      {/* Custom responsive font size */}
      <Text style={getResponsiveStyle("bold", 20)}>
        Custom 20px text (responsive)
      </Text>

      {/* With scaling factor */}
      <Text style={getResponsiveStyle("medium", 16, 1.2)}>Scaled up 20%</Text>
    </View>
  );
};
```

### Utility Class Usage

```tsx
import { ResponsiveFontUtils } from "../utils/responsiveFonts";

// Update screen dimensions (usually done automatically)
ResponsiveFontUtils.updateScreenDimensions(width, height);

// Get responsive font size
const fontSize = ResponsiveFontUtils.getResponsiveSize(16);

// Get responsive font style
const fontStyle = ResponsiveFontUtils.getResponsiveStyle("bold", 20);

// Get responsive typography
const typography = ResponsiveFontUtils.getResponsiveTypography();
```

## Available Hooks

### `useResponsiveFontUtils()`

Main hook for responsive font utilities:

```tsx
const {
  getResponsiveSize, // Get responsive font size
  getResponsiveStyle, // Get responsive font style
  getResponsiveTypography, // Get all responsive typography
  getResponsiveSpacing, // Get responsive spacing
  getScreenSizeCategory, // Get current screen category
  screenWidth, // Current screen width
  screenHeight, // Current screen height
} = useResponsiveFontUtils();
```

### `useTypography()`

Predefined typography styles with responsive sizing:

```tsx
const typography = useTypography();

// Available styles:
typography.heroTitle; // H1 - Hero titles
typography.sectionTitle; // H2 - Section titles
typography.cardTitle; // H3 - Card titles
typography.subsectionTitle; // H4 - Subsection titles
typography.paragraph; // Body text
typography.paragraphLarge; // Large body text
typography.paragraphSmall; // Small body text
typography.buttonPrimary; // Primary button text
typography.buttonSecondary; // Secondary button text
typography.label; // Form labels
typography.caption; // Caption text
typography.overline; // Uppercase small text
typography.subtitle; // Subtitle text
```

### `useResponsiveFonts()`

Advanced responsive font utilities:

```tsx
const {
  getResponsiveSize, // Get responsive font size
  getResponsiveStyle, // Get responsive font style
  getResponsiveTypography, // Get responsive typography
  screenWidth, // Current screen width
  screenHeight, // Current screen height
} = useResponsiveFonts();
```

### `useAccessibilityFonts()`

Accessibility font scaling support:

```tsx
const {
  accessibilityScale, // Current accessibility scale
  getAccessibleSize, // Get accessible font size
  getAccessibleStyle, // Get accessible font style
} = useAccessibilityFonts();
```

## Typography Styles

### Headings

- **H1 (Hero Title)**: 48px base → 24-53px responsive
- **H2 (Section Title)**: 36px base → 18-40px responsive
- **H3 (Card Title)**: 30px base → 15-33px responsive
- **H4 (Subsection Title)**: 24px base → 12-26px responsive
- **H5**: 20px base → 10-22px responsive
- **H6**: 18px base → 9-20px responsive

### Body Text

- **Body**: 16px base → 8-18px responsive
- **Body Large**: 18px base → 9-20px responsive
- **Body Small**: 14px base → 7-16px responsive

### UI Elements

- **Button Primary**: 16px base → 8-18px responsive
- **Button Secondary**: 14px base → 7-16px responsive
- **Label**: 14px base → 7-16px responsive
- **Caption**: 14px base → 7-16px responsive

### Special

- **Overline**: 12px base → 6-13px responsive (uppercase)
- **Subtitle**: 18px base → 9-20px responsive

## Migration Guide

### From Static Fonts

**Before:**

```tsx
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
  },
});
```

**After:**

```tsx
const MyComponent = () => {
  const { getResponsiveStyle } = useResponsiveFontUtils();

  return <Text style={getResponsiveStyle("semiBold", 24)}>Title</Text>;
};
```

### From Existing Typography

**Before:**

```tsx
<Text style={fontStyles.heroTitle}>Hero Title</Text>
```

**After:**

```tsx
const typography = useTypography();
<Text style={typography.heroTitle}>Hero Title</Text>;
```

## Best Practices

### 1. Use Hooks for Dynamic Components

```tsx
// ✅ Good - Uses hooks for responsive behavior
const MyComponent = () => {
  const { getResponsiveTypography } = useResponsiveFontUtils();
  const typography = getResponsiveTypography();

  return <Text style={typography.h1}>Title</Text>;
};
```

### 2. Memoize Style Objects

```tsx
// ✅ Good - Memoized for performance
const MyComponent = () => {
  const { getResponsiveTypography } = useResponsiveFontUtils();
  const typography = getResponsiveTypography();

  const titleStyle = useMemo(
    () => [typography.h1, { color: "blue" }],
    [typography]
  );

  return <Text style={titleStyle}>Title</Text>;
};
```

### 3. Use Predefined Styles When Possible

```tsx
// ✅ Good - Uses predefined responsive styles
const typography = useTypography();
<Text style={typography.paragraph}>Body text</Text>

// ❌ Avoid - Manual font sizing
<Text style={{ fontSize: 16 }}>Body text</Text>
```

### 4. Test on Different Screen Sizes

Always test your components on:

- Small mobile devices (iPhone SE)
- Standard mobile devices (iPhone 12)
- Large mobile devices (iPhone 12 Pro Max)
- Tablets (iPad)
- Desktop screens

## Performance Considerations

- **Memoization**: All hooks use memoization to prevent unnecessary recalculations
- **Screen Updates**: Screen dimensions are only updated when they change
- **Style Objects**: Style objects are memoized to prevent re-renders
- **Platform Detection**: Platform detection is cached for performance

## Accessibility

The system supports:

- **Dynamic Type** (iOS): Automatic scaling based on user preferences
- **Accessibility Scaling**: Manual scaling support
- **Minimum Font Sizes**: Ensures readability on all devices
- **Maximum Font Sizes**: Prevents UI breaking on large screens

## Troubleshooting

### Fonts Not Scaling

1. Ensure you're using the responsive hooks
2. Check that screen dimensions are being updated
3. Verify the component is re-rendering on screen changes

### Performance Issues

1. Use `useMemo` for style objects
2. Avoid creating new style objects in render
3. Use the utility class for static components

### Inconsistent Sizing

1. Check platform-specific adjustments
2. Verify screen size category detection
3. Ensure accessibility scaling is working correctly

## Examples

See `src/components/shared/ResponsiveFontDemo.tsx` for comprehensive examples of all features.

## API Reference

### ResponsiveFontUtils Class

```tsx
class ResponsiveFontUtils {
  static updateScreenDimensions(width: number, height: number): void;
  static getResponsiveSize(
    baseSize: number,
    scale?: number,
    accessibilityScale?: number
  ): number;
  static getResponsiveStyle(
    weight: string,
    baseSize: number,
    scale?: number,
    italic?: boolean,
    accessibilityScale?: number
  ): TextStyle;
  static getResponsiveTypography(): Record<string, TextStyle>;
  static getResponsiveSpacing(baseSpacing: number): number;
  static getScreenSizeCategory(): string;
}
```

### Utility Functions

```tsx
getResponsiveFontSize(baseSize: number, scale?: number): number
getResponsiveFontStyle(weight: string, baseSize: number, scale?: number, italic?: boolean): TextStyle
getResponsiveTypography(): Record<string, TextStyle>
isSmallScreen(): boolean
isMobileScreen(): boolean
isTabletScreen(): boolean
isDesktopScreen(): boolean
```
