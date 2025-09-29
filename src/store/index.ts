import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import { storage } from '../storage';

import appReducer from './slices/appSlice';
import navigationReducer from './slices/navigationSlice';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['app'],
};

const rootReducer = combineReducers({
  app: appReducer,
  navigation: navigationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
