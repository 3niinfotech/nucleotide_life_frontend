import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Section, PrimaryButton } from "..";
import { semantic, special } from "../../utils/colors";
import { poppinsWeights } from "../../utils/fonts";
import { Images } from "../../utils/imageUtil";

const HowItWorksSection: React.FC<{ isBackground?: boolean }> = ({
  isBackground = false,
}) => {
  return (
    <Section
      title="How It Works?"
      subtitle="From Saliva Sample to Interactive Health Insights"
      style={isBackground ? styles.sectionBg : undefined}
    >
      <View style={styles.hiwGrid}>
        <View style={styles.hiwRow}>
          <View style={styles.hiwCard}>
            <View style={styles.hiwHeader}>
              <View style={styles.hiwStepBadge}>
                <Text style={styles.hiwStepText}>1</Text>
              </View>
              <Text style={styles.hiwTitle}>Place Your Order</Text>
            </View>
            <View style={[styles.hiwBullets, styles.hiwBulletsSpaced]}>
              <Text style={styles.hiwBullet}>
                • Purchase the Genetic One package from our website.
              </Text>
              <Text style={styles.hiwBullet}>
                • Provide accurate address and contact details for smooth
                coordination.
              </Text>
              <Text style={styles.hiwBullet}>
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
                <Text style={styles.hiwStepText}>2</Text>
              </View>
              <Text style={styles.hiwTitle}>Blood Sample Collection</Text>
            </View>
            <View style={[styles.hiwBullets, styles.hiwBulletsSpaced]}>
              <Text style={styles.hiwBullet}>
                • Our certified partner technician visits your home for sample
                collection.
              </Text>
              <Text style={styles.hiwBullet}>
                • The process is safe, hygienic, and handled with utmost care.
              </Text>
              <Text style={styles.hiwBullet}>
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
                <Text style={styles.hiwStepText}>3</Text>
              </View>
              <Text style={styles.hiwTitle}>Sequence & Decode</Text>
            </View>
            <View style={[styles.hiwBullets, styles.hiwBulletsSpaced]}>
              <Text style={styles.hiwBullet}>
                • Sample processed in a NABL‑accredited lab.
              </Text>
              <Text style={styles.hiwBullet}>
                • Nucleotide Engine analyzes 600+ diseases, 635+ drug responses,
                vitamins, and IQ traits.
              </Text>
              <Text style={styles.hiwBullet}>
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
                <Text style={styles.hiwStepText}>4</Text>
              </View>
              <Text style={styles.hiwTitle}>
                Explore Your Interactive Dashboard
              </Text>
            </View>
            <View style={[styles.hiwBullets, styles.hiwBulletsSpaced]}>
              <Text style={styles.hiwBullet}>
                • Access your results anytime on web or mobile app.
              </Text>
              <Text style={styles.hiwBullet}>
                • Browse categories: Disease Risks, Drug Responses, Vitamin
                Profiling, IQ & Cognition.
              </Text>
              <Text style={styles.hiwBullet}>
                • Each report includes risk scores, gene insights, and
                personalized guidance.
              </Text>
              <Text style={styles.hiwBullet}>
                • Lifetime access — new science = new insights.
              </Text>
            </View>
            <View style={styles.hiwImageArea}>
              <Image source={Images.howItWorks4} style={styles.hiwImage} />
            </View>
          </View>
        </View>

        {/* <View style={styles.hiwRowSingle}>
          <View style={[styles.hiwCard, styles.hiwCardRow]}>
            <View style={styles.hiwTextCol}>
              <View style={styles.hiwHeader}>
                <View style={styles.hiwStepBadge}>
                  <Text style={styles.hiwStepText}>3</Text>
                </View>
                <Text style={styles.hiwTitle}>
                  Explore Your Interactive Dashboard
                </Text>
              </View>
              <View style={styles.hiwBullets}>
                <Text style={styles.hiwBullet}>
                  • Access your results anytime on web or mobile app.
                </Text>
                <Text style={styles.hiwBullet}>
                  • Browse categories: Disease Risks, Drug Responses, Vitamin
                  Profiling, IQ & Cognition.
                </Text>
                <Text style={styles.hiwBullet}>
                  • Each report includes risk scores, gene insights, and
                  personalized guidance.
                </Text>
                <Text style={styles.hiwBullet}>
                  • Lifetime access — new science = new insights.
                </Text>
              </View>
              <View style={styles.centerCta}>
                <PrimaryButton
                  label="Explore Dashboard"
                  style={styles.inlineButton}
                />
              </View>
            </View>
            <View style={styles.hiwImageCol}>
              <View style={[styles.hiwImageArea, {}]} />
            </View>
          </View>
        </View> */}
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
  hiwRowSingle: {
    marginTop: 8,
  },
  hiwCard: {
    flex: 1,
    backgroundColor: "rgba(136,107,249,0.04)",
    borderColor: semantic.border.light,
    borderRadius: 12,
  },
  hiwCardRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 16,
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
    fontFamily: poppinsWeights.bold,
    fontSize: 32,
  },
  hiwTitle: {
    fontSize: 32,
    lineHeight: 36,
    fontFamily: poppinsWeights.semiBold,
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
    fontSize: 18,
    fontFamily: poppinsWeights.regular,
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
  hiwTextCol: {
    flexShrink: 1,
    maxWidth: "58%",
  },
  hiwImageCol: {
    flex: 1,
    minWidth: "35%",
    marginTop: "auto",
  },
  centerCta: {
    marginTop: 30,
    marginBottom: 16,
  },
  inlineButton: {
    alignSelf: "flex-start",
    marginLeft: 16,
  },
  hiwImage: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
});

export default HowItWorksSection;
