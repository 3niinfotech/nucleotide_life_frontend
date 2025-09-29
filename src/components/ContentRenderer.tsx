import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useAppSelector } from '../hooks';
import { semantic } from '../utils/colors';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import UploadScreen from '../screens/UploadScreen';
import TrackScreen from '../screens/TrackScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/auth/LoginScreen';

const ContentRenderer: React.FC = () => {
  const { activeSection } = useAppSelector((state: any) => state.navigation);

  const renderContent = () => {
    switch (activeSection) {
      case '/':
        return <HomeScreen />; //<LoginScreen />;
      case 'home':
        return <HomeScreen />;
      case 'products':
        return <ProductsScreen />;
      case 'product-details':
        return <ProductDetailsScreen />;
      case 'upload':
        return <UploadScreen />;
      case 'track':
        return <TrackScreen />;
      case 'profile':
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
