import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { semantic, primary } from "../utils/colors";
import { useResponsiveFontUtils } from "../hooks";
import { useAppDispatch } from "../hooks";
import { setActiveSection } from "../store/slices/navigationSlice";
import {
  IcEdit,
  IcMyOrder,
  IcMyFamily,
  IcLocation,
  IcSetting,
  IcSupport,
  IcLogout,
  IcMail,
  IcPhone,
  IcCalling,
} from "../utils/iconUtil";

const ProfileScreen: React.FC = () => {
  const { getResponsiveStyle } = useResponsiveFontUtils();
  const dispatch = useAppDispatch();
  const [activeMenuItem, setActiveMenuItem] = useState("My Orders");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: semantic.background.secondary,
      paddingVertical: 50,
    },
    topSection: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 24,
      backgroundColor: semantic.background.primary,
      borderWidth: 1,
      borderColor: semantic.border.light,
      maxWidth: 1440,
      alignSelf: "center",
      width: "100%",
      marginBottom: 24,
      borderRadius: 8,
    },
    profileInfo: {
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: primary.purple,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 16,
    },
    avatarText: {
      color: semantic.background.primary,
    },
    userDetails: {
      flex: 1,
    },
    userName: {
      color: semantic.text.primary,
      marginBottom: 8,
    },
    contactInfo: {
      flexDirection: "row",
      gap: 20,
    },
    contactItem: {
      flexDirection: "row",
      alignItems: "center",
    },
    contactIcon: {
      marginRight: 8,
    },
    userEmail: {
      color: semantic.text.secondary,
    },
    userPhone: {
      color: semantic.text.secondary,
    },
    editButton: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: semantic.border.light,
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 6,
      flexDirection: "row",
      alignItems: "center",
    },
    editIcon: {
      marginRight: 8,
    },
    editButtonText: {
      color: semantic.text.secondary,
    },
    bottomSection: {
      flex: 1,
      flexDirection: Platform.OS === "web" ? "row" : "column",
      maxWidth: 1440,
      alignSelf: "center",
      width: "100%",
      borderRadius: 8,
      borderWidth: 1,
      borderColor: semantic.border.light,
      overflow: "hidden",
    },
    leftMenu: {
      width: Platform.OS === "web" ? "15%" : "100%",
      backgroundColor: semantic.background.primary,
      borderRightWidth: Platform.OS === "web" ? 1 : 0,
      borderRightColor: semantic.border.light,
      paddingVertical: 16,
    },
    rightContent: {
      flex: 1,
      backgroundColor: semantic.background.primary,
    },
    scrollView: {
      flex: 1,
    },
    menuItem: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 16,
      marginBottom: 4,
      borderBottomWidth: 1,
      borderBottomColor: semantic.border.light,
    },
    activeMenuItem: {
      // backgroundColor: "#f8f9ff",
      // borderRightWidth: 4,
      // borderRightColor: primary.purple,
    },
    menuItemIcon: {
      marginRight: 16,
      justifyContent: "center",
      alignItems: "center",
    },
    menuItemText: {
      color: semantic.text.secondary,
    },
    activeMenuItemText: {
      color: primary.purple,
    },
    contentSection: {
      flex: 1,
    },
    sectionTitle: {
      color: semantic.text.primary,
      marginBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: semantic.border.light,
      padding: 24,
    },
    placeholderText: {
      color: semantic.text.secondary,
      textAlign: "center",
      marginTop: 40,
    },
    orderCard: {
      backgroundColor: semantic.background.secondary,
      borderRadius: 8,
      padding: 20,
      marginBottom: 16,
      marginHorizontal: 24,
      borderWidth: 1,
      borderColor: semantic.border.light,
      shadowColor: semantic.shadow.light,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    orderHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    orderTitle: {
      color: semantic.text.primary,
      flex: 1,
      marginRight: 12,
    },
    viewDetailsButton: {
      backgroundColor: primary.purple,
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 6,
    },
    viewDetailsText: {
      color: semantic.background.primary,
    },
    orderDetails: {
      // marginBottom: 12,
    },
    orderDetailTextBold: {
      color: semantic.text.primary,
    },
    orderDetailText: {
      color: semantic.text.secondary,
      marginBottom: 4,
    },
    orderDetailRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    orderFooter: {},
    deliveryStatus: {
      color: semantic.text.primary,
      textAlign: "right",
    },
  });

  const handleLogout = () => {
    // Handle logout logic
    console.log("User logged out");
    dispatch(setActiveSection("home"));
  };

  const handleMenuItemPress = (item: string) => {
    console.log(`${item} pressed`);
    setActiveMenuItem(item);
  };

  const handleViewOrderDetails = (orderId: string) => {
    console.log(`View details for order ${orderId}`);
  };

  const renderRightContent = () => {
    switch (activeMenuItem) {
      case "My Orders":
        return renderMyOrders();
      case "My Family":
        return renderMyFamily();
      case "Address":
        return renderAddress();
      case "Settings":
        return renderSettings();
      case "Support":
        return renderSupport();
      default:
        return renderMyOrders();
    }
  };

  const renderMyOrders = () => (
    <View style={styles.contentSection}>
      <Text style={[styles.sectionTitle, getResponsiveStyle("medium", 18)]}>
        My Orders
      </Text>
      {orderHistory.map((order) => (
        <View key={order.id} style={styles.orderCard}>
          <View style={styles.orderHeader}>
            <Text
              style={[styles.orderTitle, getResponsiveStyle("semiBold", 18)]}
            >
              {order.title}
            </Text>
            <TouchableOpacity
              style={styles.viewDetailsButton}
              onPress={() => handleViewOrderDetails(order.id)}
            >
              <Text
                style={[
                  styles.viewDetailsText,
                  getResponsiveStyle("medium", 16),
                ]}
              >
                View Details
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.orderDetails}>
            <Text
              style={[
                styles.orderDetailText,
                getResponsiveStyle("regular", 14),
              ]}
            >
              Quantity :{" "}
              <Text
                style={[
                  styles.orderDetailTextBold,
                  getResponsiveStyle("semiBold", 14),
                ]}
              >
                {order.quantity}
              </Text>
            </Text>
            <Text
              style={[
                styles.orderDetailText,
                getResponsiveStyle("regular", 14),
              ]}
            >
              Total Paid :{" "}
              <Text
                style={[
                  styles.orderDetailTextBold,
                  getResponsiveStyle("semiBold", 14),
                ]}
              >
                {order.totalPaid}
              </Text>
            </Text>
            <View style={styles.orderDetailRow}>
              <Text
                style={[
                  styles.orderDetailText,
                  getResponsiveStyle("regular", 14),
                ]}
              >
                Reference No :{" "}
                <Text
                  style={[
                    styles.orderDetailTextBold,
                    getResponsiveStyle("semiBold", 14),
                  ]}
                >
                  {order.referenceNo}
                </Text>
              </Text>
              <View style={styles.orderFooter}>
                <Text
                  style={[
                    styles.deliveryStatus,
                    getResponsiveStyle("regular", 18),
                  ]}
                >
                  {order.status} {order.deliverDate}
                </Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );

  const renderMyFamily = () => (
    <View style={styles.contentSection}>
      <Text style={[styles.sectionTitle, getResponsiveStyle("medium", 18)]}>
        My Family
      </Text>
      <Text style={[styles.placeholderText, getResponsiveStyle("regular", 16)]}>
        Family members will be displayed here.
      </Text>
    </View>
  );

  const renderAddress = () => (
    <View style={styles.contentSection}>
      <Text style={[styles.sectionTitle, getResponsiveStyle("medium", 18)]}>
        Address
      </Text>
      <Text style={[styles.placeholderText, getResponsiveStyle("regular", 16)]}>
        Address information will be displayed here.
      </Text>
    </View>
  );

  const renderSettings = () => (
    <View style={styles.contentSection}>
      <Text style={[styles.sectionTitle, getResponsiveStyle("medium", 18)]}>
        Settings
      </Text>
      <Text style={[styles.placeholderText, getResponsiveStyle("regular", 16)]}>
        Settings options will be displayed here.
      </Text>
    </View>
  );

  const renderSupport = () => (
    <View style={styles.contentSection}>
      <Text style={[styles.sectionTitle, getResponsiveStyle("medium", 18)]}>
        Support
      </Text>
      <Text style={[styles.placeholderText, getResponsiveStyle("regular", 16)]}>
        Support information will be displayed here.
      </Text>
    </View>
  );

  const orderHistory = [
    {
      id: "1",
      title: "Genetic One - Personal Plan",
      quantity: 1,
      totalPaid: "₹22,000",
      referenceNo: "#1234567890",
      deliverDate: "Mon, 23 Oct 2025",
      status: "Deliver on",
    },
    {
      id: "2",
      title: "Genetic One - Couple Pack",
      quantity: 1,
      totalPaid: "₹41,600",
      referenceNo: "#1234567890",
      deliverDate: "Mon, 23 Oct 2025",
      status: "Delivered on",
    },
    {
      id: "3",
      title: "Genetic One - Family Pack",
      quantity: 1,
      totalPaid: "₹57,600",
      referenceNo: "#1234567890",
      deliverDate: "Mon, 23 Oct 2025",
      status: "Delivered on",
    },
    {
      id: "4",
      title: "Genetic One - Extended Family Pack",
      quantity: 1,
      totalPaid: "₹70,400",
      referenceNo: "#1234567890",
      deliverDate: "Mon, 23 Oct 2025",
      status: "Delivered on",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Top Profile Section */}
      <View style={styles.topSection}>
        <View style={styles.profileInfo}>
          <View style={styles.avatar}>
            <Text
              style={[styles.avatarText, getResponsiveStyle("semiBold", 16)]}
            >
              NG
            </Text>
          </View>
          <View style={styles.userDetails}>
            <Text style={[styles.userName, getResponsiveStyle("semiBold", 16)]}>
              Nirav Gabani
            </Text>
            <View style={styles.contactInfo}>
              <View style={styles.contactItem}>
                <IcMail style={styles.contactIcon} />
                <Text
                  style={[styles.userEmail, getResponsiveStyle("regular", 14)]}
                >
                  niravgabani@gmail.com
                </Text>
              </View>
              <View style={styles.contactItem}>
                <IcCalling style={styles.contactIcon} />
                <Text
                  style={[styles.userPhone, getResponsiveStyle("regular", 14)]}
                >
                  +91 98765 43210
                </Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <IcEdit style={styles.editIcon} />
          <Text
            style={[styles.editButtonText, getResponsiveStyle("medium", 14)]}
          >
            Edit Profile
          </Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Section with Left Menu and Right Content */}
      <View style={styles.bottomSection}>
        {/* Left Menu */}
        <View style={styles.leftMenu}>
          <TouchableOpacity
            style={[
              styles.menuItem,
              activeMenuItem === "My Orders" && styles.activeMenuItem,
            ]}
            onPress={() => handleMenuItemPress("My Orders")}
          >
            <View style={styles.menuItemIcon}>
              <IcMyOrder />
            </View>
            <Text
              style={[
                styles.menuItemText,
                getResponsiveStyle("regular", 16),
                activeMenuItem === "My Orders" && styles.activeMenuItemText,
              ]}
            >
              My Orders
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.menuItem,
              activeMenuItem === "My Family" && styles.activeMenuItem,
            ]}
            onPress={() => handleMenuItemPress("My Family")}
          >
            <View style={styles.menuItemIcon}>
              <IcMyFamily />
            </View>
            <Text
              style={[
                styles.menuItemText,
                getResponsiveStyle("regular", 16),
                activeMenuItem === "My Family" && styles.activeMenuItemText,
              ]}
            >
              My Family
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.menuItem,
              activeMenuItem === "Address" && styles.activeMenuItem,
            ]}
            onPress={() => handleMenuItemPress("Address")}
          >
            <View style={styles.menuItemIcon}>
              <IcLocation />
            </View>
            <Text
              style={[
                styles.menuItemText,
                getResponsiveStyle("regular", 16),
                activeMenuItem === "Address" && styles.activeMenuItemText,
              ]}
            >
              Address
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.menuItem,
              activeMenuItem === "Settings" && styles.activeMenuItem,
            ]}
            onPress={() => handleMenuItemPress("Settings")}
          >
            <View style={styles.menuItemIcon}>
              <IcSetting />
            </View>
            <Text
              style={[
                styles.menuItemText,
                getResponsiveStyle("regular", 16),
                activeMenuItem === "Settings" && styles.activeMenuItemText,
              ]}
            >
              Settings
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.menuItem,
              activeMenuItem === "Support" && styles.activeMenuItem,
            ]}
            onPress={() => handleMenuItemPress("Support")}
          >
            <View style={styles.menuItemIcon}>
              <IcSupport />
            </View>
            <Text
              style={[
                styles.menuItemText,
                getResponsiveStyle("regular", 16),
                activeMenuItem === "Support" && styles.activeMenuItemText,
              ]}
            >
              Support
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
            <View style={styles.menuItemIcon}>
              <IcLogout />
            </View>
            <Text
              style={[styles.menuItemText, getResponsiveStyle("regular", 16)]}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </View>

        {/* Right Content Area */}
        <View style={styles.rightContent}>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            {renderRightContent()}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
