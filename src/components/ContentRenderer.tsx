import React from "react";
import { View, StyleSheet } from "react-native";
import { useAppSelector } from "../hooks";
import { semantic } from "../utils/colors";

// Import screens
import HomeScreen from "../screens/HomeScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import CheckoutDetailsScreen from "../screens/CheckoutDetailsScreen";
import UploadScreen from "../screens/UploadScreen";
import TrackScreen from "../screens/TrackScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen from "../screens/auth/LoginScreen";

const ContentRenderer: React.FC = () => {
  const { activeSection } = useAppSelector((state: any) => state.navigation);

  const renderContent = () => {
    switch (activeSection) {
      case "/":
        return <LoginScreen />; // <CheckoutDetailsScreen />; //<CheckoutScreen />; //<ProductDetailsScreen />; //<HomeScreen />; //<LoginScreen />;
      case "home":
        return <HomeScreen />;
      case "products":
        return <ProductsScreen />;
      case "product-details":
        return <ProductDetailsScreen />;
      case "checkout":
        return <CheckoutScreen />;
      case "checkout-details":
        return <CheckoutDetailsScreen />;
      case "upload":
        return <UploadScreen />;
      case "track":
        return <TrackScreen />;
      case "profile":
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return <View style={styles.container}>{renderContent()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: semantic.background.primary,
  },
});

export default ContentRenderer;
