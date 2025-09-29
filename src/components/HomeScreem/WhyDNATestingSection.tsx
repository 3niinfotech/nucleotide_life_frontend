import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Section } from '../index';
import { semantic } from '../../utils/colors';
import { poppinsWeights } from '../../utils/fonts';
import {
  IcDnaTestShield,
  IcDnaTestUser,
  IcDnaTestUserGroup,
  IcDnaTestPill,
  IcDnaInfinity,
} from '../../utils/iconUtil';

type Benefit = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const WhyDNATestingSection: React.FC = () => {
  const topBenefits: Benefit[] = [
    {
      icon: <IcDnaTestShield width={32} height={32} />,
      title: 'See risks before they become problems',
      description:
        'Across 19 medical categories including Cardio, Neuro, Endocrine, and more.',
    },
    {
      icon: <IcDnaTestUser width={32} height={32} />,
      title: 'No more generic advice',
      description:
        'Pharmacogenomic guidance for safer, personalized prescriptions.',
    },
    {
      icon: <IcDnaTestPill width={32} height={32} />,
      title: 'Right drug, right dose, right for you',
      description:
        'Interactive portal with seamless navigation + clinician-ready, detailed PDF reports.',
    },
  ];

  const bottomBenefits: Benefit[] = [
    {
      icon: <IcDnaTestUserGroup width={32} height={32} />,
      title: 'Health insights for you and loved ones',
      description:
        'Pharmacogenomic guidance for safer, personalized prescriptions.',
    },
    {
      icon: <IcDnaInfinity width={32} height={32} />,
      title: 'One test. Endless insights',
      description:
        'Your DNA never changes — new reports and features can be unlocked anytime without retesting.',
    },
  ];

  return (
    <Section
      title="Why DNA Testing?"
      subtitle="Discover how genetic insights can transform your approach to health and wellness"
    >
      {/* Top Row Benefits */}
      <View style={styles.topGrid}>
        {topBenefits.map((benefit, index) => (
          <View
            key={`top-${index}`}
            style={[
              styles.benefitItem,
              styles.topItem,
              index !== topBenefits.length - 1 && styles.itemDivider,
            ]}
          >
            <View style={styles.benefitHeader}>
              <View style={styles.iconWrap}>{benefit.icon}</View>
              <Text style={styles.benefitTitle}>{benefit.title}</Text>
            </View>
            <Text style={styles.benefitDesc}>{benefit.description}</Text>
          </View>
        ))}
      </View>

      {/* Bottom Row Benefits */}
      <View style={styles.bottomGrid}>
        {bottomBenefits.map((benefit, index) => (
          <View
            key={`bottom-${index}`}
            style={[
              styles.benefitItem,
              styles.bottomItem,
              index === 0 && styles.itemDivider,
            ]}
          >
            <View style={styles.benefitHeader}>
              <View style={styles.iconWrap}>{benefit.icon}</View>
              <Text style={styles.benefitTitle}>{benefit.title}</Text>
            </View>
            <Text style={styles.benefitDesc}>{benefit.description}</Text>
          </View>
        ))}
      </View>
    </Section>
  );
};

const styles = StyleSheet.create({
  sectionBg: {
    backgroundColor: 'rgba(136,107,249,0.04)',
  },
  topGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 24,
    width: '70%',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: semantic.border.light,
  },
  bottomGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 24,
    width: '76%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  benefitItem: {
    flexBasis: '32%',
    paddingBottom: 24,
  },
  topItem: {
    paddingRight: 24,
  },
  bottomItem: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  itemDivider: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: semantic.border.light,
  },
  benefitHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 6,
  },
  iconWrap: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  benefitTitle: {
    color: semantic.text.primary,
    flexShrink: 1,
    fontSize: 20,
    fontFamily: poppinsWeights.semiBold,
  },
  benefitDesc: {
    fontFamily: poppinsWeights.regular,
    fontSize: 16,
    color: semantic.text.secondary,
    lineHeight: 20,
  },
  dividerRow: {
    width: '76%',
    alignSelf: 'center',
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
});

export default WhyDNATestingSection;
