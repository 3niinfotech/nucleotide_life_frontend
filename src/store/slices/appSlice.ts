import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  isLoading: boolean;
  isLoggedIn: boolean;
  user: {
    name: string;
    email: string;
    avatar?: string;
  } | null;
  theme: 'light' | 'dark';
  currentPage: string;
}

const initialState: AppState = {
  isLoading: false,
  isLoggedIn: false,
  user: null,
  theme: 'light',
  currentPage: '/',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setUser: (state, action: PayloadAction<AppState['user']>) => {
      state.user = action.payload;
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload;
    },
    logout: state => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const {
  setLoading,
  setLoggedIn,
  setUser,
  setTheme,
  setCurrentPage,
  logout,
} = appSlice.actions;

export default appSlice.reducer;
