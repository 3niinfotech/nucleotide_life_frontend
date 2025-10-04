import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Section, PrimaryButton } from "..";
import { semantic, special } from "../../utils/colors";
import { useResponsiveFontUtils } from "../../hooks";
import { Images } from "../../utils/imageUtil";

const HowItWorksSection: React.FC<{ isBackground?: boolean }> = ({
  isBackground = false,
}) => {
  const { getResponsiveStyle, getScreenSizeCategory } =
    useResponsiveFontUtils();
  const isSmallScreen = ["smallMobile", "mobile", "largeMobile"].includes(
    getScreenSizeCategory()
  );

  return (
    <Section
      title="How It Works?"
      subtitle="From Saliva Sample to Interactive Health Insights"
      style={isBackground ? styles.sectionBg : undefined}
    >
      <View
        style={[styles.hiwGrid, isSmallScreen && styles.smallScreenHiwGrid]}
      >
        <View
          style={[styles.hiwRow, isSmallScreen && styles.smallScreenHiwRow]}
        >
          <View
            style={[styles.hiwCard, isSmallScreen && styles.smallScreenHiwCard]}
          >
            <View style={styles.hiwHeader}>
              <View style={styles.hiwStepBadge}>
                <Text
                  style={[
                    styles.hiwStepText,
                    getResponsiveStyle("bold", isSmallScreen ? 24 : 32),
                  ]}
                >
                  1
                </Text>
              </View>
              <Text
                style={[
                  styles.hiwTitle,
                  getResponsiveStyle("semiBold", isSmallScreen ? 20 : 32),
                ]}
              >
                Place Your Order
              </Text>
            </View>
            <View style={[styles.hiwBullets, styles.hiwBulletsSpaced]}>
              <Text
                style={[
                  styles.hiwBullet,
                  getResponsiveStyle("regular", isSmallScreen ? 14 : 18),
                ]}
              >
                • Purchase the Genetic One package from our website.
              </Text>
              <Text
                style={[
                  styles.hiwBullet,
                  getResponsiveStyle("regular", isSmallScreen ? 14 : 18),
                ]}
              >
                • Provide accurate address and contact details for smooth
                coordination.
              </Text>
              <Text
                style={[
                  styles.hiwBullet,
                  getResponsiveStyle("regular", isSmallScreen ? 14 : 18),
                ]}
              >
                • Complete the required form with all information needed for
                home sample collection.
              </Text>
            </View>
            <View style={styles.hiwImageArea}>
              <Image
                source={Images.howItWorks1}
                style={styles.hiwImage}
                // resizeMode="contain"
              />
            </View>
          </View>

          <View style={styles.hiwCard}>
            <View style={styles.hiwHeader}>
              <View style={styles.hiwStepBadge}>
                <Text
                  style={[styles.hiwStepText, getResponsiveStyle("bold", 32)]}
                >
                  2
                </Text>
              </View>
              <Text
                style={[styles.hiwTitle, getResponsiveStyle("semiBold", 32)]}
              >
                Blood Sample Collection
              </Text>
            </View>
            <View style={[styles.hiwBullets, styles.hiwBulletsSpaced]}>
              <Text
                style={[styles.hiwBullet, getResponsiveStyle("regular", 18)]}
              >
                • Our certified partner technician visits your home for sample
                collection.
              </Text>
              <Text
                style={[styles.hiwBullet, getResponsiveStyle("regular", 18)]}
              >
                • The process is safe, hygienic, and handled with utmost care.
              </Text>
              <Text
                style={[styles.hiwBullet, getResponsiveStyle("regular", 18)]}
              >
                • Quick and convenient, completed in just a few minutes.
              </Text>
            </View>
            <View style={styles.hiwImageArea}>
              <Image source={Images.howItWorks2} style={styles.hiwImage} />
            </View>
          </View>
        </View>

        <View style={styles.hiwRow}>
          <View style={styles.hiwCard}>
            <View style={styles.hiwHeader}>
              <View style={styles.hiwStepBadge}>
                <Text
                  style={[styles.hiwStepText, getResponsiveStyle("bold", 32)]}
                >
                  3
                </Text>
              </View>
              <Text
                style={[styles.hiwTitle, getResponsiveStyle("semiBold", 32)]}
              >
                Sequence & Decode
              </Text>
            </View>
            <View style={[styles.hiwBullets, styles.hiwBulletsSpaced]}>
              <Text
                style={[styles.hiwBullet, getResponsiveStyle("regular", 18)]}
              >
                • Sample processed in a NABL‑accredited lab.
              </Text>
              <Text
                style={[styles.hiwBullet, getResponsiveStyle("regular", 18)]}
              >
                • Nucleotide Engine analyzes 600+ diseases, 635+ drug responses,
                vitamins, and IQ traits.
              </Text>
              <Text
                style={[styles.hiwBullet, getResponsiveStyle("regular", 18)]}
              >
                • Data is encrypted end‑to‑end.
              </Text>
            </View>
            <View style={styles.hiwImageArea}>
              <Image source={Images.howItWorks3} style={styles.hiwImage} />
            </View>
          </View>

          <View style={styles.hiwCard}>
            <View style={styles.hiwHeader}>
              <View style={styles.hiwStepBadge}>
                <Text
                  style={[styles.hiwStepText, getResponsiveStyle("bold", 32)]}
                >
                  4
                </Text>
              </View>
              <Text
                style={[styles.hiwTitle, getResponsiveStyle("semiBold", 32)]}
              >
                Explore Your Interactive Dashboard
              </Text>
            </View>
            <View style={[styles.hiwBullets, styles.hiwBulletsSpaced]}>
              <Text
                style={[styles.hiwBullet, getResponsiveStyle("regular", 18)]}
              >
                • Access your results anytime on web or mobile app.
              </Text>
              <Text
                style={[styles.hiwBullet, getResponsiveStyle("regular", 18)]}
              >
                • Browse categories: Disease Risks, Drug Responses, Vitamin
                Profiling, IQ & Cognition.
              </Text>
              <Text
                style={[styles.hiwBullet, getResponsiveStyle("regular", 18)]}
              >
                • Each report includes risk scores, gene insights, and
                personalized guidance.
              </Text>
              <Text
                style={[styles.hiwBullet, getResponsiveStyle("regular", 18)]}
              >
                • Lifetime access — new science = new insights.
              </Text>
            </View>
            <View style={styles.hiwImageArea}>
              <Image source={Images.howItWorks4} style={styles.hiwImage} />
            </View>
          </View>
        </View>
      </View>
    </Section>
  );
};

