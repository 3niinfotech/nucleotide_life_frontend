import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Carousel, PrimaryButton } from '../index';
import { semantic, status } from '../../utils/colors';
import { poppinsWeights } from '../../utils/fonts';

const HeroCarousel: React.FC = React.memo(() => {
  const slides = useMemo(
    () => [
      <View key="slide-hero-1" style={styles.heroContainer}>
        <View style={styles.heroContent}>
          <View style={styles.heroTextBlock}>
            <View style={styles.heroBadge}>
              <View style={styles.heroBadgeDot} />
              <Text style={styles.heroBadgeText}>Available Now</Text>
            </View>
            <Text style={styles.heroHeadingLine}>
              Start Your DNA Journey with Genetic One by Nucleotide
            </Text>
            {/* <Text style={styles.heroHeadingLine}>with Genetic One by</Text>
            <Text style={styles.heroHeadingBrand}>Nucleotide</Text> */}
            <Text style={styles.heroDescription}>
              Our flagship test that decodes your DNA to reveal disease risk,
              drug response, vitamin needs, and cognitive insights.
            </Text>
            <View style={styles.bulletRow}>
              <View style={styles.bulletCol}>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>
                    600+ diseases across 19 categories
                  </Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>
                    635+ drug metabolism insights
                  </Text>
                </View>
              </View>
              <View style={styles.bulletCol}>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>
                    Vitamin profiling for essential nutrients
                  </Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>
                    IQ & Intelligence markers across cognition
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.heroActions}>
              <PrimaryButton label="Order Genetic One" />
            </View>
          </View>
          <View style={styles.heroMedia}>
            <View style={styles.mediaPlaceholder} />
          </View>
        </View>
      </View>,
      <View key="slide-hero-2" style={styles.heroContainer}>
        <View style={styles.heroContent}>
          <View style={styles.heroTextBlock}>
            <View style={styles.heroBadge}>
              <View style={styles.heroBadgeDot} />
              <Text style={styles.heroBadgeText}>Available Now</Text>
            </View>
            <Text style={styles.heroHeadingLine}>Start Your DNA Journey</Text>
            <Text style={styles.heroHeadingLine}>with Genetic One by</Text>
            <Text style={styles.heroHeadingBrand}>Nucleotide</Text>
            <Text style={styles.heroDescription}>
              Our flagship test that decodes your DNA to reveal disease risk,
              drug response, vitamin needs, and cognitive insights.
            </Text>
            <View style={styles.bulletRow}>
              <View style={styles.bulletCol}>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>
                    600+ diseases across 19 categories
                  </Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>
                    635+ drug metabolism insights
                  </Text>
                </View>
              </View>
              <View style={styles.bulletCol}>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>
                    Vitamin profiling for essential nutrients
                  </Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>
                    IQ & Intelligence markers across cognition
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.heroActions}>
              <PrimaryButton label="Order Genetic One" />
            </View>
          </View>
          <View style={styles.heroMedia}>
            <View style={styles.mediaPlaceholder} />
          </View>
        </View>
      </View>,
      <View key="slide-hero-3" style={styles.heroContainer}>
        <View style={styles.heroContent}>
          <View style={styles.heroTextBlock}>
            <View style={styles.heroBadge}>
              <View style={styles.heroBadgeDot} />
              <Text style={styles.heroBadgeText}>Available Now</Text>
            </View>
            <Text style={styles.heroHeadingLine}>Start Your DNA Journey</Text>
            <Text style={styles.heroHeadingLine}>with Genetic One by</Text>
            <Text style={styles.heroHeadingBrand}>Nucleotide</Text>
            <Text style={styles.heroDescription}>
              Our flagship test that decodes your DNA to reveal disease risk,
              drug response, vitamin needs, and cognitive insights.
            </Text>
            <View style={styles.bulletRow}>
              <View style={styles.bulletCol}>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>
                    600+ diseases across 19 categories
                  </Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>
                    635+ drug metabolism insights
                  </Text>
                </View>
              </View>
              <View style={styles.bulletCol}>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>
                    Vitamin profiling for essential nutrients
                  </Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>
                    IQ & Intelligence markers across cognition
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.heroActions}>
              <PrimaryButton label="Order Genetic One" />
            </View>
          </View>
          <View style={styles.heroMedia}>
            <View style={styles.mediaPlaceholder} />
          </View>
        </View>
      </View>,
    ],
    [],
  );

  return (
    <View style={styles.fullBleed}>
      <Carousel autoPlayMs={3000} rounded={true} slides={slides} />
    </View>
  );
});

const styles = StyleSheet.create({
  fullBleed: {
    marginHorizontal: 0,
  },
  heroContainer: {
    paddingVertical: 50,
    width: '70%',
    height: '100%',
    alignSelf: 'center',
  },
  heroContent: {
    flexDirection: 'row',
    gap: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heroTextBlock: {
    flex: 1,
  },
  heroMedia: {
    flex: 1,
    alignItems: 'center',
  },
  mediaPlaceholder: {
    height: 300,
    width: '80%',
    borderRadius: 20,
    backgroundColor: semantic.background.tertiary,
    borderWidth: 1,
    borderColor: semantic.border.light,
  },
  heroHeadingLine: {
    color: semantic.text.primary,
    fontSize: 48,
    fontFamily: poppinsWeights.semiBold,
    lineHeight: 56,
  },
  heroHeadingBrand: {
    fontSize: 48,
    fontFamily: poppinsWeights.semiBold,
    color: semantic.text.primary,
    marginBottom: 8,
  },
  heroDescription: {
    fontSize: 16,
    fontFamily: poppinsWeights.regular,
    color: semantic.text.secondary,
    marginTop: 8,
  },
  heroActions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 25,
    marginBottom: 25,
  },
  heroBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: status.success + '1A', // 10% opacity
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: 12,
  },
  heroBadgeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: status.success,
    marginRight: 8,
  },
  heroBadgeText: {
    fontSize: 12,
    color: status.success,
    fontFamily: poppinsWeights.medium,
  },
  bulletRow: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 12,
  },
  bulletCol: {
    flex: 1,
    gap: 8,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bulletDot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.8)',
    marginRight: 8,
    textAlignVertical: 'center',
  },
  bulletText: {
    fontSize: 14,
    fontFamily: poppinsWeights.regular,
    color: semantic.text.secondary,
  },
});

export default HeroCarousel;
