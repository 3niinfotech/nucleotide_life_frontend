import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { semantic, primary } from "../../utils/colors";
import { poppinsWeights } from "../../utils/fonts";
import { IcLocation, IcCalling } from "../../utils/iconUtil";

interface Address {
  id: string;
  name: string;
  label: string;
  address: string;
  phone: string;
}

interface DeliveryAddressSectionProps {
  onAddNewAddress: () => void;
}

const DeliveryAddressSection: React.FC<DeliveryAddressSectionProps> = ({
  onAddNewAddress,
}) => {
  const [selectedAddressId, setSelectedAddressId] = useState("1");

  // Mock address data
  const addresses: Address[] = [
    {
      id: "1",
      name: "Nirav Gabani",
      label: "Home",
      address:
        "201, Shreeji Heights, Near Ghod Dod Road, Athwa, Surat, Gujarat 395007, India",
      phone: "+91 98765 43210",
    },
    {
      id: "2",
      name: "Nirav Gabani",
      label: "Work",
      address:
        "45, Laxmi Residency, Opp. VR Mall, Dumas Road, Surat, Gujarat 395009, India",
      phone: "+91 98765 43210",
    },
    {
      id: "3",
      name: "Nirav Gabani",
      label: "Other",
      address:
        "B/12, Green Park Society, Near SMC Garden, Adajan, Surat, Gujarat 395004, India",
      phone: "+91 98765 43210",
    },
  ];

  const renderAddressCard = (address: Address) => {
    const isSelected = selectedAddressId === address.id;

    return (
      <TouchableOpacity
        key={address.id}
        style={[styles.addressCard, isSelected && styles.selectedAddressCard]}
        onPress={() => setSelectedAddressId(address.id)}
      >
        <View style={styles.addressHeader}>
          <View style={styles.radioContainer}>
            <View
              style={[
                styles.radioButton,
                isSelected && styles.selectedRadioButton,
              ]}
            >
              {isSelected && <View style={styles.radioInner} />}
            </View>
          </View>
          <View style={styles.addressInfo}>
            <View style={styles.nameRow}>
              <Text style={styles.addressName}>{address.name}</Text>
              <View
                style={[
                  styles.labelTag,
                  isSelected
                    ? styles.selectedLabelTag
                    : styles.unselectedLabelTag,
                ]}
              >
                <Text
                  style={[
                    styles.labelText,
                    isSelected
                      ? styles.selectedLabelText
                      : styles.unselectedLabelText,
                  ]}
                >
                  {address.label}
                </Text>
              </View>
            </View>
            <View style={styles.addressRow}>
              <IcLocation style={styles.locationIcon} />
              <Text style={styles.addressText}>{address.address}</Text>
            </View>
            <View style={styles.phoneRow}>
              <IcCalling style={styles.phoneIcon} />
              <Text style={styles.phoneText}>{address.phone}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Select Delivery Address</Text>
        <TouchableOpacity style={styles.addButton} onPress={onAddNewAddress}>
          <Text style={styles.addButtonIcon}>+</Text>
          <Text style={styles.addButtonText}>Add a New Address</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />

      <ScrollView
        style={styles.addressesContainer}
        showsVerticalScrollIndicator={false}
      >
        {addresses.map(renderAddressCard)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: poppinsWeights.semiBold,
    color: semantic.text.primary,
  },
  divider: {
    height: 1,
    backgroundColor: semantic.border.light,
    marginVertical: 24,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: primary.purple,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addButtonIcon: {
    fontSize: 16,
    fontFamily: poppinsWeights.semiBold,
    color: semantic.text.inverse,
    marginRight: 6,
  },
  addButtonText: {
    fontSize: 14,
    fontFamily: poppinsWeights.semiBold,
    color: semantic.text.inverse,
  },
  addressesContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  addressCard: {
    borderWidth: 1,
    borderColor: semantic.border.light,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    backgroundColor: semantic.background.primary,
  },
  selectedAddressCard: {
    borderColor: primary.purple,
    borderWidth: 2,
  },
  addressHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  radioContainer: {
    marginRight: 12,
    marginTop: 2,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: semantic.border.medium,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRadioButton: {
    borderColor: primary.purple,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: primary.purple,
  },
  addressInfo: {
    flex: 1,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  addressName: {
    fontSize: 16,
    fontFamily: poppinsWeights.semiBold,
    color: semantic.text.primary,
    marginRight: 12,
  },
  labelTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  selectedLabelTag: {
    backgroundColor: primary.purple,
  },
  unselectedLabelTag: {
    backgroundColor: semantic.border.light,
  },
  labelText: {
    fontSize: 12,
    fontFamily: poppinsWeights.medium,
  },
  selectedLabelText: {
    color: semantic.text.inverse,
  },
  unselectedLabelText: {
    color: semantic.text.secondary,
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 6,
  },
  locationIcon: {
    marginRight: 8,
    marginTop: 2,
  },
  addressText: {
    flex: 1,
    fontSize: 14,
    fontFamily: poppinsWeights.regular,
    color: semantic.text.secondary,
    lineHeight: 20,
  },
  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  phoneIcon: {
    marginRight: 8,
  },
  phoneText: {
    fontSize: 14,
    fontFamily: poppinsWeights.regular,
    color: semantic.text.secondary,
  },
});

export default DeliveryAddressSection;
