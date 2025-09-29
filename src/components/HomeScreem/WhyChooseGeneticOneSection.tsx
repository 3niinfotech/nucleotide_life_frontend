import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Section, FeatureTile } from '..';
import {
  IcGeneticComp,
  IcGeneticComp2,
  IcGeneticData,
  IcGeneticFuture,
  IcGeneticLifetime,
  IcGeneticPre,
} from '../../utils/iconUtil';

const WhyChooseGeneticOneSection: React.FC = () => {
  return (
    <Section
      title="Why to Choose Genetic One?"
      subtitle="Experience the most comprehensive DNA analysis with cutting-edge technology and unmatched privacy protection"
    >
      <View style={styles.tileGrid}>
        <FeatureTile
          title="Comprehensive DNA Insights"
          description="600+ diseases, 635+ drug responses, vitamins, and cognitive markers in one test"
          icon={<IcGeneticComp width={56} height={56} />}
        />
        <FeatureTile
          title="Precision Meets Simplicity"
          description="Actionable, easy-to-read reports powered by advanced AI insights"
          icon={<IcGeneticPre width={56} height={56} />}
        />
        <FeatureTile
          title="Comprehensive DNA Insights"
          description="600+ diseases, 635+ drug responses, vitamins, and cognitive markers in one test"
          icon={<IcGeneticComp2 width={56} height={56} />}
        />
        <FeatureTile
          title="Data Privacy First"
          description="Your DNA is encrypted, 100% secure, and always fully under your control"
          icon={<IcGeneticData width={56} height={56} />}
        />
        <FeatureTile
          title="Lifetime Value"
          description="One DNA sample, unlimited future reports updated as science rapidly evolves"
          icon={<IcGeneticLifetime width={56} height={56} />}
        />
        <FeatureTile
          title="Future-Proof Health"
          description="Be the first to access Gut, Biomarkers, and comprehensive Multimodal health tests"
          icon={<IcGeneticFuture width={56} height={56} />}
        />
      </View>
    </Section>
  );
};

const styles = StyleSheet.create({
  tileGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
    width: '70%',
    alignSelf: 'center',
  },
});

export default WhyChooseGeneticOneSection;
