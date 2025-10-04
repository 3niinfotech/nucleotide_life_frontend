import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Section, PrimaryButton } from "..";
import { semantic } from "../../utils/colors";
import { Images } from "../../utils/imageUtil";
import {
  IcGeneticDisease,
  IcGeneticPill,
  IcGeneticPersonalized,
  IcGeneticVitamin,
  IcGeneticCognitive,
  IcGeneticFutureProof,
} from "../../utils/iconUtil";
import { useResponsiveFontUtils } from "../../hooks";

const WhatYouGetSection: React.FC = () => {
  const { getResponsiveStyle, getScreenSizeCategory } =
    useResponsiveFontUtils();
  const isSmallScreen = ["smallMobile", "mobile", "largeMobile"].includes(
    getScreenSizeCategory()
  );

  return (
    <Section
      title="What You Get with Genetic One"
      subtitle="A comprehensive genetic analysis that provides actionable insights across multiple health dimensions"
      style={styles.sectionBg}
    >
      <View
        style={[
          styles.featuresShowcase,
          isSmallScreen && styles.smallScreenFeaturesShowcase,
        ]}
      >
        <View style={styles.featuresCol}>
          <View style={styles.featureRowDivider}>
            <View style={styles.featureItem}>
              <View style={styles.featureRow}>
                <View style={styles.featureIcon}>
                  <IcGeneticDisease width={36} height={36} />
                </View>
                <Text
                  style={[
                    styles.featureTitle,
                    getResponsiveStyle("semiBold", isSmallScreen ? 16 : 20),
                  ]}
                >
                  400+ Disease Risk Insights
                </Text>
              </View>
              <Text
                style={[
                  styles.featureDescription,
                  getResponsiveStyle("regular", isSmallScreen ? 14 : 16),
                ]}
              >
                Across 19 medical categories including Cardio, Neuro, Endocrine,
                and more.
              </Text>
            </View>
          </View>
          <View style={styles.featureRowDivider}>
            <View style={styles.featureItem}>
              <View style={styles.featureRow}>
                <View style={styles.featureIcon}>
                  <IcGeneticPill width={36} height={36} />
                </View>
                <Text
                  style={[
                    styles.featureTitle,
                    getResponsiveStyle("semiBold", isSmallScreen ? 16 : 20),
                  ]}
                >
                  635+ Drug Response Reports
                </Text>
              </View>
              <Text
                style={[
                  styles.featureDescription,
                  getResponsiveStyle("regular", isSmallScreen ? 14 : 16),
                ]}
              >
                Pharmacogenomic guidance for safer, personalized prescriptions.
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.featureItem}>
              <View style={styles.featureRow}>
                <View style={styles.featureIcon}>
                  <IcGeneticPersonalized width={36} height={36} />
                </View>
                <Text
                  style={[
                    styles.featureTitle,
                    getResponsiveStyle("semiBold", 20),
                  ]}
                >
                  Personalized DNA Dashboard
                </Text>
              </View>
              <Text
                style={[
                  styles.featureDescription,
                  getResponsiveStyle("regular", 16),
                ]}
              >
                Interactive portal with seamless navigation + clinician-ready,
                detailed PDF reports
              </Text>
            </View>
          </View>
        </View>

        {!isSmallScreen && (
          <View style={styles.featuresCenter}>
            <View style={styles.mobilePreview}>
              <Image
                source={Images.geneticOneImage}
                style={styles.previewImage}
                // resizeMode="contain"
              />
            </View>
            <View style={styles.centerCta}>
              <PrimaryButton
                label="View Sample Report"
                style={styles.inlineButton}
              />
            </View>
          </View>
        )}

        <View style={styles.featuresCol}>
          <View style={styles.featureRowDivider}>
            <View style={styles.featureItem}>
              <View style={styles.featureRow}>
                <View style={styles.featureIcon}>
                  <IcGeneticVitamin width={36} height={36} />
                </View>
                <Text
                  style={[
                    styles.featureTitle,
                    getResponsiveStyle("semiBold", 20),
                  ]}
                >
                  Vitamin Profiling
                </Text>
              </View>
              <Text
                style={[
                  styles.featureDescription,
                  getResponsiveStyle("regular", 16),
                ]}
              >
                Genetic needs for Vitamin D, B6, B9, B12, and C with diet &
                supplement advice.
              </Text>
            </View>
          </View>
          <View style={styles.featureRowDivider}>
            <View style={styles.featureItem}>
              <View style={styles.featureRow}>
                <View style={styles.featureIcon}>
                  <IcGeneticCognitive width={36} height={36} />
                </View>
                <Text
                  style={[
                    styles.featureTitle,
                    getResponsiveStyle("semiBold", 20),
                  ]}
                >
                  IQ & Cognitive Insights
                </Text>
              </View>
              <Text
                style={[
                  styles.featureDescription,
                  getResponsiveStyle("regular", 16),
                ]}
              >
                Discover your potential in memory, learning, and brain
                development.
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.featureItem}>
              <View style={styles.featureRow}>
                <View style={styles.featureIcon}>
                  <IcGeneticFutureProof width={36} height={36} />
                </View>
                <Text
                  style={[
                    styles.featureTitle,
                    getResponsiveStyle("semiBold", 20),
                  ]}
                >
                  Future–Proof Value
                </Text>
              </View>
              <Text
                style={[
                  styles.featureDescription,
                  getResponsiveStyle("regular", 16),
                ]}
              >
                One DNA sample unlocks lifetime updates & add‑on reports as
                science evolves.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Section>
  );
};

const styles = StyleSheet.create({
  sectionBg: {
    backgroundColor: "rgba(136,107,249,0.04)",
  },
  featuresShowcase: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 24,
    width: "70%",
    alignSelf: "center",
  },
  featuresCol: {
    flex: 1,
  },
  featuresCenter: {
    width: 380,
    alignItems: "center",
  },
  mobilePreview: {
    width: 380,
    height: 440,
    // backgroundColor: semantic.background.tertiary,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: semantic.border.light,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  previewImage: {
    width: "100%",
    height: "100%",
  },
  centerCta: {
    marginTop: 30,
  },
  inlineButton: {
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  featureRowDivider: {
    borderBottomWidth: 1,
    borderBottomColor: semantic.border.light,
    paddingBottom: 30,
    marginBottom: 30,
  },
  featureItem: {
    gap: 8,
  },
  featureRow: {
    flexDirection: "row",
    gap: 12,
    alignItems: "flex-start",
  },
  featureIcon: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  featureTitle: {
    color: semantic.text.primary,
    marginBottom: 0,
    alignSelf: "center",
  },
  featureDescription: {
    color: semantic.text.secondary,
  },
  smallScreenFeaturesShowcase: {
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: 16,
    gap: 16,
  },
});

export default WhatYouGetSection;
