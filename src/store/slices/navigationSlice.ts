import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavigationState {
  activeSection: string;
  isMenuOpen: boolean;
  currentScreen: string;
  productId?: string;
  isRequestOTPModalOpen: boolean;
  isOTPModalOpen: boolean;
  mobileNumber: string;
}

const initialState: NavigationState = {
  activeSection: "/",
  isMenuOpen: false,
  currentScreen: "Login",
  productId: undefined,
  isRequestOTPModalOpen: false,
  isOTPModalOpen: false,
  mobileNumber: "",
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
      // Map section to screen name
      const sectionToScreenMap: { [key: string]: string } = {
        "/": "Login",
        home: "Home",
        products: "Products",
        "product-details": "ProductDetails",
        checkout: "Checkout",
        "checkout-details": "CheckoutDetails",
        upload: "Upload",
        track: "Track",
        profile: "Profile",
      };
      state.currentScreen = sectionToScreenMap[action.payload] || "Login";
    },
    setCurrentScreen: (state, action: PayloadAction<string>) => {
      state.currentScreen = action.payload;
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    navigateToProductDetails: (state, action: PayloadAction<string>) => {
      state.activeSection = "product-details";
      state.currentScreen = "ProductDetails";
      state.productId = action.payload;
    },
    navigateToCheckout: (state) => {
      state.activeSection = "checkout";
      state.currentScreen = "Checkout";
    },
    openRequestOTPModal: (state) => {
      state.isRequestOTPModalOpen = true;
    },
    closeRequestOTPModal: (state) => {
      state.isRequestOTPModalOpen = false;
      state.mobileNumber = "";
    },
    setMobileNumber: (state, action: PayloadAction<string>) => {
      state.mobileNumber = action.payload;
    },
    openOTPModal: (state) => {
      state.isOTPModalOpen = true;
      state.isRequestOTPModalOpen = false;
    },
    closeOTPModal: (state) => {
      state.isOTPModalOpen = false;
    },
  },
});

export const {
  setActiveSection,
  setCurrentScreen,
  toggleMenu,
  closeMenu,
  navigateToProductDetails,
  navigateToCheckout,
  openRequestOTPModal,
  closeRequestOTPModal,
  setMobileNumber,
  openOTPModal,
  closeOTPModal,
} = navigationSlice.actions;

export default navigationSlice.reducer;
