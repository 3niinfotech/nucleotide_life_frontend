import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from './types';
import { semantic } from '../utils/colors';

// Import auth screens
import LoginScreen from '../screens/auth/LoginScreen';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: semantic.background.primary,
        },
        animation: 'fade',
        gestureEnabled: true,
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      {/* Add other auth screens here when created */}
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
