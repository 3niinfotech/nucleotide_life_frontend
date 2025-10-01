import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useAppSelector, useAppDispatch } from "../hooks";
import { semantic, primary } from "../utils/colors";
import { navigateToCheckout } from "../store/slices/navigationSlice";
import { poppinsWeights } from "../utils/fonts";
import PrimaryButton from "../components/shared/PrimaryButton";
import {
  HowItWorksSection,
  HealthJourneysSection,
  NavigationHeader,
} from "../components";
import {
  ProductImg,
  ProductDetail1,
  ProductDetail2,
  ProductDetail3,
  ProductDetail4,
} from "../utils/imageUtil";
import NucleotideSelectionSection from "../components/HomeScreem/NucleotideSelectionSection";

// Mock data for the product
const productData = {
  title: "1 Genetic One – Personal Plan",
  originalPrice: "₹32,000",
  price: "₹22,000",
  perTest: "/Per Test",
  description:
    "Unlock the secrets of your DNA with our Personal Plan. Get clear, science-backed insights into your health, traits, and wellness tailored just for you",
  features: [
    "Discover your unique genetic profile",
    "Get personalized health and lifestyle insights",
    "Learn about nutrition and fitness compatibility",
    "Explore your ancestry and heritage",
  ],
  shippingBanner: "Free Shipping & Easy Returns",
  bloodCollection: "Blood samples are requied",
};

// Mock app interface data
const appSections = [
  {
    title: "Diet & Lifestyle",
    color: "#E3F2FD",
    items: [
      { label: "NEW Diet", icon: "👤", isNew: true },
      { label: "NEW Nutrient", icon: "🍃", isNew: true },
      { label: "Well-Being", icon: "🧘", isNew: false },
      { label: "Stress & Sleep", icon: "😴", isNew: false },
      { label: "Pollution", icon: "🏭", isNew: false },
      { label: "NEW Skin", icon: "👤", isNew: true },
    ],
  },
  {
    title: "Talents & Sports Performance",
    color: "#FFF9C4",
    items: [
      { label: "Sports & Fitness", icon: "🏃", isNew: false },
      { label: "Success Traits", icon: "🏆", isNew: false },
      { label: "Music & Dance", icon: "🎵", isNew: false },
    ],
  },
  {
    title: "Discover Your Origins",
    color: "#F3E5F5",
    items: [],
  },
];

// Thumbnail data
const thumbnails = [
  { id: 1, type: "product", label: "Product View 1", image: ProductDetail1 },
  { id: 2, type: "product", label: "Product View 2", image: ProductDetail2 },
  { id: 3, type: "product", label: "Product View 3", image: ProductDetail3 },
  { id: 4, type: "product", label: "Product View 4", image: ProductDetail4 },
];

