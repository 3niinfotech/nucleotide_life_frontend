import React from "react";
import { View, StyleSheet } from "react-native";
import { Section, FeatureTile } from "..";
import {
  IcGeneticComp,
  IcGeneticPre,
  IcGeneticComp2,
  IcGeneticData,
  IcGeneticLifetime,
  IcGeneticFuture,
} from "../../utils/iconUtil";
import { useResponsiveFontUtils } from "../../hooks";

const WhyChooseNucleotideSection: React.FC = () => {
  const { getScreenSizeCategory } = useResponsiveFontUtils();
  const isSmallScreen = ["smallMobile", "mobile", "largeMobile"].includes(
    getScreenSizeCategory()
  );

  return (
    <Section
      title="Why Choose Nucleotide for Your DNA Journey?"
      subtitle="Experience the most comprehensive DNA analysis with cutting-edge technology and unmatched expertise"
      style={styles.sectionBg}
    >
      <View
        style={[styles.tileGrid, isSmallScreen && styles.smallScreenTileGrid]}
      >
        <FeatureTile
          title="Root-Cause Precision"
          description="AI-powered genetic decoding that uncovers the why behind your health risks not just the what."
          icon={<IcGeneticComp width={56} height={56} />}
        />
        <FeatureTile
          title="Pharmacogenomics Advantage"
          description="Insights on 600+ drugs, guiding safer and more personalized prescriptions."
          icon={<IcGeneticPre width={56} height={56} />}
        />
        <FeatureTile
          title="Smart Vitamin Profiling"
          description="DNA-based guidance on essential vitamins (D, B6, B9, B12, C) to optimize daily health."
          icon={<IcGeneticComp2 width={56} height={56} />}
        />
        <FeatureTile
          title="IQ & Cognitive Traits"
          description="Understand genetic influences on memory, learning, and cognitive flexibility."
          icon={<IcGeneticData width={56} height={56} />}
        />
        <FeatureTile
          title="Lifetime Value"
          description="Your DNA data today powers tomorrow's insights from advanced health modules to full genome sequencing."
          icon={<IcGeneticLifetime width={56} height={56} />}
        />
        <FeatureTile
          title="Trusted by Experts"
          description="Backed by leaders in genomics, pharmacogenomics, and precision medicine."
          icon={<IcGeneticFuture width={56} height={56} />}
        />
      </View>
    </Section>
  );
};

const styles = StyleSheet.create({
  sectionBg: {
    backgroundColor: "rgba(136,107,249,0.04)",
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

export default WhyChooseNucleotideSection;
