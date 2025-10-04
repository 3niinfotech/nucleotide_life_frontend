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
import { useResponsiveFontUtils } from "../hooks";
import PrimaryButton from "../components/shared/PrimaryButton";
import { HowItWorksSection, HealthJourneysSection } from "../components";
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

// Thumbnail data
const thumbnails = [
  { id: 1, type: "product", label: "Product View 1", image: ProductDetail1 },
  { id: 2, type: "product", label: "Product View 2", image: ProductDetail2 },
  { id: 3, type: "product", label: "Product View 3", image: ProductDetail3 },
  { id: 4, type: "product", label: "Product View 4", image: ProductDetail4 },
];

const ProductDetailsScreen: React.FC = () => {
  const { getResponsiveStyle } = useResponsiveFontUtils();
  const [selectedThumbnail, setSelectedThumbnail] = useState(1);
  const { productId } = useAppSelector((state: any) => state.navigation);
  const dispatch = useAppDispatch();
  const scrollViewRef = React.useRef<ScrollView>(null);
  const mainScrollViewRef = React.useRef<ScrollView>(null);

  // Scroll to top when productId changes (when navigating to different products)
  React.useEffect(() => {
    if (mainScrollViewRef.current) {
      mainScrollViewRef.current.scrollTo({ y: 0, animated: false });
    }
    setSelectedThumbnail(1); // Reset thumbnail selection
  }, [productId]);

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
        <Text style={[styles.arrowText, getResponsiveStyle("semiBold", 16)]}>
          ←
        </Text>
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
        <Text style={[styles.arrowText, getResponsiveStyle("semiBold", 16)]}>
          →
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        ref={mainScrollViewRef}
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
            </View>
            {renderThumbnails()}
          </View>

          {/* Right Section - Product Details */}
          <View style={styles.rightSection}>
            <Text
              style={[styles.productTitle, getResponsiveStyle("semiBold", 32)]}
            >
              {productId || productData.title}
            </Text>

            <View style={styles.shippingBanner}>
              <Text
                style={[
                  styles.shippingBannerText,
                  getResponsiveStyle("medium", 12),
                ]}
              >
                {productData.shippingBanner}
              </Text>
            </View>

            <View style={styles.pricingContainer}>
              <Text
                style={[
                  styles.originalPrice,
                  getResponsiveStyle("regular", 12),
                ]}
              >
                {productData.originalPrice}
              </Text>
              <View style={styles.priceRow}>
                <Text
                  style={[
                    styles.currentPrice,
                    getResponsiveStyle("semiBold", 24),
                  ]}
                >
                  {productData.price}
                </Text>
                <Text
                  style={[
                    styles.perTestText,
                    getResponsiveStyle("regular", 14),
                  ]}
                >
                  {productData.perTest}
                </Text>
              </View>
            </View>

            <View style={styles.bloodCollectionBanner}>
              <Text
                style={[
                  styles.bloodCollectionBannerText,
                  getResponsiveStyle("medium", 12),
                ]}
              >
                {productData.bloodCollection}
              </Text>
            </View>

            <Text
              style={[styles.description, getResponsiveStyle("regular", 14)]}
            >
              {productData.description}
            </Text>

            <View style={styles.featuresContainer}>
              <Text
                style={[
                  styles.featuresTitle,
                  getResponsiveStyle("regular", 16),
                ]}
              >
                With the Personal Plan, you can:
              </Text>
              {productData.features.map((feature, index) => (
                <View key={index} style={styles.featureItem}>
                  <Text
                    style={[styles.bulletPoint, getResponsiveStyle("bold", 20)]}
                  >
                    •
                  </Text>
                  <Text
                    style={[
                      styles.featureText,
                      getResponsiveStyle("regular", 14),
                    ]}
                  >
                    {feature}
                  </Text>
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

  // Product Details Styles
  productTitle: {
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
    color: semantic.interactive.primary,
    textAlign: "center",
  },
  pricingContainer: {
    marginBottom: 10,
  },
  originalPrice: {
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
    color: semantic.text.primary,
  },
  perTestText: {
    color: semantic.text.secondary,
  },
  description: {
    color: semantic.text.primary,
    lineHeight: 24,
    marginBottom: 10,
  },
  featuresContainer: {
    marginBottom: 32,
  },
  featuresTitle: {
    color: semantic.text.primary,
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  bulletPoint: {
    color: semantic.text.primary,
    marginRight: 8,
    lineHeight: 20,
  },
  featureText: {
    flex: 1,
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
  },
});

export default ProductDetailsScreen;
