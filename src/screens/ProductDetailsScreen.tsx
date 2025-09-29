import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useAppSelector } from '../hooks';
import { semantic, primary } from '../utils/colors';
import { poppinsWeights } from '../utils/fonts';
import PrimaryButton from '../components/shared/PrimaryButton';
import { NavigationHeader } from '../components';

// Mock data for the product
const productData = {
  title: '1 Genetic One – Personal Plan',
  originalPrice: '₹32,000',
  price: '₹22,000',
  perTest: '/Per Test',
  description:
    'Unlock the secrets of your DNA with our Personal Plan. Get clear, science-backed insights into your health, traits, and wellness tailored just for you',
  features: [
    'Discover your unique genetic profile',
    'Get personalized health and lifestyle insights',
    'Learn about nutrition and fitness compatibility',
    'Explore your ancestry and heritage',
  ],
  shippingBanner: 'Free Shipping & Easy Returns',
};

// Mock app interface data
const appSections = [
  {
    title: 'Diet & Lifestyle',
    color: '#E3F2FD',
    items: [
      { label: 'NEW Diet', icon: '👤', isNew: true },
      { label: 'NEW Nutrient', icon: '🍃', isNew: true },
      { label: 'Well-Being', icon: '🧘', isNew: false },
      { label: 'Stress & Sleep', icon: '😴', isNew: false },
      { label: 'Pollution', icon: '🏭', isNew: false },
      { label: 'NEW Skin', icon: '👤', isNew: true },
    ],
  },
  {
    title: 'Talents & Sports Performance',
    color: '#FFF9C4',
    items: [
      { label: 'Sports & Fitness', icon: '🏃', isNew: false },
      { label: 'Success Traits', icon: '🏆', isNew: false },
      { label: 'Music & Dance', icon: '🎵', isNew: false },
    ],
  },
  {
    title: 'Discover Your Origins',
    color: '#F3E5F5',
    items: [],
  },
];

// Thumbnail data
const thumbnails = [
  { id: 1, type: 'phone', label: 'App Interface' },
  { id: 2, type: 'document', label: 'Report' },
  { id: 3, type: 'product', label: 'Product' },
  { id: 4, type: 'collection', label: 'Collection' },
];

