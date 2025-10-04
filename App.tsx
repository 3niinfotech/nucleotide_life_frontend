import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store";
import RootNavigator from "./src/navigation/RootNavigator";
import { useFonts } from "./src/hooks";
import { View, Text, ActivityIndicator } from "react-native";
import { NavigationMenu } from "./src/components";
import { ResponsiveProvider } from "./src/contexts/ResponsiveContext";

const App = () => {
  const { fontsLoaded, fontsError } = useFonts();

  if (fontsError) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Error loading fonts: {fontsError}</Text>
      </View>
    );
  }

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 10 }}>Loading fonts...</Text>
      </View>
    );
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ResponsiveProvider>
          <View style={{ flex: 1, position: "relative" }}>
            {/* Navigation Menu - Completely fixed, no scrolling possible */}
            <NavigationMenu />
            {/* Content area with proper spacing */}
            <View style={{ flex: 1, paddingTop: 80 }}>
              <RootNavigator />
            </View>
          </View>
        </ResponsiveProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
