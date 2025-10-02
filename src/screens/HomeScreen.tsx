import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import FAQSection from "../components/HomeScreem/FAQSection";
import { MainTabScreenProps } from "../navigation/types";
import { semantic, primary } from "../utils/colors";
import { typography } from "../utils/fonts";
import {} from "../components";
import {
  HeroCarousel,
  WhyChooseGeneticOneSection,
  WhatYouGetSection,
  HowItWorksSection,
} from "../components";
import {
  WhyDNATestingSection,
  TestimonialsSection,
  TrustedMindsSection,
  WhyChooseNucleotideSection,
} from "../components";
import DataSecuritySection from "../components/HomeScreem/DataSecuritySection";
// icons used by extracted components only
import NucleotideSelectionSection from "../components/HomeScreem/NucleotideSelectionSection";
import UnlockFutureHealthSection from "../components/HomeScreem/UnlockFutureHealthSection";

type Props = MainTabScreenProps<"Home">;

const HomeScreen: React.FC<Props> = ({ navigation: _navigation }) => {
  return (
    <View style={styles.container}>
      {/* <NavigationHeader title="Home" /> */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <HeroCarousel />

        <WhyChooseGeneticOneSection />

        <WhatYouGetSection />

        <HowItWorksSection />

        {/* Pricing Plans - as per design */}
        <NucleotideSelectionSection isBackground={true} />

        {/* Doctors carousel (slider) */}
        <TrustedMindsSection />

        <WhyChooseNucleotideSection />

        {/* Why DNA Testing? (new RN section) */}
        <WhyDNATestingSection />

        {/* Data Security Section */}
        <DataSecuritySection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Product Plans */}
        <UnlockFutureHealthSection />
        {/* <NucleotideSelectionSection isBackground={true} /> */}

        {/* FAQ */}
        <FAQSection />
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
    // padding: 24,
  },
  fullBleed: {
    marginHorizontal: 0,
  },
  heroContainer: {
    paddingVertical: 24,
    width: "70%",
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
  },
  mediaPlaceholder: {
    height: 300,
    width: "80%",
    borderRadius: 20,
    backgroundColor: semantic.background.tertiary,
    borderWidth: 1,
    borderColor: semantic.border.light,
  },
  heroSlide: {
    justifyContent: "center",
  },
  heroHeadingLine: {
    ...typography.h1,
    color: semantic.text.primary,
  },
  heroHeadingBrand: {
    ...typography.h1,
    color: semantic.text.primary,
    marginBottom: 8,
  },
  heroDescription: {
    ...typography.body,
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
    backgroundColor: "rgba(34,197,94,0.10)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: 12,
  },
  heroBadgeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#22c55e",
    marginRight: 8,
  },
  heroBadgeText: {
    ...typography.caption,
    color: "#22c55e",
    fontWeight: "600",
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
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(0,0,0,0.4)",
    marginRight: 8,
  },
  bulletText: {
    ...typography.caption,
    color: semantic.text.secondary,
  },
  badgesRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 8,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  tileGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
    width: "70%",
    alignSelf: "center",
  },
  whatYouGetSection: {
    backgroundColor: "rgba(136,107,249,0.04)",
  },
  // What You Get section
  featuresShowcase: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 24,
    width: "70%",
    alignSelf: "center",
  },
  // How It Works layout
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
    paddingVertical: 15,
  },
  hiwStepText: {
    ...typography.caption,
    color: semantic.interactive.primary,
    fontWeight: "bold",
    fontSize: 20,
  },
  hiwTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: semantic.text.primary,
  },
  hiwBullets: {
    gap: 6,
    // marginBottom: 25,
    marginLeft: 16,
  },
  hiwBulletsSpaced: {
    marginBottom: 25,
  },
  hiwBullet: {
    ...typography.caption,
    color: semantic.text.secondary,
  },
  hiwImageArea: {
    height: 250,
    backgroundColor: semantic.background.tertiary,
    borderColor: semantic.border.light,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    // marginTop: 16,
  },
  hiwTextCol: {
    flexShrink: 1,
    maxWidth: "58%",
  },
  hiwImageCol: {
    flex: 1,
    minWidth: "35%",
  },
  featuresCol: {
    flex: 1,
  },
  featuresCenter: {
    width: 380,
    alignItems: "center",
    // paddingTop: 20,
  },
  mobilePreview: {
    width: 380,
    height: 440,
    backgroundColor: semantic.background.tertiary,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: semantic.border.light,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  mobilePreviewText: {
    ...typography.h5,
    color: semantic.text.secondary,
  },
  centerCta: {
    marginTop: 30,
  },
  inlineButton: {
    alignSelf: "flex-start",
    marginLeft: 16,
  },
  featureRowDivider: {
    borderBottomWidth: 1,
    borderBottomColor: semantic.border.light,
    paddingBottom: 24,
    marginBottom: 24,
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
  featureTextBlock: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: semantic.text.primary,
    marginBottom: 0,
    alignSelf: "center",
    textAlign: "center",
  },
  featureDescription: {
    fontSize: 16,
    fontWeight: "400",
    color: semantic.text.secondary,
  },
  // Pricing styles
  couponBanner: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#FF9500",
    backgroundColor: "#FFF9E6",
    borderRadius: 10,
    marginBottom: 20,
  },
  couponEmoji: {
    fontSize: 16,
  },
  couponText: {
    ...typography.caption,
    color: "#FF9500",
  },
  couponCodeWrap: {
    borderRadius: 6,
  },
  pricingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
    width: "70%",
    alignSelf: "center",
    marginBottom: 16,
  },
  pricingCard: {
    flexBasis: "23%",
    backgroundColor: semantic.background.primary,
    borderWidth: 1,
    borderColor: semantic.border.light,
    borderRadius: 12,
    padding: 16,
  },
  pricingCardPopular: {
    borderColor: primary.purple,
  },
  pricingTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  saveBadge: {
    backgroundColor: "rgba(20,184,166,0.15)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  saveBadgeText: {
    ...typography.caption,
    color: primary.teal,
    fontWeight: "700",
  },
  tagBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: semantic.background.tertiary,
  },
  tagPurple: {
    backgroundColor: "rgba(139,92,246,0.15)",
  },
  tagBadgeText: {
    ...typography.caption,
    color: primary.purple,
    fontWeight: "700",
  },
  pricingTitle: {
    ...typography.h5,
    color: semantic.text.primary,
    marginTop: 6,
  },
  mrp: {
    ...typography.caption,
    color: semantic.text.tertiary,
    textDecorationLine: "line-through",
    marginTop: 8,
  },
  priceLine: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
    marginTop: 4,
    marginBottom: 8,
  },
  price: {
    ...typography.h3,
    color: semantic.text.primary,
  },
  perTest: {
    ...typography.caption,
    color: semantic.text.tertiary,
  },
  pricingDesc: {
    ...typography.caption,
    color: semantic.text.secondary,
    marginBottom: 12,
  },
  pillBannerWrap: {
    alignItems: "center",
    marginTop: 12,
    marginBottom: 24,
  },
  pillBanner: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: semantic.background.primary,
    borderWidth: 1,
    borderColor: semantic.border.light,
    borderRadius: 999,
  },
  pillBannerText: {
    ...typography.caption,
    color: semantic.text.secondary,
  },
  perkRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
    width: "70%",
    alignSelf: "center",
  },
  perkCard: {
    flexBasis: "32%",
    backgroundColor: semantic.background.primary,
    borderWidth: 1,
    borderColor: semantic.border.light,
    borderRadius: 12,
    padding: 16,
  },
  perkIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: semantic.background.tertiary,
    marginBottom: 10,
  },
  perkTitle: {
    ...typography.h6,
    color: semantic.text.primary,
    marginBottom: 4,
  },
  perkDesc: {
    ...typography.caption,
    color: semantic.text.secondary,
  },
  // Why DNA Testing grid
  whyGrid: {
    width: "70%",
    alignSelf: "center",
    gap: 24,
  },
  whyRow: {
    flexDirection: "row",
    gap: 24,
  },
  whyRowDivider: {
    borderBottomWidth: 1,
    borderBottomColor: semantic.border.light,
    paddingBottom: 24,
  },
  whyItem: {
    flex: 1,
  },
  whyColDivider: {
    borderRightWidth: 1,
    borderRightColor: semantic.border.light,
    paddingRight: 24,
  },
  whyIcon: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  whyTitle: {
    ...typography.h5,
    color: semantic.text.primary,
    marginBottom: 6,
  },
  whyDesc: {
    ...typography.caption,
    color: semantic.text.secondary,
  },
  // Doctors Slider
  doctorsCarousel: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    width: "85%",
    alignSelf: "center",
  },
  doctorsWrap: {
    flex: 1,
  },
  doctorsList: {
    paddingHorizontal: 12,
  },
  doctorCard: {
    backgroundColor: semantic.background.primary,
    borderWidth: 1,
    borderColor: semantic.border.light,
    borderRadius: 14,
    overflow: "hidden",
  },
  doctorCardPurple: {
    backgroundColor: "rgba(136,107,249,0.04)",
  },
  doctorSeparator: { width: 16 },
  doctorImage: {
    width: "100%",
    height: 220,
  },
  doctorInfo: {
    padding: 14,
  },
  doctorName: {
    ...typography.h5,
    color: semantic.text.primary,
  },
  doctorTitle: {
    ...typography.caption,
    color: semantic.text.secondary,
    marginTop: 4,
  },
  arrowButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: primary.purple,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  arrowText: {
    color: semantic.text.inverse,
    fontWeight: "700",
  },
  rowWrapBetween: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
  },
});

export default HomeScreen;
