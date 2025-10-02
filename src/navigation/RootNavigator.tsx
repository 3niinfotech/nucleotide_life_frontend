import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { semantic } from "../utils/colors";
import { useAppSelector, useAppDispatch } from "../hooks";
import {
  closeRequestOTPModal,
  setMobileNumber,
  openOTPModal,
  closeOTPModal,
} from "../store/slices/navigationSlice";

// Import navigators
import AuthStackNavigator from "./AuthStackNavigator";
import { NavigationMenu, Footer } from "../components";
import ContentRenderer from "../components/ContentRenderer";
import RequestOTPModal from "../components/shared/RequestOTPModal";
import OTPModal from "../components/shared/OTPModal";

const RootNavigator: React.FC = () => {
  // In a real app, you would check authentication state here
  const isAuthenticated = true; // This should come from your auth state

  const dispatch = useAppDispatch();
  const { isRequestOTPModalOpen, isOTPModalOpen, mobileNumber } =
    useAppSelector((state: any) => state.navigation);

  const handleCloseModal = () => {
    dispatch(closeRequestOTPModal());
  };

  const handleMobileNumberChange = (value: string) => {
    dispatch(setMobileNumber(value));
  };

  const handleRequestOTP = () => {
    // Here you would typically make an API call to request OTP
    console.log("Requesting OTP for:", mobileNumber);
    // Open OTP modal and close RequestOTP modal
    dispatch(openOTPModal());
  };

  const handleCloseOTPModal = () => {
    dispatch(closeOTPModal());
  };

  const handleVerifyOTP = () => {
    // Here you would typically verify the OTP
    console.log("Verifying OTP for:", mobileNumber);
    dispatch(closeOTPModal());
  };

  const handleResendOTP = () => {
    // Here you would typically resend the OTP
    console.log("Resending OTP for:", mobileNumber);
  };

  return (
    <View style={styles.container}>
      <NavigationContainer
        theme={{
          dark: false,
          colors: {
            primary: semantic.interactive.primary,
            background: semantic.background.primary,
            card: semantic.background.primary,
            text: semantic.text.primary,
            border: semantic.border.light,
            notification: semantic.interactive.primary,
          },
          fonts: {
            regular: {
              fontFamily: "System",
              fontWeight: "400",
            },
            medium: {
              fontFamily: "System",
              fontWeight: "500",
            },
            bold: {
              fontFamily: "System",
              fontWeight: "700",
            },
            heavy: {
              fontFamily: "System",
              fontWeight: "900",
            },
          },
        }}
      >
        {isAuthenticated ? (
          <View style={styles.mainContainer}>
            <NavigationMenu />
            <View style={styles.contentContainer}>
              <ContentRenderer />
            </View>
            <Footer />
          </View>
        ) : (
          <AuthStackNavigator />
        )}
      </NavigationContainer>

      {/* Global RequestOTP Modal */}
      <RequestOTPModal
        visible={isRequestOTPModalOpen}
        mobileNumber={mobileNumber}
        onClose={handleCloseModal}
        onRequestOTP={handleRequestOTP}
        onMobileNumberChange={handleMobileNumberChange}
      />

      {/* Global OTP Modal */}
      <OTPModal
        visible={isOTPModalOpen}
        mobileNumber={mobileNumber}
        isLoading={false}
        resendTimer={30}
        onClose={handleCloseOTPModal}
        onVerify={handleVerifyOTP}
        onResend={handleResendOTP}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: semantic.background.primary,
  },
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});

export default RootNavigator;
