import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { AuthStackScreenProps } from "../../navigation/types";
import { useAppDispatch } from "../../hooks";
import { setActiveSection } from "../../store/slices/navigationSlice";
import { semantic } from "../../utils/colors";
import { typography } from "../../utils/fonts";
import OTPModal from "../../components/shared/OTPModal";

type Props = AuthStackScreenProps<"Login">;

const LoginScreen: React.FC<Props> = ({ navigation: _navigation }) => {
  const dispatch = useAppDispatch();
  const [mobileNumber, setMobileNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);

  const handleSendOTP = async () => {
    console.log("handleSendOTP called, mobileNumber:", mobileNumber);

    if (!mobileNumber.trim()) {
      Alert.alert("Error", "Please enter your mobile number");
      return;
    }

    console.log("Setting loading to true");
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Timeout callback executing");
      setIsLoading(false);
      setShowOtpModal(true);
      setResendTimer(30);
      startResendTimer();
      console.log("Modal should be visible now");
    }, 500);
  };

  const handleVerifyOTP = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowOtpModal(false);
      // Set active section to home so menu highlights Home and content renders
      dispatch(setActiveSection("home"));
    }, 1000);
  };

  const handleResendOTP = () => {
    if (resendTimer > 0) return;

    setResendTimer(30);
    startResendTimer();
    // Simulate resending OTP
  };

  const startResendTimer = () => {
    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Store timer reference for cleanup
    return timer;
  };

  const handleMobileNumberChange = (value: string) => {
    // Remove any non-numeric characters
    const numericValue = value.replace(/[^0-9]/g, "");
    // Limit to 10 digits
    const limitedValue = numericValue.slice(0, 10);
    setMobileNumber(limitedValue);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Main Dashboard Access Section */}
          <View style={styles.dashboardSection}>
            <View style={styles.dashboardContent}>
              <Text style={styles.dashboardTitle}>Access Your Dashboard</Text>

              <View style={styles.loginCard}>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Mobile Number</Text>
                  <View style={styles.phoneInputContainer}>
                    <Text style={styles.countryCode}>+91</Text>
                    <TextInput
                      style={styles.phoneInput}
                      placeholder="Enter your mobile number"
                      placeholderTextColor={semantic.text.placeholder}
                      value={mobileNumber}
                      onChangeText={handleMobileNumberChange}
                      keyboardType="phone-pad"
                      maxLength={10}
                    />
                  </View>
                </View>

                <TouchableOpacity
                  style={styles.otpButton}
                  onPress={() => {
                    console.log("Get OTP button pressed");
                    handleSendOTP();
                  }}
                >
                  <Text style={styles.otpButtonText}>
                    {isLoading ? "Sending..." : "Get OTP"}
                  </Text>
                </TouchableOpacity>

                <Text style={styles.privacyNotice}>
                  Nucleotide does not share any of your personal information
                  with Google or Apple, including your genetic results.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* OTP Verification Modal */}
      <OTPModal
        visible={showOtpModal}
        mobileNumber={mobileNumber}
        isLoading={isLoading}
        resendTimer={resendTimer}
        onClose={() => setShowOtpModal(false)}
        onVerify={handleVerifyOTP}
        onResend={handleResendOTP}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: semantic.background.secondary,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  dashboardSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 60,
  },
  dashboardContent: {
    width: "100%",
    maxWidth: 600,
    alignItems: "center",
  },
  dashboardTitle: {
    ...typography.h2,
    textAlign: "center",
    marginBottom: 40,
    color: semantic.text.primary,
  },
  loginCard: {
    backgroundColor: semantic.background.primary,
    padding: 32,
    borderRadius: 8,
    width: "100%",
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputLabel: {
    ...typography.label,
    color: semantic.text.secondary,
    marginBottom: 8,
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: semantic.border.medium,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: semantic.background.primary,
  },
  countryCode: {
    ...typography.body,
    color: semantic.text.secondary,
    marginRight: 8,
  },
  phoneInput: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    ...typography.body,
    color: semantic.text.primary,
  },
  otpButton: {
    backgroundColor: semantic.interactive.primary,
    paddingVertical: 16,
    borderRadius: 8,
    marginBottom: 30,
    shadowColor: semantic.shadow.colored,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  otpButtonText: {
    ...typography.button,
    color: semantic.text.inverse,
    textAlign: "center",
  },
  privacyNotice: {
    ...typography.small,
    color: semantic.text.tertiary,
    textAlign: "center",
    width: "70%",
    alignSelf: "center",
  },
});

export default LoginScreen;
