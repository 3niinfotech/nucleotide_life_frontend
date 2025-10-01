import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import { semantic } from "../../utils/colors";
import { typography } from "../../utils/fonts";
import { IcPhone } from "../../utils/iconUtil";

interface OTPModalProps {
  visible: boolean;
  mobileNumber: string;
  isLoading: boolean;
  resendTimer: number;
  onClose: () => void;
  onVerify: () => void;
  onResend: () => void;
  onReset?: () => void;
}

const OTPModal: React.FC<OTPModalProps> = ({
  visible,
  mobileNumber,
  isLoading,
  resendTimer,
  onClose,
  onVerify,
  onResend,
  onReset,
}) => {
  const [otpDigits, setOtpDigits] = useState(["", "", "", ""]);
  const [focusedOtpIndex, setFocusedOtpIndex] = useState<number | null>(null);
  const otpRefs = useRef<(TextInput | null)[]>([null, null, null, null]);

  // Reset OTP digits when modal is closed
  useEffect(() => {
    if (!visible) {
      setOtpDigits(["", "", "", ""]);
      setFocusedOtpIndex(null);
      if (onReset) {
        onReset();
      }
    }
  }, [visible, onReset]);

  // Debug mobile number
  useEffect(() => {
    if (visible) {
      console.log("OTPModal opened with mobile number:", mobileNumber);
    }
  }, [visible, mobileNumber]);

  const handleOtpDigitChange = (index: number, value: string) => {
    // Only allow single digit
    if (value.length > 1) return;

    // Remove non-numeric characters
    const numericValue = value.replace(/[^0-9]/g, "");

    const newOtpDigits = [...otpDigits];
    newOtpDigits[index] = numericValue;
    setOtpDigits(newOtpDigits);

    // Auto-focus next input if value is entered and not the last input
    if (numericValue && index < 3) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyPress = (index: number, key: string) => {
    // Handle backspace - focus previous input if current is empty
    if (key === "Backspace" && !otpDigits[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const otpCode = otpDigits.join("");
    if (otpCode.length !== 4) {
      return;
    }
    onVerify();
  };

  const handleResend = () => {
    if (resendTimer > 0) return;
    setOtpDigits(["", "", "", ""]);
    onResend();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.otpModal}>
          {/* Phone Icon */}
          <View style={styles.phoneIcon}>
            <IcPhone />
          </View>

          {/* Modal Title */}
          <Text style={styles.modalTitle}>Mobile Verification</Text>

          {/* Instructions */}
          <Text style={styles.modalInstructions}>
            Please enter the 4 digit code sent to
          </Text>
          <Text style={styles.phoneNumber}>+91 {mobileNumber}</Text>

          {/* OTP Input Fields */}
          <View style={styles.otpContainer}>
            {otpDigits.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => {
                  otpRefs.current[index] = ref;
                }}
                style={[
                  styles.otpInput,
                  digit ? styles.otpInputFilled : null,
                  focusedOtpIndex === index ? styles.otpInputFocused : null,
                ]}
                value={digit}
                onChangeText={(value) => handleOtpDigitChange(index, value)}
                onKeyPress={({ nativeEvent }) =>
                  handleOtpKeyPress(index, nativeEvent.key)
                }
                onFocus={() => setFocusedOtpIndex(index)}
                onBlur={() => setFocusedOtpIndex(null)}
                keyboardType="numeric"
                maxLength={1}
                textAlign="center"
              />
            ))}
          </View>

          {/* Resend Section */}
          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Didn't get the code?</Text>
            <TouchableOpacity onPress={handleResend} disabled={resendTimer > 0}>
              <Text
                style={[
                  styles.resendButton,
                  resendTimer > 0 ? styles.resendButtonDisabled : null,
                ]}
              >
                {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Verify Button */}
          <TouchableOpacity
            style={styles.verifyButton}
            onPress={handleVerify}
            disabled={isLoading}
          >
            <Text style={styles.verifyButtonText}>
              {isLoading ? "Verifying..." : "Verify"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  otpModal: {
    backgroundColor: semantic.background.primary,
    borderRadius: 16,
    padding: 32,
    width: "100%",
    maxWidth: "30%",
    alignItems: "center",
    shadowColor: semantic.shadow.light,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 8,
  },
  phoneIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: semantic.background.tertiary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  modalTitle: {
    ...typography.h3,
    color: semantic.text.primary,
    marginBottom: 16,
    textAlign: "center",
  },
  modalInstructions: {
    ...typography.body,
    color: semantic.text.secondary,
    textAlign: "center",
    marginBottom: 8,
  },
  phoneNumber: {
    ...typography.body,
    color: semantic.interactive.primary,
    fontWeight: "600",
    marginBottom: 32,
    textAlign: "center",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
    width: "100%",
    maxWidth: 280,
  },
  otpInput: {
    width: 60,
    height: 60,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#F9FAFB",
    ...typography.h4,
    color: semantic.text.primary,
    textAlign: "center",
  },
  otpInputFilled: {
    borderColor: semantic.interactive.primary,
    backgroundColor: "rgba(135, 106, 249, 0.1)", // Purple with 10% opacity
    color: semantic.interactive.primary, // Purple text
  },
  otpInputFocused: {
    borderColor: semantic.interactive.primary,
    borderWidth: 2,
  },
  resendContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  resendText: {
    ...typography.caption,
    color: semantic.text.secondary,
    marginRight: 8,
  },
  resendButton: {
    ...typography.caption,
    color: semantic.interactive.primary,
    fontWeight: "600",
  },
  resendButtonDisabled: {
    color: semantic.text.tertiary,
  },
  verifyButton: {
    backgroundColor: semantic.interactive.primary,
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  verifyButtonText: {
    ...typography.button,
    color: semantic.text.inverse,
    fontWeight: "600",
  },
});

export default OTPModal;
