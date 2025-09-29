import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { semantic } from '../utils/colors';

// Import navigators
import AuthStackNavigator from './AuthStackNavigator';
import { NavigationMenu, Footer } from '../components';
import ContentRenderer from '../components/ContentRenderer';

const RootNavigator: React.FC = () => {
  // In a real app, you would check authentication state here
  const isAuthenticated = true; // This should come from your auth state

  return (
    <View style={styles.container}>
      <NavigationContainer
        theme={{
          dark: false,
          colors: {
            primary: semantic.interactive.primary,
            background: semantic.background.primary,
            card: semantic.background.primary,
            text: semantic.text.primary,
            border: semantic.border.light,
            notification: semantic.interactive.primary,
          },
          fonts: {
            regular: {
              fontFamily: 'System',
              fontWeight: '400',
            },
            medium: {
              fontFamily: 'System',
              fontWeight: '500',
            },
            bold: {
              fontFamily: 'System',
              fontWeight: '700',
            },
            heavy: {
              fontFamily: 'System',
              fontWeight: '900',
            },
          },
        }}
      >
        {isAuthenticated ? (
          <View style={styles.mainContainer}>
            <NavigationMenu />
            <View style={styles.contentContainer}>
              <ContentRenderer />
            </View>
            <Footer />
          </View>
        ) : (
          <AuthStackNavigator />
        )}
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: semantic.background.primary,
  },
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});

export default RootNavigator;
