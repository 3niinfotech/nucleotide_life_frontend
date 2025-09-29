import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { MainTabScreenProps } from '../navigation/types';
import { semantic } from '../utils/colors';
import { typography } from '../utils/fonts';
import { NavigationHeader } from '../components';

type Props = MainTabScreenProps<'Products'>;

const ProductsScreen: React.FC<Props> = ({ navigation }) => {
  const products = [
    {
      id: '1',
      name: 'Complete DNA Kit',
      description:
        'Comprehensive genetic analysis including health, ancestry, and traits',
      price: '$199',
      features: [
        'Health Risk Analysis',
        'Drug Response',
        'Ancestry Report',
        'Trait Analysis',
      ],
    },
    {
      id: '2',
      name: 'Health Focus Kit',
      description:
        'Focused on health-related genetic insights and recommendations',
      price: '$149',
      features: [
        'Disease Risk Assessment',
        'Nutritional Needs',
        'Exercise Response',
        'Health Recommendations',
      ],
    },
    {
      id: '3',
      name: 'Ancestry Kit',
      description: 'Discover your genetic heritage and family history',
      price: '$99',
      features: [
        'Ethnicity Breakdown',
        'Family Migration',
        'DNA Matches',
        'Historical Timeline',
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <NavigationHeader title="Products" />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Our Products</Text>
          <Text style={styles.subtitle}>
            Choose the DNA analysis kit that best fits your needs
          </Text>
        </View>

        <View style={styles.productsList}>
          {products.map(product => (
            <View key={product.id} style={styles.productCard}>
              <View style={styles.productHeader}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
              </View>

              <Text style={styles.productDescription}>
                {product.description}
              </Text>

              <View style={styles.featuresList}>
                {product.features.map((feature, index) => (
                  <Text key={index} style={styles.featureItem}>
                    • {feature}
                  </Text>
                ))}
              </View>

              <TouchableOpacity style={styles.orderButton}>
                <Text style={styles.orderButtonText}>Order Now</Text>
              </TouchableOpacity>
            </View>
          ))}
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
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    ...typography.h1,
    color: semantic.text.primary,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    ...typography.body,
    color: semantic.text.secondary,
    textAlign: 'center',
  },
  productsList: {
    gap: 20,
  },
  productCard: {
    backgroundColor: semantic.background.secondary,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: semantic.border.light,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  productName: {
    ...typography.h3,
    color: semantic.text.primary,
    flex: 1,
  },
  productPrice: {
    ...typography.h3,
    color: semantic.interactive.primary,
    fontWeight: 'bold',
  },
  productDescription: {
    ...typography.body,
    color: semantic.text.secondary,
    marginBottom: 16,
    lineHeight: 20,
  },
  featuresList: {
    marginBottom: 20,
  },
  featureItem: {
    ...typography.caption,
    color: semantic.text.secondary,
    marginBottom: 4,
  },
  orderButton: {
    backgroundColor: semantic.interactive.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  orderButtonText: {
    ...typography.button,
    color: semantic.text.inverse,
  },
});

export default ProductsScreen;
