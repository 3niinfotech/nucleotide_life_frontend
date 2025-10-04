# Responsive Font Migration Guide

This guide provides a comprehensive approach to migrating all font usage in your React Native app to use the new responsive font system.

## Overview

The analysis found **31 files** with **309 font usage patterns** that need to be updated to use responsive fonts. This migration will ensure consistent, scalable typography across all screen sizes and devices.

## Migration Pattern

For each component, follow this pattern:

### 1. Update Imports

```tsx
// Remove this:
import { poppinsWeights } from "../../utils/fonts";

// Add this:
import { useResponsiveFontUtils } from "../../hooks";
```

### 2. Add Hook to Component

```tsx
const MyComponent: React.FC = () => {
  const { getResponsiveStyle } = useResponsiveFontUtils();

  // ... rest of component
};
```

### 3. Update Text Components

```tsx
// Before:
<Text style={styles.title}>Title</Text>

// After:
<Text style={[styles.title, getResponsiveStyle("semiBold", 18)]}>Title</Text>
```

### 4. Clean Up StyleSheet

```tsx
// Remove from StyleSheet:
const styles = StyleSheet.create({
  title: {
    fontSize: 18, // Remove this
    fontFamily: poppinsWeights.semiBold, // Remove this
    color: semantic.text.primary, // Keep this
    marginBottom: 8, // Keep this
  },
});

// Keep only non-font properties:
const styles = StyleSheet.create({
  title: {
    color: semantic.text.primary,
    marginBottom: 8,
  },
});
```

## Files Requiring Migration

### High Priority (Core Components)

1. **src/components/Footer/Footer.tsx** - 16 patterns
2. **src/components/HomeScreem/NucleotideSelectionSection.tsx** - 24 patterns
3. **src/components/shared/NewAddressModal.tsx** - 25 patterns
4. **src/components/shared/TotalContainer.tsx** - 23 patterns
5. **src/screens/ProductDetailsScreen.tsx** - 37 patterns
6. **src/screens/ProfileScreen.tsx** - 27 patterns

### Medium Priority (Screen Components)

7. **src/screens/CheckoutScreen.tsx** - 16 patterns
8. **src/screens/HomeScreen.tsx** - 13 patterns
9. **src/components/shared/DeliveryAddressSection.tsx** - 14 patterns
10. **src/components/shared/OrderMemberSection.tsx** - 13 patterns

### Lower Priority (Utility Components)

11. **src/components/HomeScreem/DataSecuritySection.tsx** - 12 patterns
12. **src/components/NavigationMenu/NavigationMenu.tsx** - 12 patterns
13. **src/components/shared/RequestOTPModal.tsx** - 10 patterns
14. **src/components/HomeScreem/HealthJourneysSection.tsx** - 9 patterns
15. **src/components/HomeScreem/TestimonialsSection.tsx** - 7 patterns

### Remaining Files (5-6 patterns each)

- src/components/HomeScreem/FAQSection.tsx
- src/components/HomeScreem/HowItWorksSection.tsx
- src/components/HomeScreem/TrustedMindsSection.tsx
- src/components/HomeScreem/WhatYouGetSection.tsx
- src/components/HomeScreem/WhyDNATestingSection.tsx
- src/components/NavigationHeader/NavigationHeader.tsx
- src/components/platforms/mobile/navigation/MobileNavigation.tsx
- src/components/platforms/web/navigation/WebNavigation.tsx
- src/components/shared/Badge.tsx
- src/components/shared/ErrorBoundary.tsx
- src/components/shared/OTPModal.tsx
- src/navigation/RootNavigator.tsx
- src/screens/CheckoutDetailsScreen.tsx
- src/screens/ProductsScreen.tsx
- src/screens/TrackScreen.tsx
- src/screens/UploadScreen.tsx

## Font Size Mappings

Use these mappings for common font sizes:

