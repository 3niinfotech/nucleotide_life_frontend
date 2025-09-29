import React from 'react';
import { View } from 'react-native';

// Mock MaskedView for web platform
const MaskedView = ({ children, ...props }) => {
  return <View {...props}>{children}</View>;
};

export default MaskedView;
