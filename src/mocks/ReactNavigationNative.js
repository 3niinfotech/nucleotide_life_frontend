// Mock for @react-navigation/native to avoid exports issues
import React from 'react';

export const NavigationContainer = ({ children }) => children;
export const useNavigation = () => ({
  navigate: () => {},
  goBack: () => {},
  reset: () => {},
  setParams: () => {},
  dispatch: () => {},
  canGoBack: () => false,
  isFocused: () => true,
  addListener: () => () => {},
  removeListener: () => {},
});

export const useRoute = () => ({
  key: 'mock-route',
  name: 'Mock',
  params: {},
});

export const useFocusEffect = callback => {
  // Mock implementation
  if (typeof callback === 'function') {
    callback();
  }
};

export const useIsFocused = () => true;

export const createNavigationContainerRef = () => ({
  navigate: () => {},
  goBack: () => {},
  reset: () => {},
  setParams: () => {},
  dispatch: () => {},
  canGoBack: () => false,
  isFocused: () => true,
  addListener: () => () => {},
  removeListener: () => {},
});

export const CommonActions = {
  navigate: (name, params) => ({ type: 'NAVIGATE', payload: { name, params } }),
  goBack: () => ({ type: 'GO_BACK' }),
  reset: state => ({ type: 'RESET', payload: state }),
  setParams: params => ({ type: 'SET_PARAMS', payload: params }),
};

export const StackActions = {
  push: (name, params) => ({ type: 'PUSH', payload: { name, params } }),
  pop: count => ({ type: 'POP', payload: { count } }),
  popToTop: () => ({ type: 'POP_TO_TOP' }),
  replace: (name, params) => ({ type: 'REPLACE', payload: { name, params } }),
};

export const TabActions = {
  jumpTo: (name, params) => ({ type: 'JUMP_TO', payload: { name, params } }),
};

export const DrawerActions = {
  openDrawer: () => ({ type: 'OPEN_DRAWER' }),
  closeDrawer: () => ({ type: 'CLOSE_DRAWER' }),
  toggleDrawer: () => ({ type: 'TOGGLE_DRAWER' }),
};

export default {
  NavigationContainer,
  useNavigation,
  useRoute,
  useFocusEffect,
  useIsFocused,
  createNavigationContainerRef,
  CommonActions,
  StackActions,
  TabActions,
  DrawerActions,
};
