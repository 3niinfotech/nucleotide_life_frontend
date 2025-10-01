import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { semantic, primary } from "../../utils/colors";
import { poppinsWeights } from "../../utils/fonts";
import { Images } from "../../utils/imageUtil";
import { IcTruck } from "../../utils/iconUtil";

interface TotalContainerProps {
  subtotal: number;
  savings: number;
  grandTotal: number;
  couponCode: string;
  onCouponCodeChange: (value: string) => void;
  onApplyCoupon: () => void;
  onProceedToCheckout: () => void;
  formatPrice: (price: number) => string;
}

const TotalContainer: React.FC<TotalContainerProps> = ({
  subtotal,
  savings,
  grandTotal,
  couponCode,
  onCouponCodeChange,
  onApplyCoupon,
  onProceedToCheckout,
  formatPrice,
}) => {
  return (
    <View style={styles.rightContainer}>
      <View style={styles.priceDetails}>
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Subtotal:</Text>
          <Text style={styles.priceValue}>{formatPrice(subtotal)}</Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>You Save:</Text>
          <Text style={styles.savingsValue}>- {formatPrice(savings)}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.priceRow}>
          <Text style={styles.grandTotalLabel}>Grand Total:</Text>
          <Text style={styles.grandTotalValue}>{formatPrice(grandTotal)}</Text>
        </View>
      </View>

      <Text style={styles.freeShippingText}>Free shipping on all orders</Text>

      <View style={styles.deliveryEstimate}>
        <IcTruck style={styles.truckIcon} />
        <Text style={styles.deliveryText}>Estimated Delivery: 5-7 days</Text>
      </View>

      {/* Coupon Code Section */}
      <View style={styles.couponSection}>
        <TextInput
          style={styles.couponInput}
          placeholder="Enter valid coupon code"
          value={couponCode}
          onChangeText={onCouponCodeChange}
          placeholderTextColor={semantic.text.light}
        />
        <TouchableOpacity style={styles.applyButton} onPress={onApplyCoupon}>
          <Text style={styles.applyButtonText}>Apply Code</Text>
        </TouchableOpacity>
      </View>

      {/* Proceed to Checkout Button */}
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={onProceedToCheckout}
      >
        <Text style={styles.checkoutButtonText}>Proceed to Secure Payment</Text>
      </TouchableOpacity>

      {/* Payment Methods */}
      <View style={styles.paymentSection}>
        <Text style={styles.securePaymentsText}>Secure Payments with</Text>
        <View style={styles.paymentMethodsContainer}>
          <Image
            source={Images.paymentOption}
            style={styles.paymentMethodImage}
            resizeMode="contain"
            onError={(error) => console.log("Payment image load error:", error)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rightContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 24,
    height: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  priceDetails: {
    marginBottom: 0,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  priceLabel: {
    fontSize: 16,
    fontFamily: poppinsWeights.medium,
    color: semantic.text.primary,
  },
  priceValue: {
    fontSize: 16,
    fontFamily: poppinsWeights.medium,
    color: semantic.text.primary,
  },
  savingsValue: {
    fontSize: 16,
    fontFamily: poppinsWeights.medium,
    color: "#FF6B35",
  },
  grandTotalLabel: {
    fontSize: 16,
    fontFamily: poppinsWeights.semiBold,
    color: semantic.text.primary,
  },
  grandTotalValue: {
    fontSize: 16,
    fontFamily: poppinsWeights.medium,
    color: semantic.text.primary,
  },
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginBottom: 16,
  },
  freeShippingText: {
    fontSize: 14,
    fontFamily: poppinsWeights.regular,
    color: semantic.text.secondary,
    marginBottom: 8,
    textAlign: "left",
  },
  deliveryEstimate: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  truckIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  deliveryText: {
    fontSize: 14,
    fontFamily: poppinsWeights.regular,
    color: semantic.text.secondary,
  },
  couponSection: {
    flexDirection: "row",
    marginBottom: 20,
  },
  couponInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    fontFamily: poppinsWeights.regular,
    color: semantic.text.primary,
  },
  applyButton: {
    backgroundColor: primary.purple,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
  applyButtonText: {
    fontSize: 16,
    fontFamily: poppinsWeights.semiBold,
    color: semantic.text.inverse,
  },
  checkoutButton: {
    backgroundColor: primary.purple,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  checkoutButtonText: {
    fontSize: 16,
    fontFamily: poppinsWeights.semiBold,
    color: "#FFFFFF",
    textAlign: "center",
  },
  paymentSection: {
    alignItems: "center",
  },
  securePaymentsText: {
    fontSize: 14,
    fontFamily: poppinsWeights.regular,
    color: semantic.text.primary,
  },
  paymentMethodsContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    width: "100%",
  },
  paymentMethodImage: {
    width: "100%",
    maxWidth: 300,
    height: 40,
    resizeMode: "contain",
  },
});

export default TotalContainer;
