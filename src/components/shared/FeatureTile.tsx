import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import { semantic } from "../../utils/colors";
import { useResponsiveFontUtils } from "../../hooks";

type IconProp = React.ReactNode | React.ComponentType<any>;

type Props = {
  title: string;
  description: string;
  icon?: IconProp; // React node (<IcFb />) or component (IcFb)
  style?: ViewStyle;
};

const FeatureTile: React.FC<Props> = ({ title, description, icon, style }) => {
  const { getResponsiveStyle } = useResponsiveFontUtils();

  const renderIcon = () => {
    if (!icon) return null;
    if (React.isValidElement(icon)) {
      // Clone the element and apply consistent sizing only (no resizeMode for SVGs)
      return React.cloneElement(icon as any, {
        width: 60,
        height: 60,
      });
    }
    const IconComp = icon as React.ComponentType<any>;
    return <IconComp width={56} height={56} />;
  };

  return (
    <View style={[styles.card, style]}>
      <View style={styles.iconContainer}>{renderIcon()}</View>
      <Text style={[styles.title, getResponsiveStyle("semiBold", 20)]}>
        {title}
      </Text>
      <Text style={[styles.description, getResponsiveStyle("regular", 16)]}>
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexBasis: "32%",
    backgroundColor: semantic.background.primary,
    borderWidth: 0.5,
    borderColor: semantic.border.light,
    borderRadius: 10,
    padding: 20,
    marginBottom: 18,
  },
  iconContainer: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    backgroundColor: "transparent",
    borderRadius: 10,
    overflow: "hidden",
  },
  title: {
    color: semantic.text.primary,
    marginBottom: 8,
  },
  description: {
    color: semantic.text.secondary,
  },
});

export default FeatureTile;
