import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useAppDispatch } from "../hooks";
import { semantic, neutral } from "../utils/colors";
import { poppinsWeights } from "../utils/fonts";
import { NavigationHeader, NewAddressModal } from "../components";
import DeliveryAddressSection from "../components/shared/DeliveryAddressSection";
import OrderMemberSection from "../components/shared/OrderMemberSection";
import TotalContainer from "../components/shared/TotalContainer";

// Mock data for cart items (same as CheckoutScreen)
const cartItems = [
  {
    id: 1,
    name: "1 Genetic One - Personal Plan, 1 Genetic One - Personal Plan 1 Genetic One - Personal Plan",
    quantity: 1,
    currentPrice: "₹22,000",
    originalPrice: "₹32,000",
  },
  {
    id: 2,
    name: "2 Genetic One - Couple Pack",
    quantity: 2,
    currentPrice: "₹83,200",
    originalPrice: "₹1,28,000",
  },
  {
    id: 3,
    name: "3 Genetic One - Family Pack",
    quantity: 1,
    currentPrice: "₹41,600",
    originalPrice: "₹64,000",
  },
];

const CheckoutDetailsScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const [couponCode, setCouponCode] = useState("");
  const [isNewAddressModalVisible, setIsNewAddressModalVisible] =
    useState(false);

  // Calculate totals (same logic as CheckoutScreen)
  const quantities: Record<number, number> = cartItems.reduce(
    (acc, item) => ({ ...acc, [item.id]: item.quantity }),
    {} as Record<number, number>
  );

  const subtotal = cartItems.reduce(
    (total, item) =>
      total +
      parseInt(item.currentPrice.replace(/[₹,]/g, "")) * quantities[item.id],
    0
  );

  const totalOriginalPrice = cartItems.reduce(
    (total, item) =>
      total +
      parseInt(item.originalPrice.replace(/[₹,]/g, "")) * quantities[item.id],
    0
  );

  const savings = totalOriginalPrice - subtotal;
  const grandTotal = subtotal;

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString("en-IN")}`;
  };

  const handleAddNewAddress = () => {
    setIsNewAddressModalVisible(true);
  };

  const handleCloseNewAddressModal = () => {
    setIsNewAddressModalVisible(false);
  };

  const handleSaveNewAddress = (addressData: any) => {
    console.log("New address saved:", addressData);
    // Handle saving the new address
    setIsNewAddressModalVisible(false);
  };

  const handleAddMember = () => {
    console.log("Add member pressed");
    // Handle add member logic
  };

  const handleConfirmMembers = () => {
    console.log("Confirm members pressed");
    // Handle confirm members logic
  };

  const handleApplyCoupon = () => {
    console.log("Applying coupon:", couponCode);
    // Handle coupon application logic
  };

  const handleProceedToPayment = () => {
    console.log("Proceeding to secure payment...");
    // Handle proceed to payment logic
  };

  const goBack = () => {
    dispatch({
      type: "navigation/setActiveSection",
      payload: "checkout",
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Back to Cart Header */}
        <View style={styles.backContainer}>
          <TouchableOpacity style={styles.backButton} onPress={goBack}>
            <Text style={styles.backIcon}>←</Text>
            <Text style={styles.backText}>Back to Cart</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          {/* Left Container - Delivery and Order Details */}
          <View style={styles.leftContainer}>
            {/* Delivery Address Section */}
            <View style={styles.sectionContainer}>
              <DeliveryAddressSection onAddNewAddress={handleAddNewAddress} />
            </View>

            {/* Order Member Section */}
            <View style={styles.sectionContainer}>
              <OrderMemberSection
                onAddMember={handleAddMember}
                onConfirmMembers={handleConfirmMembers}
              />
            </View>
          </View>

          {/* Right Container - Price Details */}
          <TotalContainer
            subtotal={subtotal}
            savings={savings}
            grandTotal={grandTotal}
            couponCode={couponCode}
            onCouponCodeChange={setCouponCode}
            onApplyCoupon={handleApplyCoupon}
            onProceedToCheckout={handleProceedToPayment}
            formatPrice={formatPrice}
          />
        </View>
      </ScrollView>

      {/* New Address Modal */}
      <NewAddressModal
        visible={isNewAddressModalVisible}
        onClose={handleCloseNewAddressModal}
        onSave={handleSaveNewAddress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: neutral.gray50,
  },
  scrollContainer: {
    flex: 1,
  },
  content: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: 50,
    gap: 20,
    minHeight: "100%",
    width: "70%",
    alignSelf: "center",
  },
  leftContainer: {
    flex: 2.5,
  },
  backContainer: {
    marginTop: 24,
    width: "70%",
    alignSelf: "center",
    paddingHorizontal: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  backIcon: {
    fontSize: 20,
    color: semantic.text.primary,
    marginRight: 8,
  },
  backText: {
    fontSize: 16,
    fontFamily: poppinsWeights.medium,
    color: semantic.text.primary,
  },
  sectionContainer: {
    marginBottom: 32,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    // padding: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default CheckoutDetailsScreen;
