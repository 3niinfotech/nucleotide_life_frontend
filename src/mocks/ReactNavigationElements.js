import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Mock React Navigation Elements for web platform
export const HeaderBackButton = ({ onPress, ...props }) => (
  <TouchableOpacity onPress={onPress} {...props}>
    <Text>‹</Text>
  </TouchableOpacity>
);

export const HeaderTitle = ({ children, ...props }) => (
  <Text {...props}>{children}</Text>
);

export const HeaderButton = ({ onPress, children, ...props }) => (
  <TouchableOpacity onPress={onPress} {...props}>
    {children}
  </TouchableOpacity>
);

// Default export for compatibility
export default {
  HeaderBackButton,
  HeaderTitle,
  HeaderButton,
};