const ProductDetailsScreen: React.FC = () => {
  const [selectedThumbnail, setSelectedThumbnail] = useState(1);
  const { productId } = useAppSelector((state: any) => state.navigation);

  const renderAppInterface = () => (
    <View style={styles.phoneContainer}>
      <View style={styles.phone}>
        <View style={styles.phoneScreen}>
          <ScrollView
            style={styles.appContent}
            showsVerticalScrollIndicator={false}
          >
            {appSections.map((section, sectionIndex) => (
              <View key={sectionIndex} style={styles.appSection}>
                <Text style={styles.appSectionTitle}>{section.title}</Text>
                <View style={styles.appButtonsGrid}>
                  {section.items.map((item, itemIndex) => (
                    <View
                      key={itemIndex}
                      style={[
                        styles.appButton,
                        { backgroundColor: section.color },
                      ]}
                    >
                      <Text style={styles.appButtonIcon}>{item.icon}</Text>
                      <Text style={styles.appButtonText}>{item.label}</Text>
                      {item.isNew && (
                        <View style={styles.newBadge}>
                          <Text style={styles.newBadgeText}>NEW</Text>
                        </View>
                      )}
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );

  const renderProductBox = () => (
    <View style={styles.productBoxContainer}>
      <View style={styles.productBox}>
        <View style={styles.productBoxHeader}>
          <Text style={styles.productBoxTitle}>Circle PREMIUM</Text>
          <Text style={styles.productBoxSubtitle}>DNA COLLECTION KIT</Text>
        </View>
        <View style={styles.productBoxDesign}>
          <View style={styles.circularDesign} />
        </View>
      </View>
    </View>
  );

  const renderThumbnails = () => (
    <View style={styles.thumbnailsContainer}>
      <TouchableOpacity style={styles.thumbnailArrow}>
        <Text style={styles.thumbnailArrowText}>‹</Text>
      </TouchableOpacity>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.thumbnailsScroll}
      >
        {thumbnails.map(thumb => (
          <TouchableOpacity
            key={thumb.id}
            style={[
              styles.thumbnail,
              selectedThumbnail === thumb.id && styles.selectedThumbnail,
            ]}
            onPress={() => setSelectedThumbnail(thumb.id)}
          >
            <View style={styles.thumbnailContent}>
              {thumb.type === 'phone' && renderAppInterface()}
              {thumb.type === 'document' && (
                <View style={styles.documentThumbnail}>
                  <Text style={styles.documentText}>📄</Text>
                </View>
              )}
              {thumb.type === 'product' && (
                <View style={styles.productThumbnail}>
                  <View style={styles.miniProductBox} />
                </View>
              )}
              {thumb.type === 'collection' && (
                <View style={styles.collectionThumbnail}>
                  <Text style={styles.collectionText}>🧬</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.thumbnailArrow}>
        <Text style={styles.thumbnailArrowText}>›</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <NavigationHeader title="Product Details" />

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          {/* Left Section - Product Visualization */}
          <View style={styles.leftSection}>
            {renderProductBox()}
            {renderAppInterface()}
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
              />
              <PrimaryButton label="Buy Now" style={styles.buyNowButton} />
            </View>
          </View>
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
  scrollContainer: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    padding: 20,
    gap: 40,
  },
  leftSection: {
    flex: 1,
    alignItems: 'center',
  },
  rightSection: {
    flex: 1,
    paddingTop: 20,
  },

  // Product Box Styles
  productBoxContainer: {
    marginBottom: 20,
  },
  productBox: {
    width: 200,
    height: 280,
    backgroundColor: '#2C2C2C',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productBoxHeader: {
    alignItems: 'center',
  },
  productBoxTitle: {
    fontSize: 18,
    fontFamily: poppinsWeights.bold,
    color: '#FFD700',
    textAlign: 'center',
  },
  productBoxSubtitle: {
    fontSize: 12,
    fontFamily: poppinsWeights.regular,
    color: '#FFD700',
    textAlign: 'center',
    marginTop: 4,
  },
  productBoxDesign: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularDesign: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFD700',
    opacity: 0.3,
  },

  // Phone Styles
  phoneContainer: {
    marginBottom: 20,
  },
  phone: {
    width: 180,
    height: 320,
    backgroundColor: '#000',
    borderRadius: 20,
    padding: 8,
  },
  phoneScreen: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 16,
    overflow: 'hidden',
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  appButton: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  appButtonIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  appButtonText: {
    fontSize: 12,
    fontFamily: poppinsWeights.medium,
    color: semantic.text.primary,
    textAlign: 'center',
  },
  newBadge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: '#1976D2',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
  newBadgeText: {
    fontSize: 8,
    fontFamily: poppinsWeights.bold,
    color: '#FFF',
  },

  // Thumbnails Styles
  thumbnailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  thumbnailArrow: {
    width: 32,
    height: 32,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
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
    width: 60,
    height: 60,
    marginRight: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    overflow: 'hidden',
  },
  selectedThumbnail: {
    borderColor: primary.purple,
  },
  thumbnailContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  documentThumbnail: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  documentText: {
    fontSize: 24,
  },
  productThumbnail: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2C2C2C',
  },
  miniProductBox: {
    width: 20,
    height: 20,
    backgroundColor: '#FFD700',
    borderRadius: 4,
  },
  collectionThumbnail: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8F5E8',
  },
  collectionText: {
    fontSize: 24,
  },

  // Product Details Styles
  productTitle: {
    fontSize: 28,
    fontFamily: poppinsWeights.bold,
    color: semantic.text.primary,
    marginBottom: 16,
  },
  shippingBanner: {
    backgroundColor: '#E8F5E8',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 20,
  },
  shippingBannerText: {
    fontSize: 14,
    fontFamily: poppinsWeights.medium,
    color: '#2E7D32',
    textAlign: 'center',
  },
  pricingContainer: {
    marginBottom: 20,
  },
  originalPrice: {
    fontSize: 16,
    fontFamily: poppinsWeights.regular,
    color: semantic.text.light,
    textDecorationLine: 'line-through',
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8,
  },
  currentPrice: {
    fontSize: 32,
    fontFamily: poppinsWeights.bold,
    color: semantic.text.primary,
  },
  perTestText: {
    fontSize: 16,
    fontFamily: poppinsWeights.regular,
    color: semantic.text.secondary,
  },
  description: {
    fontSize: 16,
    fontFamily: poppinsWeights.regular,
    color: semantic.text.primary,
    lineHeight: 24,
    marginBottom: 24,
  },
  featuresContainer: {
    marginBottom: 32,
  },
  featuresTitle: {
    fontSize: 18,
    fontFamily: poppinsWeights.semiBold,
    color: semantic.text.primary,
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bulletPoint: {
    fontSize: 16,
    color: semantic.text.primary,
    marginRight: 8,
    marginTop: 2,
  },
  featureText: {
    flex: 1,
    fontSize: 16,
    fontFamily: poppinsWeights.regular,
    color: semantic.text.primary,
    lineHeight: 22,
  },
  buttonContainer: {
    gap: 12,
  },
  addToCartButton: {
    backgroundColor: semantic.background.primary,
    borderWidth: 2,
    borderColor: primary.purple,
  },
  buyNowButton: {
    backgroundColor: primary.purple,
  },
});

export default ProductDetailsScreen;
