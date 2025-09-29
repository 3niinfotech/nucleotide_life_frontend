import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainTabParamList } from './types';
import { semantic } from '../utils/colors';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import UploadScreen from '../screens/UploadScreen';
import TrackScreen from '../screens/TrackScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator<MainTabParamList>();

const MainTabNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: semantic.background.primary,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          title: 'Products',
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          title: 'Product Details',
        }}
      />
      <Stack.Screen
        name="Upload"
        component={UploadScreen}
        options={{
          title: 'Upload DNA',
        }}
      />
      <Stack.Screen
        name="Track"
        component={TrackScreen}
        options={{
          title: 'Track Order',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainTabNavigator;
