// Mock for @react-navigation/stack to avoid exports issues
import React from 'react';

export const createStackNavigator = () => ({
  Navigator: ({ children }) => children,
  Screen: ({ component: Component, ...props }) => {
    if (Component) {
      return <Component {...props} />;
    }
    return null;
  },
});

export const StackView = ({ children }) => children;
export const StackViewStyleInterpolator = {};
export const StackViewTransitionConfigs = {};

export const TransitionSpecs = {
  FadeInFromBottomAndroid: {},
  FadeOutToBottomAndroid: {},
  RevealFromBottomAndroid: {},
  ScaleFromCenterAndroid: {},
  ScaleFromCenterAndroidSpec: {},
  SlideFromRightIOS: {},
  SlideFromRightIOSSpec: {},
  SlideFromBottomIOS: {},
  SlideFromBottomIOSSpec: {},
  ModalSlideFromBottomIOS: {},
  ModalSlideFromBottomIOSSpec: {},
  ModalPresentationIOS: {},
  ModalPresentationIOSSpec: {},
  FadeFromBottomAndroid: {},
  FadeFromBottomAndroidSpec: {},
  RevealFromBottomAndroidSpec: {},
  ScaleFromCenterAndroidSpec: {},
  SlideFromRightIOSSpec: {},
  SlideFromBottomIOSSpec: {},
  ModalSlideFromBottomIOSSpec: {},
  ModalPresentationIOSSpec: {},
};

export const CardStyleInterpolators = {
  forHorizontalIOS: {},
  forVerticalIOS: {},
  forModalPresentationIOS: {},
  forFadeFromBottomAndroid: {},
  forRevealFromBottomAndroid: {},
  forScaleFromCenterAndroid: {},
  forNoAnimation: {},
};

export const HeaderStyleInterpolators = {
  forUIKit: {},
  forFade: {},
  forStatic: {},
  forSlideLeft: {},
  forSlideRight: {},
  forSlideUp: {},
  forSlideDown: {},
  forNoAnimation: {},
};

export const TransitionPresets = {
  SlideFromRightIOS: {},
  SlideFromBottomIOS: {},
  ModalSlideFromBottomIOS: {},
  ModalPresentationIOS: {},
  FadeFromBottomAndroid: {},
  RevealFromBottomAndroid: {},
  ScaleFromCenterAndroid: {},
  DefaultTransition: {},
  ModalTransition: {},
};

export default {
  createStackNavigator,
  StackView,
  StackViewStyleInterpolator,
  StackViewTransitionConfigs,
  TransitionSpecs,
  CardStyleInterpolators,
  HeaderStyleInterpolators,
  TransitionPresets,
};
