import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavigationState {
  activeSection: string;
  isMenuOpen: boolean;
  currentScreen: string;
  productId?: string;
}

const initialState: NavigationState = {
  activeSection: '/',
  isMenuOpen: false,
  currentScreen: 'Login',
  productId: undefined,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
      // Map section to screen name
      const sectionToScreenMap: { [key: string]: string } = {
        '/': 'Login',
        home: 'Home',
        products: 'Products',
        'product-details': 'ProductDetails',
        upload: 'Upload',
        track: 'Track',
        profile: 'Profile',
      };
      state.currentScreen = sectionToScreenMap[action.payload] || 'Login';
    },
    setCurrentScreen: (state, action: PayloadAction<string>) => {
      state.currentScreen = action.payload;
    },
    toggleMenu: state => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: state => {
      state.isMenuOpen = false;
    },
    navigateToProductDetails: (state, action: PayloadAction<string>) => {
      state.activeSection = 'product-details';
      state.currentScreen = 'ProductDetails';
      state.productId = action.payload;
    },
  },
});

export const {
  setActiveSection,
  setCurrentScreen,
  toggleMenu,
  closeMenu,
  navigateToProductDetails,
} = navigationSlice.actions;

export default navigationSlice.reducer;
