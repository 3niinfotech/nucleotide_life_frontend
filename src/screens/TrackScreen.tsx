import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MainTabScreenProps } from "../navigation/types";
import { semantic } from "../utils/colors";
import { typography } from "../utils/fonts";

type Props = MainTabScreenProps<"Track">;

interface Order {
  id: string;
  status: "processing" | "shipped" | "delivered" | "analyzing" | "completed";
  orderDate: string;
  estimatedDelivery?: string;
  trackingNumber?: string;
}

const TrackScreen: React.FC<Props> = ({ navigation }) => {
  const [orderId, setOrderId] = useState("");
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "NT-2024-001",
      status: "analyzing",
      orderDate: "2024-01-15",
      estimatedDelivery: "2024-02-15",
    },
    {
      id: "NT-2024-002",
      status: "completed",
      orderDate: "2024-01-10",
      trackingNumber: "1Z999AA1234567890",
    },
  ]);

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "processing":
        return semantic.text.tertiary;
      case "shipped":
        return semantic.interactive.primary;
      case "delivered":
        return semantic.text.secondary;
      case "analyzing":
        return semantic.interactive.primary;
      case "completed":
        return "#10b981"; // Green
      default:
        return semantic.text.secondary;
    }
  };

  const getStatusText = (status: Order["status"]) => {
    switch (status) {
      case "processing":
        return "Processing Order";
      case "shipped":
        return "Shipped";
      case "delivered":
        return "Delivered";
      case "analyzing":
        return "Analyzing Sample";
      case "completed":
        return "Analysis Complete";
      default:
        return status;
    }
  };

  const handleTrackOrder = () => {
    if (!orderId.trim()) {
      return;
    }

    // In a real app, this would make an API call
    console.log("Tracking order:", orderId);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Track Your Order</Text>
          <Text style={styles.subtitle}>
            Enter your order ID to track the status of your DNA kit
          </Text>
        </View>

        <View style={styles.trackSection}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Order ID (e.g., NT-2024-001)"
              placeholderTextColor={semantic.text.placeholder}
              value={orderId}
              onChangeText={setOrderId}
            />
            <TouchableOpacity
              style={styles.trackButton}
              onPress={handleTrackOrder}
            >
              <Text style={styles.trackButtonText}>Track</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.ordersSection}>
          <Text style={styles.sectionTitle}>Recent Orders</Text>

          {orders.map((order) => (
            <View key={order.id} style={styles.orderCard}>
              <View style={styles.orderHeader}>
                <Text style={styles.orderId}>{order.id}</Text>
                <View style={styles.statusContainer}>
                  <View
                    style={[
                      styles.statusDot,
                      { backgroundColor: getStatusColor(order.status) },
                    ]}
                  />
                  <Text
                    style={[
                      styles.statusText,
                      { color: getStatusColor(order.status) },
                    ]}
                  >
                    {getStatusText(order.status)}
                  </Text>
                </View>
              </View>

              <View style={styles.orderDetails}>
                <Text style={styles.orderDate}>
                  Ordered: {new Date(order.orderDate).toLocaleDateString()}
                </Text>

                {order.estimatedDelivery && (
                  <Text style={styles.estimatedDelivery}>
                    Estimated Results:{" "}
                    {new Date(order.estimatedDelivery).toLocaleDateString()}
                  </Text>
                )}

                {order.trackingNumber && (
                  <Text style={styles.trackingNumber}>
                    Tracking: {order.trackingNumber}
                  </Text>
                )}
              </View>

              <TouchableOpacity style={styles.viewDetailsButton}>
                <Text style={styles.viewDetailsText}>View Details</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.helpSection}>
          <Text style={styles.helpTitle}>Need Help?</Text>
          <Text style={styles.helpText}>
            If you can't find your order or have questions about your DNA
            analysis, please contact our support team.
          </Text>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Contact Support</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: semantic.background.primary,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 24,
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    ...typography.h1,
    color: semantic.text.primary,
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    ...typography.body,
    color: semantic.text.secondary,
    textAlign: "center",
  },
  trackSection: {
    marginBottom: 32,
  },
  inputContainer: {
    flexDirection: "row",
    gap: 12,
  },
  input: {
    flex: 1,
    backgroundColor: semantic.background.secondary,
    borderWidth: 1,
    borderColor: semantic.border.medium,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    ...typography.body,
    color: semantic.text.primary,
  },
  trackButton: {
    backgroundColor: semantic.interactive.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: "center",
  },
  trackButtonText: {
    ...typography.button,
    color: semantic.text.inverse,
  },
  ordersSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    ...typography.h2,
    color: semantic.text.primary,
    marginBottom: 16,
  },
  orderCard: {
    backgroundColor: semantic.background.secondary,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: semantic.border.light,
    marginBottom: 16,
  },
  orderHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  orderId: {
    ...typography.h3,
    color: semantic.text.primary,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  statusText: {
    ...typography.caption,
    fontWeight: "600",
  },
  orderDetails: {
    marginBottom: 16,
    gap: 4,
  },
  orderDate: {
    ...typography.caption,
    color: semantic.text.secondary,
  },
  estimatedDelivery: {
    ...typography.caption,
    color: semantic.text.secondary,
  },
  trackingNumber: {
    ...typography.caption,
    color: semantic.text.secondary,
  },
  viewDetailsButton: {
    alignSelf: "flex-start",
  },
  viewDetailsText: {
    ...typography.button,
    color: semantic.interactive.primary,
  },
  helpSection: {
    backgroundColor: semantic.background.secondary,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: semantic.border.light,
    alignItems: "center",
  },
  helpTitle: {
    ...typography.h3,
    color: semantic.text.primary,
    marginBottom: 8,
  },
  helpText: {
    ...typography.body,
    color: semantic.text.secondary,
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 20,
  },
  contactButton: {
    backgroundColor: semantic.interactive.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  contactButtonText: {
    ...typography.button,
    color: semantic.text.inverse,
  },
});

export default TrackScreen;