const styles = StyleSheet.create({
  sectionBg: {
    backgroundColor: special.purpleBg,
  },
  hiwGrid: {
    width: "70%",
    alignSelf: "center",
    gap: 16,
  },
  hiwRow: {
    flexDirection: "row",
    gap: 16,
  },
  hiwCard: {
    flex: 1,
    backgroundColor: "rgba(136,107,249,0.04)",
    borderColor: semantic.border.light,
    borderRadius: 12,
  },
  hiwHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 8,
    padding: 16,
  },
  hiwStepBadge: {
    backgroundColor: "rgba(136,107,249,0.12)",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  hiwStepText: {
    color: semantic.interactive.primary,
  },
  hiwTitle: {
    color: semantic.text.primary,
  },
  hiwBullets: {
    gap: 6,
    marginLeft: 16,
  },
  hiwBulletsSpaced: {
    marginBottom: 25,
  },
  hiwBullet: {
    color: semantic.text.secondary,
  },
  hiwImageArea: {
    height: 400,
    backgroundColor: semantic.background.tertiary,
    borderColor: semantic.border.light,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: "auto",
  },
  hiwImage: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  smallScreenHiwGrid: {
    width: "100%",
    paddingHorizontal: 16,
  },
  smallScreenHiwRow: {
    flexDirection: "column",
    gap: 12,
  },
  smallScreenHiwCard: {
    width: "100%",
  },
});

export default HowItWorksSection;
