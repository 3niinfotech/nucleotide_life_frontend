import React, { useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAppDispatch } from "../../hooks";
import { navigateToProductDetails } from "../../store/slices/navigationSlice";
import LinearGradient from "../../mocks/LinearGradient";
import { semantic, primary, gradients, special } from "../../utils/colors";
import { useResponsiveFontUtils } from "../../hooks";
import PrimaryButton from "../shared/PrimaryButton";
import { Section } from "..";
import {
  IcGeneticConfident,
  IcGeneticFreeOneTime,
  IcGeneticFullOwner,
} from "../../utils/iconUtil";

type Plan = {
  badge: string;
  badgeColor?: string; // not used in RN; kept for parity
  secondBadge?: string;
  title: string;
  originalPrice: string;
  price: string;
  perTest: string;
  description: string;
};

const plans: Plan[] = [
  {
    badge: "Save 30%",
    title: "1 Genetic One – Personal Plan",
    originalPrice: "₹32,000",
    price: "₹22,000",
    perTest: "/Per Test",
    description: "Perfect to begin your own DNA journey.",
  },
  {
    badge: "Save 35%",
    title: "2 Genetic One – Couple Pack",
    originalPrice: "₹64,000",
    price: "₹41,600",
    perTest: "/Per Test ₹20,800",
    description:
      "Great for couples or parents planning family health together.",
  },
  {
    badge: "Save 40%",
    secondBadge: "Most Popular",
    title: "3 Genetic One – Family Pack",
    originalPrice: "₹64,000",
    price: "₹41,600",
    perTest: "/Per Test ₹19,200",
    description:
      "Ideal for parents and child, or three family members the most popular choice.",
  },
  {
    badge: "Save 45%",
    secondBadge: "Best Value",
    title: "4 Genetic One – Extended Family Pack",
    originalPrice: "₹1,28,000",
    price: "₹70,400",
    perTest: "/Per Test ₹17,600",
    description:
      "Cover the whole family with lifetime DNA insights best value per test.",
  },
];

const additionalFeatures = [
  {
    icon: <IcGeneticFullOwner />,
    title: "Data Privacy First",
    description: "Your data is encrypted and always under your control.",
  },
  {
    icon: <IcGeneticFreeOneTime />,
    title: "Free One Time Blood Collection",
    description: "Convenient at-home collection with no extra charges.",
  },
  {
    icon: <IcGeneticConfident />,
    title: "Interactive Reports",
    description: "Access dynamic insights anytime via app & web dashboard.",
  },
];