const ProductDetailsScreen: React.FC = () => {
  const [selectedThumbnail, setSelectedThumbnail] = useState(1);
  const { productId } = useAppSelector((state: any) => state.navigation);
  const dispatch = useAppDispatch();
  const scrollViewRef = React.useRef<ScrollView>(null);

  // Navigation functions for next/previous buttons
  const goToNextImage = () => {
    const nextId =
      selectedThumbnail >= thumbnails.length ? 1 : selectedThumbnail + 1;
    setSelectedThumbnail(nextId);
    // Scroll to the selected thumbnail
    scrollToThumbnail(nextId);
  };

  const goToPreviousImage = () => {
    const prevId =
      selectedThumbnail <= 1 ? thumbnails.length : selectedThumbnail - 1;
    setSelectedThumbnail(prevId);
    // Scroll to the selected thumbnail
    scrollToThumbnail(prevId);
  };

  const scrollToThumbnail = (thumbnailId: number) => {
    if (scrollViewRef.current) {
      const thumbnailWidth = 70 + 12; // thumbnail width + margin
      const scrollPosition = (thumbnailId - 1) * thumbnailWidth;
      scrollViewRef.current.scrollTo({
        x: scrollPosition,
        animated: true,
      });
    }
  };

  const handleBuyNow = () => {
    dispatch(navigateToCheckout());
  };

  const renderAppInterface = () => (
    <View style={styles.phoneContainer}>
      <View style={styles.phone}>
        <View style={styles.phoneScreen}>
          <ScrollView
            style={styles.appContent}
            showsVerticalScrollIndicator={false}
          ></ScrollView>
        </View>
      </View>
    </View>
  );

  const renderThumbnails = () => (
    <View style={styles.thumbnailsContainer}>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={goToPreviousImage}
        style={[styles.arrowButton]}
      >
        <Text style={[styles.arrowText]}>←</Text>
      </TouchableOpacity>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.thumbnailsScroll}
      >
        {thumbnails.map((thumb) => (
          <TouchableOpacity
            key={thumb.id}
            style={[
              styles.thumbnail,
              selectedThumbnail === thumb.id && styles.selectedThumbnail,
            ]}
            onPress={() => setSelectedThumbnail(thumb.id)}
          >
            <View style={styles.thumbnailContent}>
              <Image
                source={thumb.image}
                style={styles.thumbnailImage}
                resizeMode="cover"
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        accessibilityRole="button"
        onPress={goToNextImage}
        style={[styles.arrowButton]}
      >
        <Text style={[styles.arrowText]}>→</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          {/* Left Section - Product Visualization */}
          <View style={styles.leftSection}>
            {/* Main Product Image - displays selected thumbnail */}
            <View style={styles.mainImageContainer}>
              <Image
                source={
                  thumbnails.find((thumb) => thumb.id === selectedThumbnail)
                    ?.image || ProductImg
                }
                style={styles.productImage}
              />
              {/* Image counter */}
              {/* <View style={styles.imageCounter}>
                <Text style={styles.imageCounterText}>
                  {selectedThumbnail} of {thumbnails.length}
                </Text>
              </View> */}
            </View>
            {renderThumbnails()}
          </View>

          {/* Right Section - Product Details */}
          <View style={styles.rightSection}>
            <Text style={styles.productTitle}>
              {productId || productData.title}
            </Text>

            <View style={styles.shippingBanner}>
              <Text style={styles.shippingBannerText}>
                {productData.shippingBanner}
              </Text>
            </View>

            <View style={styles.pricingContainer}>
              <Text style={styles.originalPrice}>
                {productData.originalPrice}
              </Text>
              <View style={styles.priceRow}>
                <Text style={styles.currentPrice}>{productData.price}</Text>
                <Text style={styles.perTestText}>{productData.perTest}</Text>
              </View>
            </View>

            <View style={styles.bloodCollectionBanner}>
              <Text style={styles.bloodCollectionBannerText}>
                {productData.bloodCollection}
              </Text>
            </View>

            <Text style={styles.description}>{productData.description}</Text>

            <View style={styles.featuresContainer}>
              <Text style={styles.featuresTitle}>
                With the Personal Plan, you can:
              </Text>
              {productData.features.map((feature, index) => (
                <View key={index} style={styles.featureItem}>
                  <Text style={styles.bulletPoint}>•</Text>
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>

            <View style={styles.buttonContainer}>
              <PrimaryButton
                label="Add to Cart"
                style={styles.addToCartButton}
                labelTextColor={semantic.interactive.primary}
              />
              <PrimaryButton
                label="Order Now"
                style={styles.buyNowButton}
                onPress={handleBuyNow}
              />
            </View>
          </View>
        </View>

        <HowItWorksSection isBackground={true} />
        <HealthJourneysSection isBackground={false} />
        <NucleotideSelectionSection isBackground={true} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: semantic.background.primary,
  },
  scrollContainer: {
    flex: 1,
    paddingTop: 50,
  },
  content: {
    flexDirection: "row",
    padding: 20,
    gap: 40,
  },
  leftSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  mainImageContainer: {
    width: 500,
    height: 400,
    marginBottom: 20,
    borderRadius: 12,
    overflow: "hidden",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 3,
  },
  rightSection: {
    flex: 1,
    paddingTop: 20,
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  imageCounter: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  imageCounterText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: poppinsWeights.medium,
  },
  // Product Box Styles
  productBoxContainer: {
    marginBottom: 20,
  },
  productBox: {
    width: 200,
    height: 280,
    backgroundColor: "#2C2C2C",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  productBoxHeader: {
    alignItems: "center",
  },
  productBoxTitle: {
    fontSize: 18,
    fontFamily: poppinsWeights.bold,
    color: "#FFD700",
    textAlign: "center",
  },
  productBoxSubtitle: {
    fontSize: 12,
    fontFamily: poppinsWeights.regular,
    color: "#FFD700",
    textAlign: "center",
    marginTop: 4,
  },
  productBoxDesign: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circularDesign: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#FFD700",
    opacity: 0.3,
  },

  // Phone Styles
  phoneContainer: {
    marginBottom: 20,
  },
  phone: {
    width: 180,
    height: 320,
    backgroundColor: "#000",
    borderRadius: 20,
    padding: 8,
  },
  phoneScreen: {
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 16,
    overflow: "hidden",
  },
  appContent: {
    flex: 1,
    padding: 16,
  },
  appSection: {
    marginBottom: 20,
  },
  appSectionTitle: {
    fontSize: 16,
    fontFamily: poppinsWeights.semiBold,
    color: semantic.text.primary,
    marginBottom: 12,
  },
  appButtonsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  appButton: {
    width: "48%",
    aspectRatio: 1,
    borderRadius: 8,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  appButtonIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  appButtonText: {
    fontSize: 12,
    fontFamily: poppinsWeights.medium,
    color: semantic.text.primary,
    textAlign: "center",
  },
  newBadge: {
    position: "absolute",
    top: 4,
    right: 4,
    backgroundColor: "#1976D2",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
  newBadgeText: {
    fontSize: 8,
    fontFamily: poppinsWeights.bold,
    color: "#FFF",
  },

  // Thumbnails Styles
  thumbnailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 10,
  },
  thumbnailArrow: {
    width: 36,
    height: 36,
    backgroundColor: "#f8f9fa",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  thumbnailArrowText: {
    fontSize: 18,
    fontFamily: poppinsWeights.bold,
    color: semantic.text.primary,
  },
  thumbnailsScroll: {
    flex: 1,
  },
  thumbnail: {
    width: 70,
    height: 70,
    marginRight: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    overflow: "hidden",
    backgroundColor: "#f8f9fa",
  },
  selectedThumbnail: {
    borderColor: primary.purple,
    borderWidth: 3,
    shadowColor: primary.purple,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  thumbnailContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  thumbnailImage: {
    width: "100%",
    height: "100%",
  },
  selectedIndicator: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: primary.purple,
    borderWidth: 2,
    borderColor: "#fff",
  },

  // Product Details Styles
  productTitle: {
    fontSize: 32,
    fontFamily: poppinsWeights.semiBold,
    color: semantic.text.primary,
    marginBottom: 16,
  },
  shippingBanner: {
    backgroundColor: "#E8F5E8",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  shippingBannerText: {
    fontSize: 12,
    fontFamily: poppinsWeights.medium,
    color: "#2E7D32",
    textAlign: "center",
  },
  bloodCollectionBanner: {
    backgroundColor: "#EBE6FF",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  bloodCollectionBannerText: {
    fontSize: 12,
    fontFamily: poppinsWeights.medium,
    color: semantic.interactive.primary,
    textAlign: "center",
  },
  pricingContainer: {
    marginBottom: 10,
  },
  originalPrice: {
    fontSize: 12,
    fontFamily: poppinsWeights.regular,
    color: semantic.text.light,
    textDecorationLine: "line-through",
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 8,
  },
  currentPrice: {
    fontSize: 24,
    fontFamily: poppinsWeights.semiBold,
    color: semantic.text.primary,
  },
  perTestText: {
    fontSize: 14,
    fontFamily: poppinsWeights.regular,
    color: semantic.text.secondary,
  },
  description: {
    fontSize: 14,
    fontFamily: poppinsWeights.regular,
    color: semantic.text.primary,
    lineHeight: 24,
    marginBottom: 10,
  },
  featuresContainer: {
    marginBottom: 32,
  },
  featuresTitle: {
    fontSize: 16,
    fontFamily: poppinsWeights.regular,
    color: semantic.text.primary,
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  bulletPoint: {
    fontSize: 20,
    fontFamily: poppinsWeights.bold,
    color: semantic.text.primary,
    marginRight: 8,
    lineHeight: 20,
  },
  featureText: {
    flex: 1,
    fontSize: 14,
    fontFamily: poppinsWeights.regular,
    color: semantic.text.primary,
    lineHeight: 20,
  },
  buttonContainer: {
    gap: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  addToCartButton: {
    backgroundColor: "#EBE6FF",
    color: primary.purple,
    alignSelf: "flex-start",
  },
  buyNowButton: {
    backgroundColor: semantic.interactive.primary,
    color: semantic.text.inverse,
    alignSelf: "flex-start",
  },

  arrowButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: semantic.background.overlay,
  },
  arrowText: {
    color: semantic.text.inverse,
    fontFamily: poppinsWeights.semiBold,
    fontSize: 16,
  },
  arrowButtonDisabled: {
    backgroundColor: semantic.background.secondary,
    opacity: 0.5,
  },
  arrowTextDisabled: {
    color: semantic.text.secondary,
  },
});

export default ProductDetailsScreen;
