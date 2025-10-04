import React, { useMemo } from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { semantic } from "../../utils/colors";
import { useResponsiveContext } from "../../contexts/ResponsiveContext";
import PrimaryButton from "./PrimaryButton";

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
    const { getResponsiveStyle } = useResponsiveContext();

    const hasHeader = useMemo(
      () => !!(title || subtitle || ctaLabel),
      [title, subtitle, ctaLabel]
    );

    const containerStyle = useMemo(() => [styles.section, style], [style]);

    const titleStyle = useMemo(
      () => [
        styles.title,
        getResponsiveStyle("semiBold", 48),
        { color: semantic.text.primary },
      ],
      [getResponsiveStyle]
    );

    const subtitleStyle = useMemo(
      () => [
        styles.subtitle,
        getResponsiveStyle("regular", 18),
        { color: semantic.text.secondary },
      ],
      [getResponsiveStyle]
    );

    return (
      <View style={containerStyle} testID={testID}>
        {hasHeader && (
          <View style={styles.headerRow}>
            <View style={styles.textContainer}>
              {!!title && (
                <Text style={titleStyle} accessibilityRole="header">
                  {title}
                </Text>
              )}
              {!!subtitle && <Text style={subtitleStyle}>{subtitle}</Text>}
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
  }
);

const styles = StyleSheet.create({
  section: {
    paddingVertical: 50,
    gap: 16,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    marginBottom: 8,
    paddingHorizontal: 24,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    textAlign: "center",
  },
  subtitle: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
    maxWidth: "70%",
  },
});

export default Section;