| Font Size | Weight   | Usage           | Responsive Style                     |
| --------- | -------- | --------------- | ------------------------------------ |
| 48px      | semiBold | Hero titles     | `getResponsiveStyle("semiBold", 48)` |
| 36px      | bold     | Section titles  | `getResponsiveStyle("bold", 36)`     |
| 32px      | bold     | Large headings  | `getResponsiveStyle("bold", 32)`     |
| 24px      | semiBold | Medium headings | `getResponsiveStyle("semiBold", 24)` |
| 20px      | semiBold | Small headings  | `getResponsiveStyle("semiBold", 20)` |
| 18px      | medium   | Subheadings     | `getResponsiveStyle("medium", 18)`   |
| 16px      | regular  | Body text       | `getResponsiveStyle("regular", 16)`  |
| 14px      | regular  | Small text      | `getResponsiveStyle("regular", 14)`  |
| 12px      | regular  | Captions        | `getResponsiveStyle("regular", 12)`  |

## Font Weight Mappings

| Old Weight                            | New Weight                       | Usage             |
| ------------------------------------- | -------------------------------- | ----------------- |
| `fontWeight: 'bold'`                  | `getResponsiveStyle("bold")`     | Bold text         |
| `fontWeight: '600'`                   | `getResponsiveStyle("semiBold")` | Semi-bold text    |
| `fontWeight: '500'`                   | `getResponsiveStyle("medium")`   | Medium text       |
| `fontWeight: '400'`                   | `getResponsiveStyle("regular")`  | Regular text      |
| `fontFamily: poppinsWeights.bold`     | `getResponsiveStyle("bold")`     | Bold Poppins      |
| `fontFamily: poppinsWeights.semiBold` | `getResponsiveStyle("semiBold")` | Semi-bold Poppins |
| `fontFamily: poppinsWeights.medium`   | `getResponsiveStyle("medium")`   | Medium Poppins    |
| `fontFamily: poppinsWeights.regular`  | `getResponsiveStyle("regular")`  | Regular Poppins   |

## Automated Migration Script

You can use the provided script to analyze and generate migration suggestions:

```bash
# Analyze current font usage
node scripts/simpleFontAnalyzer.js

# This will show all files and their font usage patterns
```

## Testing After Migration

After migrating each component:

1. **Test on different screen sizes:**

   - Small mobile (iPhone SE: 320px)
   - Standard mobile (iPhone 12: 375px)
   - Large mobile (iPhone 12 Pro Max: 414px)
   - Tablet (iPad: 768px)
   - Desktop (1024px+)

2. **Verify responsive behavior:**

   - Fonts should scale appropriately
   - Text should remain readable
   - Layout should not break

3. **Check platform differences:**
   - iOS: Standard sizing
   - Android: Slightly smaller (95%)
   - Web: Standard sizing with CSS fallbacks

## Benefits After Migration

- **Consistent Typography**: All text will use the same responsive system
- **Better UX**: Fonts will scale appropriately for each device
- **Maintainable Code**: Centralized font management
- **Accessibility**: Support for Dynamic Type and user preferences
- **Performance**: Optimized font loading and caching

## Example Migration

Here's a complete example of migrating a component:

### Before:

```tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { poppinsWeights } from "../../utils/fonts";
import { semantic } from "../../utils/colors";

const MyComponent: React.FC = () => {
  return (
    <View>
      <Text style={styles.title}>Title</Text>
      <Text style={styles.body}>Body text</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: poppinsWeights.semiBold,
    color: semantic.text.primary,
    marginBottom: 16,
  },
  body: {
    fontSize: 16,
    fontFamily: poppinsWeights.regular,
    color: semantic.text.secondary,
  },
});
```

### After:

```tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useResponsiveFontUtils } from "../../hooks";
import { semantic } from "../../utils/colors";

const MyComponent: React.FC = () => {
  const { getResponsiveStyle } = useResponsiveFontUtils();

  return (
    <View>
      <Text style={[styles.title, getResponsiveStyle("semiBold", 24)]}>
        Title
      </Text>
      <Text style={[styles.body, getResponsiveStyle("regular", 16)]}>
        Body text
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: semantic.text.primary,
    marginBottom: 16,
  },
  body: {
    color: semantic.text.secondary,
  },
});
```

## Next Steps

1. Start with high-priority files (Footer, NucleotideSelectionSection, etc.)
2. Test each migrated component thoroughly
3. Move to medium-priority files
4. Complete remaining files
5. Run the analysis script again to verify all patterns are updated
6. Test the entire app on different devices and screen sizes

This migration will result in a fully responsive font system that provides excellent user experience across all devices and screen sizes.
