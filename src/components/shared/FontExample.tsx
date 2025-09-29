import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {
  useTypography,
  useFontStyle,
  useResponsiveFonts,
  useFontWeights,
  useFontSizes,
} from '../../hooks';
import { semantic } from '../../utils/colors';

/**
 * Example component demonstrating the new font utilities and hooks
 * This component shows how to use all the font-related utilities
 */
const FontExample: React.FC = () => {
  const typography = useTypography();
  const { createStyle } = useFontStyle();
  const { getResponsiveStyle } = useResponsiveFonts();
  const { weights, poppinsWeights } = useFontWeights();
  const { sizes } = useFontSizes();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Font Utilities Demo</Text>

      {/* Typography Examples */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Typography Styles</Text>
        <Text style={typography.heroTitle}>Hero Title (H1)</Text>
        <Text style={typography.sectionTitle}>Section Title (H2)</Text>
        <Text style={typography.cardTitle}>Card Title (H3)</Text>
        <Text style={typography.subsectionTitle}>Subsection Title (H4)</Text>
        <Text style={typography.paragraph}>
          This is a paragraph with regular text.
        </Text>
        <Text style={typography.paragraphLarge}>
          This is a large paragraph.
        </Text>
        <Text style={typography.paragraphSmall}>
          This is a small paragraph.
        </Text>
        <Text style={typography.caption}>This is a caption text.</Text>
        <Text style={typography.overline}>OVERLINE TEXT</Text>
        <Text style={typography.subtitle}>This is a subtitle</Text>
      </View>

      {/* Button Styles */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Button Styles</Text>
        <View style={styles.buttonContainer}>
          <Text style={typography.buttonPrimary}>Primary Button</Text>
          <Text style={typography.buttonSecondary}>Secondary Button</Text>
        </View>
      </View>

      {/* Custom Font Weights */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Font Weights</Text>
        <Text style={createStyle('thin', 'lg')}>Thin (100)</Text>
        <Text style={createStyle('extraLight', 'lg')}>Extra Light (200)</Text>
        <Text style={createStyle('light', 'lg')}>Light (300)</Text>
        <Text style={createStyle('regular', 'lg')}>Regular (400)</Text>
        <Text style={createStyle('medium', 'lg')}>Medium (500)</Text>
        <Text style={createStyle('semiBold', 'lg')}>Semi Bold (600)</Text>
        <Text style={createStyle('bold', 'lg')}>Bold (700)</Text>
        <Text style={createStyle('extraBold', 'lg')}>Extra Bold (800)</Text>
        <Text style={createStyle('black', 'lg')}>Black (900)</Text>
      </View>

      {/* Italic Variants */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Italic Variants</Text>
        <Text style={createStyle('regular', 'lg', true)}>Regular Italic</Text>
        <Text style={createStyle('medium', 'lg', true)}>Medium Italic</Text>
        <Text style={createStyle('bold', 'lg', true)}>Bold Italic</Text>
      </View>

      {/* Responsive Font Sizes */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Responsive Font Sizes</Text>
        <Text style={getResponsiveStyle('regular', 16, 1)}>
          Base Size (16px)
        </Text>
        <Text style={getResponsiveStyle('regular', 16, 1.2)}>
          Scaled Size (19.2px)
        </Text>
        <Text style={getResponsiveStyle('regular', 16, 0.8)}>
          Smaller Size (12.8px)
        </Text>
      </View>

      {/* Font Sizes */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Font Sizes</Text>
        <Text style={[createStyle('regular', 'xs'), styles.sizeLabel]}>
          XS: {sizes.xs}px
        </Text>
        <Text style={[createStyle('regular', 'sm'), styles.sizeLabel]}>
          SM: {sizes.sm}px
        </Text>
        <Text style={[createStyle('regular', 'base'), styles.sizeLabel]}>
          Base: {sizes.base}px
        </Text>
        <Text style={[createStyle('regular', 'lg'), styles.sizeLabel]}>
          LG: {sizes.lg}px
        </Text>
        <Text style={[createStyle('regular', 'xl'), styles.sizeLabel]}>
          XL: {sizes.xl}px
        </Text>
        <Text style={[createStyle('regular', '2xl'), styles.sizeLabel]}>
          2XL: {sizes['2xl']}px
        </Text>
        <Text style={[createStyle('regular', '3xl'), styles.sizeLabel]}>
          3XL: {sizes['3xl']}px
        </Text>
        <Text style={[createStyle('regular', '4xl'), styles.sizeLabel]}>
          4XL: {sizes['4xl']}px
        </Text>
        <Text style={[createStyle('regular', '5xl'), styles.sizeLabel]}>
          5XL: {sizes['5xl']}px
        </Text>
        <Text style={[createStyle('regular', '6xl'), styles.sizeLabel]}>
          6XL: {sizes['6xl']}px
        </Text>
      </View>

      {/* Custom Combinations */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Custom Combinations</Text>
        <Text
          style={[
            createStyle('bold', 'xl'),
            { color: semantic.interactive.primary },
          ]}
        >
          Bold XL with Primary Color
        </Text>
        <Text
          style={[
            createStyle('medium', 'lg', true),
            { color: semantic.text.secondary },
          ]}
        >
          Medium Italic with Secondary Color
        </Text>
        <Text
          style={[
            createStyle('semiBold', 'base'),
            {
              textAlign: 'center',
              backgroundColor: semantic.background.tertiary,
              padding: 8,
              borderRadius: 4,
            },
          ]}
        >
          Centered SemiBold with Background
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: semantic.background.primary,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: semantic.text.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
    padding: 16,
    backgroundColor: semantic.background.secondary,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: semantic.text.primary,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  sizeLabel: {
    marginBottom: 4,
  },
});

export default FontExample;
