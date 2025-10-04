import React, { useMemo } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Carousel, PrimaryButton } from "../index";
import { semantic, status } from "../../utils/colors";
import { useResponsiveFontUtils } from "../../hooks";
import {
  SliderGeneticOne,
  SliderGeneticOnePlus,
  SliderGutMicrobiome,
  SliderBloodUrineMarkers,
} from "../../utils/imageUtil";

const HeroCarousel: React.FC = React.memo(() => {
  const { getResponsiveStyle, getScreenSizeCategory } =
    useResponsiveFontUtils();
  const isSmallScreen = ["smallMobile", "mobile", "largeMobile"].includes(
    getScreenSizeCategory()
  );

  const slides = useMemo(
    () => [
      <View
        key="slide-hero-1"
        style={[
          styles.heroContainer,
          isSmallScreen && styles.smallScreenHeroContainer,
        ]}
      >
        <View
          style={[
            styles.heroContent,
            isSmallScreen && styles.smallScreenHeroContent,
          ]}
        >
          <View style={styles.heroTextBlock}>
            <View style={styles.heroBadge}>
              <View style={styles.heroBadgeDot} />
              <Text
                style={[
                  styles.heroBadgeText,
                  getResponsiveStyle("medium", isSmallScreen ? 10 : 12),
                ]}
              >
                Genetic One (Available Now)
              </Text>
            </View>
            <Text
              style={[
                styles.heroHeadingLine,
                getResponsiveStyle("semiBold", isSmallScreen ? 24 : 48),
              ]}
            >
              Start Your DNA Journey with Genetic One by Nucleotide
            </Text>
            <Text
              style={[
                styles.heroDescription,
                getResponsiveStyle("regular", isSmallScreen ? 14 : 16),
              ]}
            >
              Our flagship test that decodes your DNA to reveal disease risk,
              drug response, vitamin needs, and cognitive insights.
            </Text>
            <View
              style={[
                styles.bulletRow,
                isSmallScreen && styles.smallScreenBulletRow,
              ]}
            >
              <View style={styles.bulletCol}>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text
                    style={[
                      styles.bulletText,
                      getResponsiveStyle("regular", isSmallScreen ? 12 : 14),
                    ]}
                  >
                    600+ diseases across 19 categories
                  </Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text
                    style={[
                      styles.bulletText,
                      getResponsiveStyle("regular", isSmallScreen ? 12 : 14),
                    ]}
                  >
                    635+ drug metabolism insights (Pharmacogenomics)
                  </Text>
                </View>
              </View>
              <View style={styles.bulletCol}>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text
                    style={[
                      styles.bulletText,
                      getResponsiveStyle("regular", isSmallScreen ? 12 : 14),
                    ]}
                  >
                    Vitamin profiling for essential nutrients
                  </Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text
                    style={[
                      styles.bulletText,
                      getResponsiveStyle("regular", isSmallScreen ? 12 : 14),
                    ]}
                  >
                    IQ & Intelligence markers across cognition
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.heroActions}>
              <PrimaryButton label="Order Genetic One" />
            </View>
          </View>
          {!isSmallScreen && (
            <View style={styles.heroMedia}>
              <Image source={SliderGeneticOne} style={styles.heroImage} />
            </View>
          )}
        </View>
      </View>,
      <View
        key="slide-hero-2"
        style={[
          styles.heroContainer,
          isSmallScreen && styles.smallScreenHeroContainer,
        ]}
      >
        <View
          style={[
            styles.heroContent,
            isSmallScreen && styles.smallScreenHeroContent,
          ]}
        >
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
                  getResponsiveStyle("medium", isSmallScreen ? 10 : 12),
                ]}
              >
                Genetic One Plus (Coming Soon)
              </Text>
            </View>
            <Text
              style={[
                styles.heroHeadingLine,
                getResponsiveStyle("semiBold", isSmallScreen ? 24 : 48),
              ]}
            >
              Full Genome. Full Power
            </Text>
            <Text
              style={[
                styles.heroDescription,
                getResponsiveStyle("regular", isSmallScreen ? 14 : 16),
              ]}
            >
              Genetic One Plus is our advanced whole-genome sequencing service
              that covers every letter of your DNA for unmatched precision.
            </Text>
            <View
              style={[
                styles.bulletRow,
                isSmallScreen && styles.smallScreenBulletRow,
              ]}
            >
              <View style={styles.bulletCol}>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text
                    style={[
                      styles.bulletText,
                      getResponsiveStyle("regular", isSmallScreen ? 12 : 14),
                    ]}
                  >
                    Entire genome decoded - 3+ billion base pairs
                  </Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text
                    style={[
                      styles.bulletText,
                      getResponsiveStyle("regular", isSmallScreen ? 12 : 14),
                    ]}
                  >
                    Covers rare & complex genetic conditions
                  </Text>
                </View>
              </View>
              <View style={styles.bulletCol}>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text
                    style={[
                      styles.bulletText,
                      getResponsiveStyle("regular", isSmallScreen ? 12 : 14),
                    ]}
                  >
                    Lifetime re-analysis as science evolves
                  </Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text
                    style={[
                      styles.bulletText,
                      getResponsiveStyle("regular", isSmallScreen ? 12 : 14),
                    ]}
                  >
                    Highest resolution for clinical-grade insights
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.heroActions}>
              <PrimaryButton label="Order Genetic One Today" />
            </View>
          </View>
          {!isSmallScreen && (
            <View style={styles.heroMedia}>
              <Image source={SliderGeneticOnePlus} style={styles.heroImage} />
            </View>
          )}
        </View>
      </View>,
      <View
        key="slide-hero-3"
        style={[
          styles.heroContainer,
          isSmallScreen && styles.smallScreenHeroContainer,
        ]}
      >
        <View
          style={[
            styles.heroContent,
            isSmallScreen && styles.smallScreenHeroContent,
          ]}
        >
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
                  getResponsiveStyle("medium", 12),
                ]}
              >
                Gut Microbiome (Coming Soon)
              </Text>
            </View>
            <Text
              style={[
                styles.heroHeadingLine,
                getResponsiveStyle("semiBold", 48),
              ]}
            >
              Your Gut, Your Second Brain
            </Text>
            <Text
              style={[
                styles.heroDescription,
                getResponsiveStyle("regular", 16),
              ]}
            >
              Discover how your microbiome impacts digestion, immunity, mood,
              and chronic disease risk.
            </Text>
            <View style={styles.bulletRow}>
              <View style={styles.bulletCol}>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text
                    style={[
                      styles.bulletText,
                      getResponsiveStyle("regular", 14),
                    ]}
                  >
                    Gut diversity & barrier integrity
                  </Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text
                    style={[
                      styles.bulletText,
                      getResponsiveStyle("regular", 14),
                    ]}
                  >
                    Dysbiosis detection with probiotic/prebiotic guidance
                  </Text>
                </View>
              </View>
              <View style={styles.bulletCol}>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text
                    style={[
                      styles.bulletText,
                      getResponsiveStyle("regular", 14),
                    ]}
                  >
                    SCFA (short-chain fatty acids) potential
                  </Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text
                    style={[
                      styles.bulletText,
                      getResponsiveStyle("regular", 14),
                    ]}
                  >
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
      <View
        key="slide-hero-4"
        style={[
          styles.heroContainer,
          isSmallScreen && styles.smallScreenHeroContainer,
        ]}
      >
        <View
          style={[
            styles.heroContent,
            isSmallScreen && styles.smallScreenHeroContent,
          ]}
        >
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
                  getResponsiveStyle("medium", 12),
                ]}
              >
                Blood & Urine Biomarkers (Coming Soon)
              </Text>
            </View>
            <Text
              style={[
                styles.heroHeadingLine,
                getResponsiveStyle("semiBold", 48),
              ]}
            >
              Decode Your Body’s Daily Signals
            </Text>
            <Text
              style={[
                styles.heroDescription,
                getResponsiveStyle("regular", 16),
              ]}
            >
              Track key biomarkers for metabolic health, inflammation, and
              nutrient balance.
            </Text>
            <View style={styles.bulletRow}>
              <View style={styles.bulletCol}>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text
                    style={[
                      styles.bulletText,
                      getResponsiveStyle("regular", 14),
                    ]}
                  >
                    Lipids, glucose & hormonal health
                  </Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text
                    style={[
                      styles.bulletText,
                      getResponsiveStyle("regular", 14),
                    ]}
                  >
                    Vitamin & micronutrient status
                  </Text>
                </View>
              </View>
              <View style={styles.bulletCol}>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text
                    style={[
                      styles.bulletText,
                      getResponsiveStyle("regular", 14),
                    ]}
                  >
                    Oxidative stress & inflammation markers
                  </Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text
                    style={[
                      styles.bulletText,
                      getResponsiveStyle("regular", 14),
                    ]}
                  >
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
  },
  heroHeadingBrand: {
    color: semantic.text.primary,
    marginBottom: 8,
  },
  heroDescription: {
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
    color: status.success,
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
    color: semantic.text.secondary,
  },
  smallScreenHeroContainer: {
    width: "100%",
    paddingVertical: 30,
    paddingHorizontal: 16,
  },
  smallScreenHeroContent: {
    flexDirection: "column",
    gap: 16,
  },
  smallScreenBulletRow: {
    flexDirection: "column",
    gap: 8,
  },
});

export default HeroCarousel;