const NucleotideSelectionSection: React.FC<{ isBackground?: boolean }> =
  React.memo(({ isBackground = false }) => {
    const { getResponsiveStyle } = useResponsiveFontUtils();
    const dispatch = useAppDispatch();
    const memoizedPlans = useMemo(() => plans, []);
    const memoizedFeatures = useMemo(() => additionalFeatures, []);

    const handleOrderNow = (plan: Plan) => {
      dispatch(navigateToProductDetails(plan.title));
    };

    return (
      <Section
        title="Choose Your Genetic One by Nucleotide"
        subtitle=" One simple DNA test. A lifetime of insights"
        style={isBackground ? styles.sectionBg : undefined}
      >
        <View style={styles.header}>
          <View style={styles.couponBanner}>
            <Text
              style={[styles.couponText, getResponsiveStyle("regular", 16)]}
            >
              🎁 Use code :
            </Text>
            <LinearGradient
              colors={gradients.pinkOrange}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.couponCodeWrap}
            >
              <Text
                style={[styles.couponCode, getResponsiveStyle("regular", 12)]}
              >
                NUCLEO
              </Text>
            </LinearGradient>
            <Text
              style={[styles.couponText, getResponsiveStyle("regular", 16)]}
            >
              at checkout to unlock up to{" "}
              <Text
                style={[styles.couponTextBold, getResponsiveStyle("bold", 16)]}
              >
                45% off{" "}
              </Text>{" "}
              launch pricing
            </Text>
          </View>
        </View>

        <View style={styles.grid4}>
          {memoizedPlans.map((plan, idx) => (
            <View key={`${idx}-${plan.title}`} style={[styles.card]}>
              <View style={styles.cardTopRow}>
                <View style={styles.badge}>
                  <Text
                    style={[styles.badgeText, getResponsiveStyle("medium", 12)]}
                  >
                    {plan.badge}
                  </Text>
                </View>
                {plan.secondBadge ? (
                  <View style={styles.tagBadgeContainer}>
                    <LinearGradient
                      colors={
                        idx === 2 ? gradients.pinkOrange : gradients.bluePurple
                      }
                      start={{ x: 1, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      style={styles.tagBadgeGradient}
                    >
                      <Text
                        style={[
                          styles.tagBadgeGradientText,
                          getResponsiveStyle("medium", 12),
                        ]}
                      >
                        {plan.secondBadge}
                      </Text>
                    </LinearGradient>
                  </View>
                ) : null}
              </View>

              <View style={styles.cardContent}>
                <Text
                  style={[styles.planTitle, getResponsiveStyle("semiBold", 20)]}
                >
                  {plan.title}
                </Text>
                <Text style={[styles.mrp, getResponsiveStyle("regular", 14)]}>
                  MRP {plan.originalPrice}
                </Text>
                <View style={styles.priceLine}>
                  <Text
                    style={[styles.price, getResponsiveStyle("semiBold", 20)]}
                  >
                    {plan.price}
                  </Text>
                  <Text
                    style={[styles.perTest, getResponsiveStyle("regular", 16)]}
                  >
                    {plan.perTest}
                  </Text>
                </View>
                <Text
                  style={[styles.planDesc, getResponsiveStyle("regular", 14)]}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  lineBreakMode="tail"
                >
                  {plan.description}
                </Text>
              </View>

              <PrimaryButton
                label="Order Now"
                style={styles.orderButton}
                onPress={() => handleOrderNow(plan)}
              />
            </View>
          ))}
        </View>

        <View style={styles.centerRow}>
          <View style={styles.pillBanner}>
            <Text
              style={[styles.pillBannerText, getResponsiveStyle("regular", 16)]}
            >
              Future‑Ready Platform – Buy once, upgrade anytime.
            </Text>
          </View>
        </View>

        <View style={styles.grid3}>
          {memoizedFeatures.map((f, idx) => (
            <View key={`${idx}-${f.title}`} style={styles.featureCard}>
              <View style={styles.featureHeader}>
                <View style={styles.featureIcon}>{f.icon}</View>
                <Text
                  style={[
                    styles.featureTitle,
                    getResponsiveStyle("semiBold", 16),
                  ]}
                >
                  {f.title}
                </Text>
              </View>
              <Text
                style={[styles.featureDesc, getResponsiveStyle("regular", 14)]}
              >
                {f.description}
              </Text>
            </View>
          ))}
        </View>
      </Section>
    );
  });

const styles = StyleSheet.create({
  sectionBg: {
    backgroundColor: special.purpleBg,
  },
  header: {
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    color: semantic.text.primary,
    textAlign: "center",
  },
  subtitle: {
    color: semantic.text.secondary,
    textAlign: "center",
    marginTop: 4,
    marginBottom: 10,
  },
  couponBanner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: special.coupon,
    backgroundColor: special.couponBg,
    borderRadius: 10,
  },
  couponText: {
    color: special.coupon,
  },
  couponTextBold: {},
  couponCodeWrap: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  couponCode: {
    color: semantic.text.inverse,
    fontWeight: "700",
  },
  grid4: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
    width: "70%",
    alignSelf: "center",
    marginVertical: 12,
  },
  card: {
    flexBasis: "23%",
    backgroundColor: semantic.background.primary,
    borderWidth: 1,
    borderColor: semantic.border.light,
    borderRadius: 12,
    padding: 16,
    // height: 300,
    justifyContent: "space-between",
  },
  cardPopular: {
    borderColor: primary.purple,
  },
  cardTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  cardContent: {
    flex: 1,
    justifyContent: "flex-start",
  },
  badge: {
    backgroundColor: special.tealBg,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  badgeText: {
    color: special.teal,
  },
  tagBadgeContainer: {
    borderRadius: 999,
    overflow: "hidden",
  },
  tagBadgeGradient: {
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagBadgeGradientText: {
    color: semantic.text.inverse,
  },
  planTitle: {
    color: semantic.text.primary,
    marginTop: 6,
  },
  mrp: {
    color: semantic.text.light,
    textDecorationLine: "line-through",
    marginTop: 6,
  },
  priceLine: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
    marginTop: 4,
    marginBottom: 8,
  },
  price: {
    color: semantic.text.primary,
  },
  perTest: {
    color: semantic.text.secondary,
  },
  planDesc: {
    color: semantic.text.secondary,
    lineHeight: 18,
    maxHeight: 36, // 2 lines * 18 lineHeight
  },
  orderButton: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  centerRow: {
    alignItems: "center",
    marginTop: 12,
    marginBottom: 24,
  },
  pillBanner: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: special.greenBg,
    borderWidth: 1,
    borderColor: special.green,
    borderRadius: 8,
  },
  pillBannerText: {
    color: special.green,
  },
  grid3: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
    width: "70%",
    alignSelf: "center",
  },
  featureCard: {
    flexBasis: "32%",
    backgroundColor: semantic.background.primary,
    borderWidth: 1,
    borderColor: semantic.border.light,
    borderRadius: 12,
    padding: 16,
  },
  featureHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 12,
  },
  featureIcon: {
    alignItems: "center",
    justifyContent: "center",
    // width: 24,
    // height: 24,
  },
  featureTitle: {
    color: semantic.text.primary,
    flex: 1,
  },
  featureDesc: {
    color: semantic.text.secondary,
  },
});

export default NucleotideSelectionSection;
