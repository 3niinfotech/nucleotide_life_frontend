import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { semantic, primary } from "../../utils/colors";
import { useResponsiveFontUtils } from "../../hooks";
import { IcAddAddress } from "../../utils/iconUtil";

interface NewAddressModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (addressData: AddressData) => void;
}

interface AddressData {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  addressType: "Work" | "Home" | "Other";
  streetAddress: string;
  landmark: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  saveForFuture: boolean;
}

const NewAddressModal: React.FC<NewAddressModalProps> = ({
  visible,
  onClose,
  onSave,
}) => {
  const { getResponsiveStyle } = useResponsiveFontUtils();
  const [formData, setFormData] = useState<AddressData>({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    addressType: "Work",
    streetAddress: "",
    landmark: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    saveForFuture: false,
  });

  const handleInputChange = (
    field: keyof AddressData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.mobileNumber ||
      !formData.streetAddress ||
      !formData.city ||
      !formData.state ||
      !formData.postalCode ||
      !formData.country
    ) {
      return; // Add proper validation feedback
    }

    onSave(formData);
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      addressType: "Work",
      streetAddress: "",
      landmark: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      saveForFuture: false,
    });
  };

  const handleCancel = () => {
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      addressType: "Work",
      streetAddress: "",
      landmark: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      saveForFuture: false,
    });
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <ScrollView
            style={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {/* Header Icon */}
            <View style={styles.headerIcon}>
              <IcAddAddress />
            </View>

            {/* Title */}
            <Text
              style={[styles.modalTitle, getResponsiveStyle("semiBold", 24)]}
            >
              New Address Details
            </Text>

            {/* Form Fields */}
            <View style={styles.formContainer}>
              {/* Personal Information - Two Columns */}
              <View style={styles.rowContainer}>
                <View style={styles.halfWidth}>
                  <Text
                    style={[styles.label, getResponsiveStyle("regular", 12)]}
                  >
                    First Name
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your first name"
                    placeholderTextColor={semantic.text.placeholder}
                    value={formData.firstName}
                    onChangeText={(value) =>
                      handleInputChange("firstName", value)
                    }
                  />
                </View>
                <View style={styles.halfWidth}>
                  <Text
                    style={[styles.label, getResponsiveStyle("regular", 12)]}
                  >
                    Last Name
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your last name"
                    placeholderTextColor={semantic.text.placeholder}
                    value={formData.lastName}
                    onChangeText={(value) =>
                      handleInputChange("lastName", value)
                    }
                  />
                </View>
              </View>

              {/* Contact Information - Two Columns */}
              <View style={styles.rowContainer}>
                <View style={styles.halfWidth}>
                  <Text
                    style={[styles.label, getResponsiveStyle("regular", 12)]}
                  >
                    Email Address
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your email address"
                    placeholderTextColor={semantic.text.placeholder}
                    value={formData.email}
                    onChangeText={(value) => handleInputChange("email", value)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>
                <View style={styles.halfWidth}>
                  <Text
                    style={[styles.label, getResponsiveStyle("regular", 12)]}
                  >
                    Mobile Number
                  </Text>
                  <View style={styles.mobileInputContainer}>
                    <View style={styles.countryCodeContainer}>
                      <Text style={styles.countryCode}>+91</Text>
                    </View>
                    <TextInput
                      style={styles.mobileInput}
                      placeholder="Enter your mobile number"
                      placeholderTextColor={semantic.text.placeholder}
                      value={formData.mobileNumber}
                      onChangeText={(value) =>
                        handleInputChange("mobileNumber", value)
                      }
                      keyboardType="numeric"
                    />
                  </View>
                </View>
              </View>

              {/* Save Address As - Radio Buttons */}
              <View style={styles.radioSection}>
                <Text style={[styles.label, getResponsiveStyle("regular", 12)]}>
                  Save Address As
                </Text>
                <View style={styles.radioContainer}>
                  {["Work", "Home", "Other"].map((type) => (
                    <TouchableOpacity
                      key={type}
                      style={[
                        styles.radioOption,
                        formData.addressType === type &&
                          styles.selectedRadioOption,
                      ]}
                      onPress={() =>
                        handleInputChange(
                          "addressType",
                          type as "Work" | "Home" | "Other"
                        )
                      }
                    >
                      <View style={styles.radioButton}>
                        {formData.addressType === type && (
                          <View style={styles.radioInner} />
                        )}
                      </View>
                      <Text
                        style={[
                          styles.radioLabel,
                          formData.addressType === type &&
                            styles.selectedRadioLabel,
                        ]}
                      >
                        {type}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Street Address - Single Column */}
              <View style={styles.fullWidth}>
                <Text style={[styles.label, getResponsiveStyle("regular", 12)]}>
                  Street Address / House No. / Apartment
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter street address, house no., apartment"
                  placeholderTextColor={semantic.text.placeholder}
                  value={formData.streetAddress}
                  onChangeText={(value) =>
                    handleInputChange("streetAddress", value)
                  }
                  multiline
                  numberOfLines={2}
                />
              </View>

              {/* Landmark - Single Column */}
              <View style={styles.fullWidth}>
                <Text style={[styles.label, getResponsiveStyle("regular", 12)]}>
                  Landmark (Optional)
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="E.g., near hospital, mall, park"
                  placeholderTextColor={semantic.text.placeholder}
                  value={formData.landmark}
                  onChangeText={(value) => handleInputChange("landmark", value)}
                />
              </View>

              {/* Location Details - Two Columns */}
              <View style={styles.rowContainer}>
                <View style={styles.halfWidth}>
                  <Text
                    style={[styles.label, getResponsiveStyle("regular", 12)]}
                  >
                    City / Town
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your city / town"
                    placeholderTextColor={semantic.text.placeholder}
                    value={formData.city}
                    onChangeText={(value) => handleInputChange("city", value)}
                  />
                </View>
                <View style={styles.halfWidth}>
                  <Text
                    style={[styles.label, getResponsiveStyle("regular", 12)]}
                  >
                    State / Province
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your state / province"
                    placeholderTextColor={semantic.text.placeholder}
                    value={formData.state}
                    onChangeText={(value) => handleInputChange("state", value)}
                  />
                </View>
              </View>

              <View style={styles.rowContainer}>
                <View style={styles.halfWidth}>
                  <Text
                    style={[styles.label, getResponsiveStyle("regular", 12)]}
                  >
                    Postal / Zip Code
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter postal / zip code"
                    placeholderTextColor={semantic.text.placeholder}
                    value={formData.postalCode}
                    onChangeText={(value) =>
                      handleInputChange("postalCode", value)
                    }
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.halfWidth}>
                  <Text
                    style={[styles.label, getResponsiveStyle("regular", 12)]}
                  >
                    Country
                  </Text>
                  <View style={styles.selectContainer}>
                    <TextInput
                      style={styles.selectInput}
                      placeholder="Select your country"
                      placeholderTextColor={semantic.text.placeholder}
                      value={formData.country}
                      onChangeText={(value) =>
                        handleInputChange("country", value)
                      }
                    />
                    <Text style={styles.selectArrow}>▼</Text>
                  </View>
                </View>
              </View>

              {/* Checkbox */}
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() =>
                  handleInputChange("saveForFuture", !formData.saveForFuture)
                }
              >
                <View style={styles.checkbox}>
                  {formData.saveForFuture && (
                    <Text style={styles.checkmark}>✓</Text>
                  )}
                </View>
                <Text
                  style={[
                    styles.checkboxLabel,
                    getResponsiveStyle("regular", 12),
                  ]}
                >
                  Save this address for future orders
                </Text>
              </TouchableOpacity>
            </View>

            {/* Action Buttons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={handleCancel}
              >
                <Text
                  style={[
                    styles.cancelButtonText,
                    getResponsiveStyle("regular", 16),
                  ]}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text
                  style={[
                    styles.saveButtonText,
                    getResponsiveStyle("regular", 16),
                  ]}
                >
                  Save Address
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
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
  modalContainer: {
    backgroundColor: semantic.background.primary,
    borderRadius: 16,
    width: "100%",
    maxWidth: "40%",
    maxHeight: "90%",
    shadowColor: semantic.shadow.light,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 8,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    padding: 32,
  },
  headerIcon: {
    alignItems: "center",
    marginBottom: 24,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: primary.purple,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  modalTitle: {
    color: semantic.text.primary,
    textAlign: "center",
    marginBottom: 32,
  },
  formContainer: {
    marginBottom: 32,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    gap: 16,
  },
  halfWidth: {
    flex: 1,
  },
  fullWidth: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    color: semantic.text.primary,
    marginBottom: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: semantic.border.light,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    color: semantic.text.primary,
    backgroundColor: semantic.background.primary,
  },
  mobileInputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: semantic.border.light,
    borderRadius: 8,
    backgroundColor: semantic.background.primary,
  },
  countryCodeContainer: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRightWidth: 1,
    borderRightColor: semantic.border.light,
    justifyContent: "center",
  },
  countryCode: {
    color: semantic.text.primary,
  },
  mobileInput: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    color: semantic.text.primary,
  },
  radioSection: {
    marginBottom: 20,
  },
  radioContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 24,
  },
  selectedRadioOption: {
    backgroundColor: semantic.background.lightPurple,
    borderColor: primary.purple,
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: semantic.border.medium,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: primary.purple,
  },
  radioLabel: {
    color: semantic.text.primary,
  },
  selectedRadioLabel: {
    color: primary.purple,
  },
  selectContainer: {
    position: "relative",
  },
  selectInput: {
    borderWidth: 1,
    borderColor: semantic.border.light,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    paddingRight: 40,
    color: semantic.text.primary,
    backgroundColor: semantic.background.primary,
  },
  selectArrow: {
    position: "absolute",
    right: 12,
    top: "50%",
    transform: [{ translateY: -8 }],
    color: semantic.text.tertiary,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: semantic.border.medium,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  checkmark: {
    fontSize: 12,
    color: primary.purple,
  },
  checkboxLabel: {
    fontSize: 14,
    color: semantic.text.primary,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: semantic.interactive.secondary,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  cancelButtonText: {
    color: semantic.text.secondary,
  },
  saveButton: {
    flex: 1,
    backgroundColor: primary.purple,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButtonText: {
    color: semantic.text.inverse,
  },
});

export default NewAddressModal;
