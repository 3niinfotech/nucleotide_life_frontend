import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { semantic, primary } from "../../../../utils/colors";
import { typography } from "../../../../utils/fonts";
import { useResponsiveFontUtils } from "../../../../hooks";

interface NavigationItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: number;
}

interface MobileNavigationProps {
  items: NavigationItem[];
  activeItem?: string;
  onItemPress?: (item: NavigationItem) => void;
  type?: "bottom" | "top";
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  items,
  activeItem,
  onItemPress,
  type = "bottom",
}) => {
  const { getResponsiveStyle } = useResponsiveFontUtils();
  const handleItemPress = (item: NavigationItem) => {
    onItemPress?.(item);
  };

  const renderNavigationItem = (item: NavigationItem) => (
    <TouchableOpacity
      key={item.id}
      style={[
        styles.navItem,
        type === "bottom" && styles.bottomNavItem,
        activeItem === item.id && styles.activeNavItem,
      ]}
      onPress={() => handleItemPress(item)}
    >
      <View style={styles.navIcon}>
        {item.icon}
        {item.badge && item.badge > 0 && (
          <View style={styles.badge}>
            <Text style={[styles.badgeText, getResponsiveStyle("regular", 12)]}>
              {item.badge > 99 ? "99+" : item.badge}
            </Text>
          </View>
        )}
      </View>
      <Text
        style={[
          styles.navText,
          getResponsiveStyle("regular", 12),
          type === "bottom" && styles.bottomNavText,
          activeItem === item.id && styles.activeNavText,
        ]}
      >
        {item.label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, type === "top" && styles.topContainer]}>
      {items.map(renderNavigationItem)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: semantic.background.primary,
    borderTopWidth: 1,
    borderTopColor: semantic.border.light,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  topContainer: {
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: semantic.border.light,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 4,
    gap: 4,
  },
  bottomNavItem: {
    minHeight: 60,
    justifyContent: "center",
  },
  activeNavItem: {
    backgroundColor: primary.purple + "10",
    borderRadius: 8,
  },
  navIcon: {
    position: "relative",
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -8,
    backgroundColor: "#FF3B30",
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  badgeText: {
    color: "white",
    fontWeight: "600",
  },
  navText: {
    ...typography.caption,
    color: semantic.text.secondary,
    textAlign: "center",
  },
  bottomNavText: {},
  activeNavText: {
    color: primary.purple,
  },
});

export default MobileNavigation;
