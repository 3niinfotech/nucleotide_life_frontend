import { Platform } from 'react-native';
import localStorage from 'redux-persist/es/storage';

// Create a storage adapter that works for both web and mobile
const createStorage = () => {
  if (Platform.OS === 'web') {
    // Use localStorage for web
    return {
      getItem: (key: string): Promise<string | null> => {
        try {
          return Promise.resolve(localStorage.getItem(key));
        } catch (error) {
          console.warn('localStorage not available:', error);
          return Promise.resolve(null);
        }
      },
      setItem: (key: string, value: string): Promise<void> => {
        try {
          localStorage.setItem(key, value);
          return Promise.resolve();
        } catch (error) {
          console.warn('localStorage not available:', error);
          return Promise.resolve();
        }
      },
      removeItem: (key: string): Promise<void> => {
        try {
          localStorage.removeItem(key);
          return Promise.resolve();
        } catch (error) {
          console.warn('localStorage not available:', error);
          return Promise.resolve();
        }
      },
    };
  } else {
    // For mobile, we'll use a simple in-memory storage to avoid AsyncStorage issues
    // In a real app, you'd want to properly configure AsyncStorage
    const memoryStorage: { [key: string]: string } = {};
    return {
      getItem: (key: string): Promise<string | null> => {
        return Promise.resolve(memoryStorage[key] || null);
      },
      setItem: (key: string, value: string): Promise<void> => {
        memoryStorage[key] = value;
        return Promise.resolve();
      },
      removeItem: (key: string): Promise<void> => {
        delete memoryStorage[key];
        return Promise.resolve();
      },
    };
  }
};

export const storage = createStorage();
