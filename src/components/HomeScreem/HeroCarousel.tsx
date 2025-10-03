import React, { useMemo } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Carousel, PrimaryButton } from "../index";
import { semantic, status } from "../../utils/colors";
import { poppinsWeights } from "../../utils/fonts";
import {
  SliderGeneticOne,
  SliderGeneticOnePlus,
  SliderGutMicrobiome,
  SliderBloodUrineMarkers,
} from "../../utils/imageUtil";

const HeroCarousel: React.FC = React.memo(() => {
  const slides = useMemo(
    () => [
      <View key="slide-hero-1" style={styles.heroContainer}>
        <View style={styles.heroContent}>
          <View style={styles.heroTextBlock}>
            <View style={styles.heroBadge}>
              <View style={styles.heroBadgeDot} />
              <Text style={styles.heroBadgeText}>
                Genetic One (Available Now)
              </Text>
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
                    635+ drug metabolism insights (Pharmacogenomics)
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
            <Image source={SliderGeneticOne} style={styles.heroImage} />
          </View>
        </View>
      </View>,
      <View key="slide-hero-2" style={styles.heroContainer}>
        <View style={styles.heroContent}>
          <View style={styles.heroTextBlock}>
            <View
              style={[
                styles.heroBadge,
                { backgroundColor: semantic.interactive.orange + "2A" },
              ]}
            >
              <View style={styles.heroBadgeOrangeDot} />
              <Text
                style={[
                  styles.heroBadgeText,
                  { color: semantic.interactive.orange },
                ]}
              >
                Genetic One Plus (Coming Soon)
              </Text>
            </View>
            <Text style={styles.heroHeadingLine}>Full Genome. Full Power</Text>
            <Text style={styles.heroDescription}>
              Genetic One Plus is our advanced whole-genome sequencing service
              that covers every letter of your DNA for unmatched precision.
            </Text>
            <View style={styles.bulletRow}>
              <View style={styles.bulletCol}>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>
                    Entire genome decoded - 3+ billion base pairs
                  </Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>
                    Covers rare & complex genetic conditions
                  </Text>
                </View>
              </View>
              <View style={styles.bulletCol}>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>
                    Lifetime re-analysis as science evolves
                  </Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>
                    Highest resolution for clinical-grade insights
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.heroActions}>
              <PrimaryButton label="Order Genetic One Today" />
            </View>
          </View>
          <View style={styles.heroMedia}>
            <Image source={SliderGeneticOnePlus} style={styles.heroImage} />
          </View>
        </View>
      </View>,
      <View key="slide-hero-3" style={styles.heroContainer}>
        <View style={styles.heroContent}>
          <View style={styles.heroTextBlock}>
            <View
              style={[
                styles.heroBadge,
                { backgroundColor: semantic.interactive.orange + "2A" },
              ]}
            >
              <View style={styles.heroBadgeOrangeDot} />
              <Text
                style={[
                  styles.heroBadgeText,
                  { color: semantic.interactive.orange },
                ]}
              >
                Gut Microbiome (Coming Soon)
              </Text>
            </View>
            <Text style={styles.heroHeadingLine}>
              Your Gut, Your Second Brain
            </Text>
            {/* <Text style={styles.heroHeadingLine}>with Genetic One by</Text>
            <Text style={styles.heroHeadingBrand}>Nucleotide</Text> */}
            <Text style={styles.heroDescription}>
              Discover how your microbiome impacts digestion, immunity, mood,
              and chronic disease risk.
            </Text>
            <View style={styles.bulletRow}>
              <View style={styles.bulletCol}>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>
                    Gut diversity & barrier integrity
                  </Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>
                    Dysbiosis detection with probiotic/prebiotic guidance
                  </Text>
                </View>
              </View>
              <View style={styles.bulletCol}>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>
                    SCFA (short-chain fatty acids) potential
                  </Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>
                    - Links to mood, digestion, and inflammation
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.heroActions}>
              <PrimaryButton label="Order Genetic One Today" />
            </View>
          </View>
          <View style={styles.heroMedia}>
            <Image source={SliderGutMicrobiome} style={styles.heroImage} />
          </View>
        </View>
      </View>,
      <View key="slide-hero-4" style={styles.heroContainer}>
        <View style={styles.heroContent}>
          <View style={styles.heroTextBlock}>
            <View
              style={[
                styles.heroBadge,
                { backgroundColor: semantic.interactive.orange + "2A" },
              ]}
            >
              <View style={styles.heroBadgeOrangeDot} />
              <Text
                style={[
                  styles.heroBadgeText,
                  { color: semantic.interactive.orange },
                ]}
              >
                Blood & Urine Biomarkers (Coming Soon)
              </Text>
            </View>
            <Text style={styles.heroHeadingLine}>
              Decode Your Body’s Daily Signals
            </Text>
            {/* <Text style={styles.heroHeadingLine}>with Genetic One by</Text>
          <Text style={styles.heroHeadingBrand}>Nucleotide</Text> */}
            <Text style={styles.heroDescription}>
              Track key biomarkers for metabolic health, inflammation, and
              nutrient balance.
            </Text>
            <View style={styles.bulletRow}>
              <View style={styles.bulletCol}>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>
                    Lipids, glucose & hormonal health
                  </Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>
                    Vitamin & micronutrient status
                  </Text>
                </View>
              </View>
              <View style={styles.bulletCol}>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>
                    Oxidative stress & inflammation markers
                  </Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>
                    Integrates with lifestyle and activity data
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.heroActions}>
              <PrimaryButton label="Order Genetic One Today" />
            </View>
          </View>
          <View style={styles.heroMedia}>
            <Image source={SliderBloodUrineMarkers} style={styles.heroImage} />
          </View>
        </View>
      </View>,
    ],
    []
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
    width: "70%",
    height: "100%",
    alignSelf: "center",
  },
  heroContent: {
    flexDirection: "row",
    gap: 24,
    alignItems: "center",
    justifyContent: "space-between",
  },
  heroTextBlock: {
    flex: 1,
  },
  heroMedia: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heroImage: {
    height: 500,
    width: "100%",
    borderRadius: 24,
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
    flexDirection: "row",
    gap: 12,
    marginTop: 25,
    marginBottom: 25,
  },
  heroBadge: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: status.success + "1A", // 10% opacity
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
  heroBadgeOrangeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: semantic.interactive.orange,
    marginRight: 8,
  },
  heroBadgeText: {
    fontSize: 12,
    color: status.success,
    fontFamily: poppinsWeights.medium,
  },
  bulletRow: {
    flexDirection: "row",
    gap: 16,
    marginTop: 12,
  },
  bulletCol: {
    flex: 1,
    gap: 8,
  },
  bulletItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  bulletDot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: "rgba(0,0,0,0.8)",
    marginRight: 8,
    textAlignVertical: "center",
  },
  bulletText: {
    fontSize: 14,
    fontFamily: poppinsWeights.regular,
    color: semantic.text.secondary,
  },
});

export default HeroCarousel;
