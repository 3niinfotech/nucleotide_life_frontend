import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Section } from "../index";
import { semantic } from "../../utils/colors";
import {
  IcDnaTestShield,
  IcDnaTestUser,
  IcDnaTestUserGroup,
  IcDnaTestPill,
  IcDnaInfinity,
} from "../../utils/iconUtil";
import { useResponsiveFontUtils } from "../../hooks";

type Benefit = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const WhyDNATestingSection: React.FC = () => {
  const { getResponsiveStyle, getScreenSizeCategory } =
    useResponsiveFontUtils();
  const isSmallScreen = ["smallMobile", "mobile", "largeMobile"].includes(
    getScreenSizeCategory()
  );
  const topBenefits: Benefit[] = [
    {
      icon: <IcDnaTestShield />,
      title: "See risks before they become problems",
      description:
        "Across 19 medical categories including Cardio, Neuro, Endocrine, and more.",
    },
    {
      icon: <IcDnaTestUser />,
      title: "No more generic advice",
      description:
        "Pharmacogenomic guidance for safer, personalized prescriptions.",
    },
    {
      icon: <IcDnaTestPill />,
      title: "Right drug, right dose, right for you",
      description:
        "Interactive portal with seamless navigation + clinician-ready, detailed PDF reports.",
    },
  ];

  const bottomBenefits: Benefit[] = [
    {
      icon: <IcDnaTestUserGroup />,
      title: "Health insights for you and loved ones",
      description:
        "Pharmacogenomic guidance for safer, personalized prescriptions.",
    },
    {
      icon: <IcDnaInfinity />,
      title: "One test. Endless insights",
      description:
        "Your DNA never changes — new reports and features can be unlocked anytime without retesting.",
    },
  ];

  return (
    <Section
      title="Why DNA Testing?"
      subtitle="Discover how genetic insights can transform your approach to health and wellness"
    >
      {/* Top Row Benefits */}
      <View style={[styles.topGrid, isSmallScreen && styles.smallScreenGrid]}>
        {topBenefits.map((benefit, index) => (
          <View
            key={`top-${index}`}
            style={[
              styles.benefitItem,
              styles.topItem,
              index !== topBenefits.length - 1 && styles.itemDivider,
              isSmallScreen && styles.smallScreenItem,
            ]}
          >
            <View style={styles.benefitHeader}>
              <View style={styles.iconWrap}>{benefit.icon}</View>
              <Text
                style={[
                  styles.benefitTitle,
                  getResponsiveStyle("semiBold", isSmallScreen ? 16 : 20),
                ]}
              >
                {benefit.title}
              </Text>
            </View>
            <Text
              style={[
                styles.benefitDesc,
                getResponsiveStyle("regular", isSmallScreen ? 14 : 16),
              ]}
            >
              {benefit.description}
            </Text>
          </View>
        ))}
      </View>

      {/* Bottom Row Benefits */}
      <View
        style={[styles.bottomGrid, isSmallScreen && styles.smallScreenGrid]}
      >
        {bottomBenefits.map((benefit, index) => (
          <View
            key={`bottom-${index}`}
            style={[
              styles.benefitItem,
              styles.bottomItem,
              index === 0 && styles.itemDivider,
              isSmallScreen && styles.smallScreenItem,
            ]}
          >
            <View style={styles.benefitHeader}>
              <View style={styles.iconWrap}>{benefit.icon}</View>
              <Text
                style={[
                  styles.benefitTitle,
                  getResponsiveStyle("semiBold", isSmallScreen ? 16 : 20),
                ]}
              >
                {benefit.title}
              </Text>
            </View>
            <Text
              style={[
                styles.benefitDesc,
                getResponsiveStyle("regular", isSmallScreen ? 14 : 16),
              ]}
            >
              {benefit.description}
            </Text>
          </View>
        ))}
      </View>
    </Section>
  );
};

const styles = StyleSheet.create({
  sectionBg: {
    backgroundColor: "rgba(136,107,249,0.04)",
  },
  topGrid: {
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: 16,
    width: "100%",
    maxWidth: 1200,
    alignSelf: "center",
    borderBottomWidth: 1,
    borderColor: semantic.border.light,
    paddingHorizontal: 16,
  },
  bottomGrid: {
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: 16,
    width: "100%",
    maxWidth: 1200,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  benefitItem: {
    flex: 1,
    minWidth: 0,
    paddingBottom: 24,
  },
  topItem: {
    paddingRight: 8,
  },
  bottomItem: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  itemDivider: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: semantic.border.light,
  },
  benefitHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    marginBottom: 6,
  },
  iconWrap: {
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  benefitTitle: {
    color: semantic.text.primary,
    flexShrink: 1,
    flexWrap: "wrap",
  },
  benefitDesc: {
    color: semantic.text.secondary,
    flexShrink: 1,
  },
  dividerRow: {
    width: "76%",
    alignSelf: "center",
    marginVertical: 16,
  },
  hLine: {
    height: 1,
    backgroundColor: semantic.border.light,
    flex: 1,
  },
  vLine: {
    width: 1,
    height: 120,
    backgroundColor: semantic.border.light,
    marginHorizontal: 16,
  },
  smallScreenGrid: {
    flexDirection: "column",
    gap: 16,
    width: "100%",
    paddingHorizontal: 16,
  },
  smallScreenItem: {
    flex: 0,
    width: "100%",
    paddingRight: 0,
    paddingLeft: 0,
    borderRightWidth: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: semantic.border.light,
    paddingBottom: 16,
  },
});

export default WhyDNATestingSection;
