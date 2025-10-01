import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Modal } from "react-native";
import { semantic, neutral } from "../../utils/colors";
import { poppinsWeights } from "../../utils/fonts";
import { IcPhone } from "../../utils/iconUtil";
import PrimaryButton from "./PrimaryButton";

interface RequestOTPModalProps {
  visible: boolean;
  mobileNumber: string;
  onClose: () => void;
  onRequestOTP: () => void;
  onMobileNumberChange: (value: string) => void;
  onReset?: () => void;
}

const RequestOTPModal: React.FC<RequestOTPModalProps> = ({
  visible,
  mobileNumber,
  onClose,
  onRequestOTP,
  onMobileNumberChange,
  onReset,
}) => {
  // Reset mobile number when modal is closed
  //   useEffect(() => {
  //     if (!visible) {
  //       onMobileNumberChange("");
  //       if (onReset) {
  //         onReset();
  //       }
  //     }
  //   }, [visible, onReset, onMobileNumberChange]);

  const handleMobileNumberChange = (value: string) => {
    // Remove any non-numeric characters
    const numericValue = value.replace(/[^0-9]/g, "");
    // Limit to 10 digits
    const limitedValue = numericValue.slice(0, 10);
    onMobileNumberChange(limitedValue);
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

          <View style={styles.requestOTPDescriptionContainer}>
            <Text style={styles.requestOTPDescriptionText}>
              Use the same mobile number to log in on both the App and Web
              Reports.
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton
              label="Cancel"
              style={styles.addToCartButton}
              labelTextColor={semantic.text.primary}
              onPress={onClose}
            />
            <PrimaryButton
              label="Request OTP"
              style={styles.buyNowButton}
              onPress={onRequestOTP}
            />
          </View>
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
    fontSize: 24,
    fontFamily: poppinsWeights.semiBold,
    color: semantic.text.primary,
    marginBottom: 16,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 10,
    width: "100%",
  },
  inputLabel: {
    fontSize: 16,
    fontFamily: poppinsWeights.regular,
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
    fontSize: 16,
    fontFamily: poppinsWeights.regular,
    color: semantic.text.secondary,
    marginRight: 8,
  },
  phoneInput: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    fontSize: 16,
    fontFamily: poppinsWeights.regular,
    color: semantic.text.primary,
  },
  requestOTPDescriptionContainer: {
    marginBottom: 20,
    width: "100%",
    alignItems: "flex-start",
  },
  requestOTPDescriptionText: {
    fontSize: 12,
    fontFamily: poppinsWeights.regular,
    color: semantic.text.secondary,
    textAlign: "left",
  },
  buttonContainer: {
    gap: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  addToCartButton: {
    backgroundColor: neutral.gray200,
    color: semantic.text.inverse,
    alignSelf: "flex-start",
    width: "40%",
  },
  buyNowButton: {
    backgroundColor: semantic.interactive.primary,
    color: semantic.text.inverse,
    alignSelf: "flex-start",
    width: "40%",
  },
});

export default RequestOTPModal;
