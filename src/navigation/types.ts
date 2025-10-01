import { NavigatorScreenParams } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

// Root Stack Navigator Types
export type RootStackParamList = {
  Main: NavigatorScreenParams<MainTabParamList>;
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Modal: {
    screen: string;
    params?: any;
  };
};

// Main Tab Navigator Types
export type MainTabParamList = {
  Home: undefined;
  Products: undefined;
  ProductDetails: { productId?: string };
  Checkout: undefined;
  CheckoutDetails: undefined;
  Upload: undefined;
  Track: undefined;
  Profile: undefined;
};

// Auth Stack Navigator Types
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  VerifyOTP: {
    mobileNumber: string;
  };
};

// Screen Props Types
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type MainTabScreenProps<T extends keyof MainTabParamList> =
  StackScreenProps<MainTabParamList, T>;

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  StackScreenProps<AuthStackParamList, T>;

// Navigation State Types
export interface NavigationState {
  activeSection: string;
  isMenuOpen: boolean;
  currentRoute: string;
  previousRoute?: string;
}

// Route Names Constants
export const ROUTES = {
  // Root Routes
  MAIN: "Main",
  AUTH: "Auth",
  MODAL: "Modal",

  // Main Tab Routes
  HOME: "Home",
  PRODUCTS: "Products",
  PRODUCT_DETAILS: "ProductDetails",
  CHECKOUT: "Checkout",
  CHECKOUT_DETAILS: "CheckoutDetails",
  UPLOAD: "Upload",
  TRACK: "Track",
  PROFILE: "Profile",

  // Auth Routes
  LOGIN: "Login",
  REGISTER: "Register",
  FORGOT_PASSWORD: "ForgotPassword",
  VERIFY_OTP: "VerifyOTP",
} as const;

// Navigation Actions
export interface NavigationActions {
  navigate: (routeName: string, params?: any) => void;
  goBack: () => void;
  reset: (state: any) => void;
  setParams: (params: any) => void;
}

// Menu Items Type
export interface MenuItem {
  id: string;
  label: string;
  route: keyof MainTabParamList | keyof AuthStackParamList;
  icon?: string;
  requiresAuth?: boolean;
}

// Navigation Configuration
export interface NavigationConfig {
  initialRouteName: keyof RootStackParamList;
  screenOptions: {
    headerShown: boolean;
    gestureEnabled: boolean;
    animationEnabled: boolean;
  };
}
