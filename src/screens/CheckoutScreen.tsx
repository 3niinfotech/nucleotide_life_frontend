import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useAppDispatch } from "../hooks";
import { semantic, neutral } from "../utils/colors";
import { useResponsiveFontUtils } from "../hooks";
import NucleotideSelectionSection from "../components/HomeScreem/NucleotideSelectionSection";
import TotalContainer from "../components/shared/TotalContainer";
import RequestOTPModal from "../components/shared/RequestOTPModal";
import OTPModal from "../components/shared/OTPModal";

// Mock data for cart items
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

// Payment method logos (you can replace with actual images)
const paymentMethods = [
  "American Express",
  "Apple Pay",
  "Google Pay",
  "Mastercard",
  "PayPal",
  "Shop Pay",
  "UnionPay",
  "Visa",
];

const CheckoutScreen: React.FC = () => {
  const { getResponsiveStyle } = useResponsiveFontUtils();
  const dispatch = useAppDispatch();
  const [couponCode, setCouponCode] = useState("");
  const [quantities, setQuantities] = useState<Record<number, number>>(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {})
  );

  const [isLoading, setIsLoading] = useState(false);
  const [showRequestOtpModal, setShowRequestOtpModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [resendTimer, setResendTimer] = useState(30);

  const handleMobileNumberChange = (value: string) => {
    setMobileNumber(value);
  };

  const resetRequestModal = () => {
    setMobileNumber("");
    setShowRequestOtpModal(false);
  };

  const resetOtpModal = () => {
    setShowOtpModal(false);
    setResendTimer(30);
  };

  const handleOtpModalReset = () => {
    // Additional reset logic if needed when OTP modal is closed
    console.log("OTP modal reset");
  };

  const handleRequestModalReset = () => {
    // Additional reset logic if needed when Request modal is closed
    console.log("Request modal reset");
  };

  const handleRequestOTP = () => {
    console.log("Request OTP button pressed");
    console.log("Mobile number when requesting OTP:", mobileNumber);
    // Close request modal and show OTP modal
    setShowRequestOtpModal(false);
    setShowOtpModal(true);
    setResendTimer(30);
    startResendTimer();
  };

  const handleVerifyOTP = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      resetOtpModal();
      // Handle successful verification - navigate to checkout details
      console.log("OTP verified successfully");
      dispatch({
        type: "navigation/setActiveSection",
        payload: "checkout-details",
      });
    }, 1000);
  };

  const handleResendOTP = () => {
    if (resendTimer > 0) return;
    setResendTimer(30);
    startResendTimer();
    // Simulate resending OTP
    console.log("Resending OTP...");
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

  // Calculate totals
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

  const updateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity >= 0) {
      setQuantities((prev) => ({ ...prev, [itemId]: newQuantity }));
    }
  };

  const handleProceedToCheckout = () => {
    // Handle checkout logic here
    console.log("Proceeding to checkout...");
  };

  const handleApplyCoupon = () => {
    // Handle coupon application logic here
    console.log("Applying coupon:", couponCode);
  };

  const goBack = () => {
    dispatch({
      type: "navigation/setActiveSection",
      payload: "product-details",
    });
  };

  const renderCartItem = (item: (typeof cartItems)[0]) => (
    <View style={[styles.planContainer, { marginTop: 10 }]} key={item.id}>
      <View style={styles.itemNameContainer}>
        <Text style={[styles.itemName, getResponsiveStyle("regular", 16)]}>
          {item.name}
        </Text>
      </View>
      <View style={styles.planTitleContainer}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => updateQuantity(item.id, quantities[item.id] - 1)}
          >
            <Text
              style={[
                styles.quantityButtonText,
                getResponsiveStyle("regular", 25),
              ]}
            >
              -
            </Text>
          </TouchableOpacity>
          <Text
            style={[styles.quantityText, getResponsiveStyle("regular", 18)]}
          >
            {quantities[item.id]}
          </Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => updateQuantity(item.id, quantities[item.id] + 1)}
          >
            <Text
              style={[
                styles.quantityButtonText,
                getResponsiveStyle("regular", 25),
              ]}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.priceInfo}>
          <Text
            style={[styles.currentPrice, getResponsiveStyle("regular", 20)]}
          >
            {formatPrice(
              parseInt(item.currentPrice.replace(/[₹,]/g, "")) *
                quantities[item.id]
            )}
          </Text>
          <Text
            style={[styles.originalPrice, getResponsiveStyle("regular", 14)]}
          >
            MRP{" "}
            {formatPrice(
              parseInt(item.originalPrice.replace(/[₹,]/g, "")) *
                quantities[item.id]
            )}
          </Text>
        </View>
      </View>
    </View>
    // <View key={item.id} style={styles.cartItem}>
    //   <View style={styles.itemNameContainer}>
    //     <Text style={styles.itemName}>{item.name}</Text>
    //   </View>
    //   <View style={styles.quantityContainer}>
    //     <TouchableOpacity
    //       style={styles.quantityButton}
    //       onPress={() => updateQuantity(item.id, quantities[item.id] - 1)}
    //     >
    //       <Text style={styles.quantityButtonText}>-</Text>
    //     </TouchableOpacity>
    //     <Text style={styles.quantityText}>{quantities[item.id]}</Text>
    //     <TouchableOpacity
    //       style={styles.quantityButton}
    //       onPress={() => updateQuantity(item.id, quantities[item.id] + 1)}
    //     >
    //       <Text style={styles.quantityButtonText}>+</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View style={styles.priceInfo}>
    //     <Text style={styles.currentPrice}>
    //       {formatPrice(
    //         parseInt(item.currentPrice.replace(/[₹,]/g, "")) *
    //           quantities[item.id]
    //       )}
    //     </Text>
    //     <Text style={styles.originalPrice}>
    //       MRP{" "}
    //       {formatPrice(
    //         parseInt(item.originalPrice.replace(/[₹,]/g, "")) *
    //           quantities[item.id]
    //       )}
    //     </Text>
    //   </View>
    // </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          {/* Left Container - Order Summary */}
          <View style={styles.leftContainer}>
            <Text
              style={[styles.sectionTitle, getResponsiveStyle("regular", 20)]}
            >
              Your Order Summary
            </Text>
            <View style={styles.divider} />

            <View style={styles.planContainer}>
              <Text
                style={[styles.planTitle, getResponsiveStyle("regular", 16)]}
              >
                DNA Kit Plan
              </Text>
              <View style={styles.planTitleContainer}>
                <Text
                  style={[
                    styles.columnHeader,
                    getResponsiveStyle("regular", 16),
                  ]}
                >
                  Quantity
                </Text>
                <Text
                  style={[
                    styles.columnHeader,
                    getResponsiveStyle("regular", 16),
                  ]}
                >
                  Total
                </Text>
              </View>
            </View>
            <View style={styles.divider} />

            {cartItems.map(renderCartItem)}
          </View>

          {/* Right Container - Price Details */}
          <TotalContainer
            subtotal={subtotal}
            savings={savings}
            grandTotal={grandTotal}
            couponCode={couponCode}
            onCouponCodeChange={setCouponCode}
            onApplyCoupon={handleApplyCoupon}
            onProceedToCheckout={() => setShowRequestOtpModal(true)}
            formatPrice={formatPrice}
          />
        </View>

        <NucleotideSelectionSection isBackground={true} />
      </ScrollView>

      <RequestOTPModal
        visible={showRequestOtpModal}
        mobileNumber={mobileNumber}
        onClose={resetRequestModal}
        onRequestOTP={handleRequestOTP}
        onMobileNumberChange={handleMobileNumberChange}
        onReset={handleRequestModalReset}
      />

      <OTPModal
        visible={showOtpModal}
        mobileNumber={mobileNumber}
        isLoading={isLoading}
        resendTimer={resendTimer}
        onClose={resetOtpModal}
        onVerify={handleVerifyOTP}
        onResend={handleResendOTP}
        onReset={handleOtpModalReset}
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
    paddingVertical: 50,
    gap: 20,
    minHeight: "100%",
    width: "70%",
    alignSelf: "center",
  },
  leftContainer: {
    flex: 2.5,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  planContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  sectionTitle: {
    color: semantic.text.primary,
    marginBottom: 16,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginBottom: 16,
  },
  planTitle: {
    color: semantic.text.secondary,
  },
  planTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "30%",
  },
  columnHeader: {
    color: semantic.text.secondary,
    textAlign: "center",
    alignSelf: "center",
    // width: 100,
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  itemNameContainer: {
    flex: 1,
    marginRight: 16,
  },
  itemName: {
    color: semantic.text.primary,
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    justifyContent: "space-between",
  },
  quantityButton: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  quantityButtonText: {
    color: semantic.text.primary,
  },
  quantityText: {
    color: semantic.text.primary,
    marginHorizontal: 8,
    minWidth: 16,
    textAlign: "center",
  },
  priceInfo: {
    alignItems: "flex-end",
  },
  currentPrice: {
    color: semantic.text.primary,
    marginBottom: 4,
  },
  originalPrice: {
    color: semantic.text.light,
    textDecorationLine: "line-through",
  },
});

export default CheckoutScreen;
