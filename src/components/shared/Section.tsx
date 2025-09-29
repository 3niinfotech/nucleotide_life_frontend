import React, { useMemo } from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { semantic } from '../../utils/colors';
import { poppinsWeights } from '../../utils/fonts';
import PrimaryButton from './PrimaryButton';

type Props = {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  onPressCta?: () => void;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  testID?: string;
};

const Section: React.FC<Props> = React.memo(
  ({ title, subtitle, ctaLabel, onPressCta, children, style, testID }) => {
    const hasHeader = useMemo(
      () => !!(title || subtitle || ctaLabel),
      [title, subtitle, ctaLabel],
    );

    const containerStyle = useMemo(() => [styles.section, style], [style]);

    return (
      <View style={containerStyle} testID={testID}>
        {hasHeader && (
          <View style={styles.headerRow}>
            <View style={styles.textContainer}>
              {!!title && (
                <Text style={styles.title} accessibilityRole="header">
                  {title}
                </Text>
              )}
              {!!subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
            {!!ctaLabel && (
              <PrimaryButton
                label={ctaLabel}
                onPress={onPressCta}
                testID={`${testID}-cta`}
              />
            )}
          </View>
        )}
        {children}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  section: {
    paddingVertical: 50,
    gap: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 8,
    paddingHorizontal: 24,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: semantic.text.primary,
    textAlign: 'center',
    fontSize: 48,
    lineHeight: 56,
    fontFamily: poppinsWeights.semiBold,
  },
  subtitle: {
    color: semantic.text.secondary,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 26,
    maxWidth: '70%',
    fontFamily: poppinsWeights.regular,
  },
});

export default Section;
