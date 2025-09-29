import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { semantic, primary } from '../../../utils/colors';
import { typography } from '../../../utils/fonts';
import { useResponsive } from '../../../hooks/useResponsive';

interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  icon?: React.ReactNode;
  children?: NavigationItem[];
}

interface WebNavigationProps {
  items: NavigationItem[];
  activeItem?: string;
  onItemPress?: (item: NavigationItem) => void;
  logo?: React.ReactNode;
  className?: string;
}

const WebNavigation: React.FC<WebNavigationProps> = ({
  items,
  activeItem,
  onItemPress,
  logo,
  className,
}) => {
  const { isMobile, isTablet } = useResponsive();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleItemPress = (item: NavigationItem) => {
    onItemPress?.(item);
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const renderNavigationItem = (item: NavigationItem) => (
    <TouchableOpacity
      key={item.id}
      style={[styles.navItem, activeItem === item.id && styles.activeNavItem]}
      onPress={() => handleItemPress(item)}
    >
      {item.icon && <View style={styles.navIcon}>{item.icon}</View>}
      <Text
        style={[styles.navText, activeItem === item.id && styles.activeNavText]}
      >
        {item.label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, className]}>
      <View style={styles.navContent}>
        {logo && <View style={styles.logo}>{logo}</View>}

        {isMobile ? (
          // Mobile hamburger menu
          <View style={styles.mobileNav}>
            <TouchableOpacity
              style={styles.hamburger}
              onPress={() => setIsMenuOpen(!isMenuOpen)}
            >
              <View
                style={[
                  styles.hamburgerLine,
                  isMenuOpen && styles.hamburgerLineOpen,
                ]}
              />
              <View
                style={[
                  styles.hamburgerLine,
                  isMenuOpen && styles.hamburgerLineOpen,
                ]}
              />
              <View
                style={[
                  styles.hamburgerLine,
                  isMenuOpen && styles.hamburgerLineOpen,
                ]}
              />
            </TouchableOpacity>
          </View>
        ) : (
          // Desktop navigation
          <View style={styles.desktopNav}>
            {items.map(renderNavigationItem)}
          </View>
        )}
      </View>

      {/* Mobile menu overlay */}
      {isMobile && isMenuOpen && (
        <View style={styles.mobileMenu}>{items.map(renderNavigationItem)}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: semantic.background.primary,
    borderBottomWidth: 1,
    borderBottomColor: semantic.border.light,
  },
  navContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  logo: {
    flex: 1,
  },
  desktopNav: {
    flexDirection: 'row',
    gap: 32,
  },
  mobileNav: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hamburger: {
    width: 24,
    height: 18,
    justifyContent: 'space-between',
  },
  hamburgerLine: {
    height: 2,
    backgroundColor: semantic.text.primary,
    borderRadius: 1,
  },
  hamburgerLineOpen: {
    backgroundColor: 'transparent',
  },
  mobileMenu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: semantic.background.primary,
    borderBottomWidth: 1,
    borderBottomColor: semantic.border.light,
    paddingVertical: 16,
    paddingHorizontal: 24,
    gap: 16,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    gap: 8,
  },
  activeNavItem: {
    backgroundColor: primary.purple + '20',
  },
  navIcon: {
    width: 20,
    height: 20,
  },
  navText: {
    ...typography.body,
    color: semantic.text.primary,
    fontWeight: '500',
  },
  activeNavText: {
    color: primary.purple,
    fontWeight: '600',
  },
});

export default WebNavigation;

