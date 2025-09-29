# Poppins Font System

This document describes the comprehensive font system implemented using Poppins fonts from the `assets/fonts` directory.

## Overview

The font system provides:

- Complete Poppins font family integration (all weights and styles)
- Cross-platform support (iOS, Android, Web)
- Responsive font sizing
- Custom hooks for easy usage
- Predefined typography styles
- Utility functions for custom font combinations

## Font Files

All Poppins font variants are located in `src/assets/fonts/Poppins/`:

- Regular weights: Thin, ExtraLight, Light, Regular, Medium, SemiBold, Bold, ExtraBold, Black
- Italic weights: All regular weights with italic variants
- Total: 18 font files

## Core Files

### 1. `src/utils/fonts.ts`

Main font configuration and utilities:

- Font family definitions
- Font weight mappings
- Typography styles
- Utility functions for creating font styles

### 2. `src/utils/fontRegistration.ts`

Font loading and registration utilities:

- Web font loading via CSS
- Mobile font availability checking
- Font loading status management

### 3. `src/hooks/useFonts.ts`

Custom React hooks for font usage:

- `useFonts()` - Font loading status
- `useFontStyle()` - Create custom font styles
- `useResponsiveFonts()` - Responsive font sizing
- `useTypography()` - Predefined typography styles
- `useFontWeights()` - Font weight utilities
- `useFontSizes()` - Font size utilities

## Usage Examples

### Basic Typography

```tsx
import { fontStyles } from '../utils/fonts';

// Use predefined styles
<Text style={fontStyles.heroTitle}>Hero Title</Text>
<Text style={fontStyles.sectionTitle}>Section Title</Text>
<Text style={fontStyles.paragraph}>Body text</Text>
<Text style={fontStyles.caption}>Caption text</Text>
```

### Using Hooks

```tsx
import { useTypography, useFontStyle } from '../hooks';

const MyComponent = () => {
  const typography = useTypography();
  const { createStyle } = useFontStyle();

  return (
    <View>
      <Text style={typography.heroTitle}>Hero Title</Text>
      <Text style={createStyle('bold', 'lg')}>Custom Bold Large</Text>
      <Text style={createStyle('medium', 'base', true)}>Medium Italic</Text>
    </View>
  );
};
```

### Custom Font Combinations

```tsx
import { createPoppinsStyle, fontSizes } from '../utils/fonts';

const customStyle = {
  ...createPoppinsStyle('semiBold', true), // SemiBold Italic
  fontSize: fontSizes.xl,
  color: '#FF6B6B',
  textAlign: 'center',
};
```

### Responsive Fonts

```tsx
import { useResponsiveFonts } from '../hooks';

const MyComponent = () => {
  const { getResponsiveStyle } = useResponsiveFonts();

  return (
    <Text style={getResponsiveStyle('bold', 16, 1.2)}>
      Responsive text (16px * 1.2 scale)
    </Text>
  );
};
```

## Available Font Weights

| Weight     | Value | Poppins File       |
| ---------- | ----- | ------------------ |
| thin       | 100   | Poppins-Thin       |
| extraLight | 200   | Poppins-ExtraLight |
| light      | 300   | Poppins-Light      |
| regular    | 400   | Poppins-Regular    |
| medium     | 500   | Poppins-Medium     |
| semiBold   | 600   | Poppins-SemiBold   |
| bold       | 700   | Poppins-Bold       |
| extraBold  | 800   | Poppins-ExtraBold  |
| black      | 900   | Poppins-Black      |

## Available Font Sizes

| Size | Value (px) |
| ---- | ---------- |
| xs   | 12         |
| sm   | 14         |
| base | 16         |
| lg   | 18         |
| xl   | 20         |
| 2xl  | 24         |
| 3xl  | 30         |
| 4xl  | 36         |
| 5xl  | 48         |
| 6xl  | 60         |

## Predefined Typography Styles

### Headers

- `heroTitle` - H1 style
- `sectionTitle` - H2 style
- `cardTitle` - H3 style
- `subsectionTitle` - H4 style

### Body Text

- `paragraph` - Regular body text
- `paragraphLarge` - Large body text
- `paragraphSmall` - Small body text

### UI Elements

- `buttonPrimary` - Primary button text
- `buttonSecondary` - Secondary button text
- `label` - Form labels
- `caption` - Small descriptive text

### Special

- `overline` - Uppercase small text
- `subtitle` - Subtitle text

## Platform Support

### Web

- Fonts loaded via CSS @font-face
- Fallback fonts for better compatibility
- Font display optimization

### iOS

- Native font linking via react-native.config.js
- Automatic font registration

### Android

- Native font linking via react-native.config.js
- Slightly smaller font sizes for better readability

## Setup Instructions

1. **Font Linking** (already configured):

   ```bash
   npx react-native-asset
   ```

2. **Web Font Loading** (automatic):
   Fonts are automatically loaded when the app starts

3. **Usage in Components**:
   ```tsx
   import { fontStyles } from '../utils/fonts';
   // or
   import { useTypography } from '../hooks';
   ```

## Best Practices

1. **Use Predefined Styles**: Prefer `fontStyles` over custom combinations for consistency
2. **Responsive Design**: Use `useResponsiveFonts` for platform-specific sizing
3. **Performance**: Fonts are loaded once and cached
4. **Accessibility**: All font styles maintain proper contrast ratios
5. **Consistency**: Use the same font styles across similar UI elements

## Migration from Old Font System

If migrating from the old font system:

1. Replace `typography.h1` with `fontStyles.heroTitle`
2. Replace `typography.body` with `fontStyles.paragraph`
3. Replace `typography.button` with `fontStyles.buttonPrimary`
4. Use hooks for dynamic font styling

## Troubleshooting

### Fonts Not Loading

1. Check if fonts are properly linked: `npx react-native-asset`
2. Verify font files exist in `src/assets/fonts/Poppins/`
3. Check console for font loading errors

### Web Font Issues

1. Ensure fonts are served correctly
2. Check browser developer tools for font loading errors
3. Verify CSS @font-face declarations

### Mobile Font Issues

1. Clean and rebuild the project
2. Check `react-native.config.js` configuration
3. Verify font file names match exactly

## Example Component

See `src/components/shared/FontExample.tsx` for a comprehensive example of all font utilities and hooks in action.
