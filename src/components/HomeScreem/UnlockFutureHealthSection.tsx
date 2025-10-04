import React, { useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { Section, FeatureTile } from "..";
import { special } from "../../utils/colors";
import { useResponsiveFontUtils } from "../../hooks";
import {
  IcFutureFuturistic,
  IcFutureDeepTech,
  IcFutureCoupleGenetic,
  IcFutureGeneticRisk,
  IcFutureGeneticPowered,
  IcFutureFamilyTree,
  IcFuturePersonalized,
  IcFutureGeneticRiskDoctor,
  IcFutureAiPowered,
} from "../../utils/iconUtil";

const UnlockFutureHealthSection: React.FC = React.memo(() => {
  const { getScreenSizeCategory } = useResponsiveFontUtils();
  const isSmallScreen = ["smallMobile", "mobile", "largeMobile"].includes(
    getScreenSizeCategory()
  );

  const features = useMemo(
    () => [
      {
        title: "Futuristic AI-Driven Multi-Modal Health Engine",
        description:
          "Combines genetic data, gut microbiome, and biomarkers (blood + urine) to provide a 360° health analysis.",
        icon: <IcFutureFuturistic width={56} height={56} />,
      },
      {
        title: "Deep-Tech Root Cause Analysis Engine",
        description:
          "Enables multi-modal health analysis for both doctors and patients, going beyond surface-level reports to identify underlying causes.",
        icon: <IcFutureDeepTech width={56} height={56} />,
      },
      {
        title: "Couple Genetic Data–Based Child Simulation",
        description:
          "Simulates a virtual child using both partners' genetic profiles, predicting traits, carrier risks, cognition, and wellness to guide family-planning decisions.",
        icon: <IcFutureCoupleGenetic width={56} height={56} />,
      },
      {
        title: "Genetic Risk–Based Insurance & Care Ecosystem",
        description:
          "Personalized health insurance, life insurance, and disease care recommendations (e.g., cancer care plans) based on genetic predisposition",
        icon: <IcFutureGeneticRisk width={56} height={56} />,
      },
      {
        title: "Genetic-Powered Healthy Embryo Selection",
        description:
          "Actively supports IVF clinics and parents in selecting the healthiest embryos using advanced polygenic risk scoring",
        icon: <IcFutureGeneticPowered width={56} height={56} />,
      },
      {
        title: "Family Tree & Ancestry Prediction",
        description:
          "Builds predictive family lineage and health profiles using genetic data, enabling ancestry discovery and intergenerational health mapping.",
        icon: <IcFutureFamilyTree width={56} height={56} />,
      },
      {
        title: "Personalized Diet & Supplement Recommendations",
        description:
          "Genetic profile + multimodal risk scoring drive individualized nutrition, supplement, and lifestyle advice.",
        icon: <IcFuturePersonalized width={56} height={56} />,
      },
      {
        title: "Genetic Risk–Based Symptom & Doctor Connect",
        description:
          "AI-driven symptom-to-genetics correlation, enabling quick and efficient doctor consultations with tailored clinical context.",
        icon: <IcFutureGeneticRiskDoctor width={56} height={56} />,
      },
      {
        title: "AI-Powered Health Twin",
        description:
          "A digital twin of your health that updates dynamically with new genetic, biomarker, and lifestyle data, helping you track and optimize your health in real time.",
        icon: <IcFutureAiPowered width={56} height={56} />,
      },
    ],
    []
  );

  return (
    <Section
      title="Unlock the Future of Health with Early Access"
      subtitle="Experience tomorrow's healthcare today with exclusive early features"
      style={styles.sectionBg}
    >
      <View
        style={[styles.tileGrid, isSmallScreen && styles.smallScreenTileGrid]}
      >
        {features.map((feature, index) => (
          <FeatureTile
            key={`feature-${index}`}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </View>
    </Section>
  );
});

const styles = StyleSheet.create({
  sectionBg: {
    backgroundColor: special.purpleBg,
  },
  tileGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
    width: "70%",
    alignSelf: "center",
  },
  smallScreenTileGrid: {
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: 16,
    gap: 12,
  },
});

export default UnlockFutureHealthSection;
