import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import { useAppSelector, useAppDispatch } from "../../hooks/index";
import {
  setActiveSection,
  toggleMenu,
  closeMenu,
  openRequestOTPModal,
} from "../../store/slices/navigationSlice";
import { semantic, primary } from "../../utils/colors";
import { poppinsWeights } from "../../utils/fonts";
import { IcAppIcon } from "../../utils/iconUtil";

const NavigationMenu: React.FC = () => {
  const { activeSection, isMenuOpen } = useAppSelector(
    (state: any) => state.navigation
  );
  const dispatch = useAppDispatch();

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "products", label: "Products" },
    { id: "track", label: "Track Order" },
    { id: "login", label: "Login" },
  ];

  const handleMenuPress = (section: string) => {
    if (section === "login") {
      dispatch(openRequestOTPModal());
      dispatch(closeMenu());
    } else {
      dispatch(setActiveSection(section));
      dispatch(closeMenu());
    }
  };

  const handleActivateKit = () => {
    // Handle activate kit logic
    console.log("Activate Kit pressed");
  };

  const handleOrderKit = () => {
    // Navigate to products screen
    dispatch(setActiveSection("products"));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Left Container - Logo */}
        <View style={styles.leftContainer}>
          <View style={styles.logoContainer}>
            <IcAppIcon style={styles.logoIcon} />
          </View>
        </View>

        {/* Center Container - Navigation */}
        <View style={styles.centerContainer}>
          {Platform.OS === "web" ? (
            <View style={styles.desktopNav}>
              {menuItems.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.navItem}
                  onPress={() => handleMenuPress(item.id)}
                >
                  <Text
                    style={[
                      styles.navText,
                      activeSection === item.id && styles.activeNavText,
                    ]}
                  >
                    {item.label}
                  </Text>
                  {activeSection === item.id && (
                    <View style={styles.activeUnderline} />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <TouchableOpacity
              style={styles.mobileMenuButton}
              onPress={() => dispatch(toggleMenu())}
            >
              <View style={styles.hamburger}>
                <View style={styles.hamburgerLine} />
                <View style={styles.hamburgerLine} />
                <View style={styles.hamburgerLine} />
              </View>
            </TouchableOpacity>
          )}
        </View>

        {/* Right Container - Action Buttons */}
        <View style={styles.rightContainer}>
          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={styles.activateButton}
              onPress={handleActivateKit}
            >
              <Text style={styles.activateButtonText}>Activate Kit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.orderButton}
              onPress={handleOrderKit}
            >
              <Text style={styles.orderButtonText}>Order DNA Kit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {isMenuOpen && Platform.OS !== "web" && (
        <View style={styles.mobileMenu}>
          <ScrollView>
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.mobileNavItem,
                  activeSection === item.id && styles.activeMobileNavItem,
                ]}
                onPress={() => handleMenuPress(item.id)}
              >
                <Text
                  style={[
                    styles.mobileNavText,
                    activeSection === item.id && styles.activeMobileNavText,
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: semantic.background.primary,
    position: "relative",
    zIndex: 1000,
    borderBottomWidth: 1,
    borderBottomColor: semantic.border.light,
    shadowColor: semantic.shadow.light,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: semantic.background.primary,
    maxWidth: 1440,
    alignSelf: "center",
    width: "100%",
  },
  leftContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  centerContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  rightContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoIcon: {
    // SVG icon styling
  },
  desktopNav: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navItem: {
    marginHorizontal: 16,
    paddingVertical: 5,
    paddingHorizontal: 8,
    position: "relative",
  },
  navText: {
    fontFamily: poppinsWeights.regular,
    fontSize: 16,
    color: semantic.text.secondary,
  },
  activeNavText: {
    color: primary.purple,
    fontFamily: poppinsWeights.medium,
  },
  activeUnderline: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: primary.purple,
  },
  mobileMenuButton: {
    padding: 8,
  },
  hamburger: {
    width: 24,
    height: 18,
    justifyContent: "space-between",
  },
  hamburgerLine: {
    height: 2,
    backgroundColor: semantic.text.secondary,
    borderRadius: 1,
  },
  mobileMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: semantic.background.primary,
    borderTopWidth: 1,
    borderTopColor: semantic.border.light,
    maxHeight: 300,
    shadowColor: semantic.shadow.light,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  mobileNavItem: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: semantic.background.tertiary,
  },
  activeMobileNavItem: {
    backgroundColor: semantic.background.secondary,
  },
  mobileNavText: {
    color: semantic.text.secondary,
    fontSize: 16,
    fontWeight: "500",
  },
  activeMobileNavText: {
    color: semantic.text.primary,
    fontWeight: "600",
  },
  actionButtons: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  activateButton: {
    backgroundColor: semantic.background.primary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: semantic.border.light,
  },
  activateButtonText: {
    fontFamily: poppinsWeights.medium,
    fontSize: 14,
    color: semantic.text.secondary,
  },
  orderButton: {
    backgroundColor: primary.purple,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  orderButtonText: {
    fontFamily: poppinsWeights.medium,
    fontSize: 14,
    color: semantic.text.inverse,
  },
});

export default NavigationMenu;
