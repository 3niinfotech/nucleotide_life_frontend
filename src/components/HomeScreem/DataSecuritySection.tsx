import React, { useState, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { semantic, gradients, special } from '../../utils/colors';
import { fontStyles, poppinsWeights } from '../../utils/fonts';
import LinearGradient from '../../mocks/LinearGradient';
import PrimaryButton from '../shared/PrimaryButton';
import {
  IcGeneticShieldStar,
  IcGeneticLock,
  IcGeneticMasks,
  IcGeneticCheckmarkCircle,
  IcGeneticGlobal,
  IcGeneticServer,
  IcGeneticInfinity,
  IcGeneticDelete,
  IcGeneticFullOwner,
  IcGeneticConfident,
} from '../../utils/iconUtil';
import Section from '../shared/Section';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const securityFeatures = [
  {
    icon: <IcGeneticShieldStar />,
    title: 'Take off Aadhaar based KYC verification',
    description:
      'Every test starts with verified authentication, preventing unauthorized access.',
  },
  {
    icon: <IcGeneticLock />,
    title: 'Military-Grade Encryption',
    description:
      'Your genetic data is protected with advanced encryption protocols.',
  },
  {
    icon: <IcGeneticMasks />,
    title: 'Anonymized Data',
    description:
      'Your personal information is separated from genetic data for maximum privacy.',
  },
  {
    icon: <IcGeneticCheckmarkCircle />,
    title: 'Consent-Based Access',
    description: 'You control who can access your data and for what purposes.',
  },
  {
    icon: <IcGeneticGlobal />,
    title: 'Global Compliance',
    description: 'We meet international standards for genetic data protection.',
  },
  {
    icon: <IcGeneticServer />,
    title: 'Long-Term Protection',
    description: 'Your data remains secure throughout its entire lifecycle.',
  },
  {
    icon: <IcGeneticInfinity />,
    title: 'Lifetime Genetic Updates',
    description: 'Secure access to new insights as genetic science advances.',
  },
];

const bottomFeatures = [
  {
    icon: <IcGeneticFullOwner />,
    title: 'Full ownership of your genetic data',
  },
  {
    icon: <IcGeneticFullOwner />,
    title: 'Option to join or opt out of research programs',
  },
  {
    icon: <IcGeneticDelete />,
    title: 'Delete your data anytime',
  },
  {
    icon: <IcGeneticConfident />,
    title: 'Confidential reports only you can access',
  },
];

const DataSecuritySection: React.FC = React.memo(() => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const memoizedSecurityFeatures = useMemo(() => securityFeatures, []);
  const memoizedBottomFeatures = useMemo(() => bottomFeatures, []);

  const toggleExpanded = useCallback(
    (index: number) => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setExpandedIndex(expandedIndex === index ? -1 : index);
    },
    [expandedIndex],
  );

  return (
    <Section
      title="Your Genetic Data. Secured for Life."
      subtitle="At Nucleotide, your DNA is not just data - it is your identity. We
          safeguard your genetic information with the highest global security
          standards, ensuring it remains private, encrypted, and always under
          your control"
      style={styles.section}
    >
      {/* Security Features Accordion */}
      <View style={styles.accordionWrap}>
        {memoizedSecurityFeatures.map((feature, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <View
              key={`sec-${index}`}
              style={[styles.item, isExpanded ? styles.itemExpanded : null]}
            >
              <TouchableOpacity
                onPress={() => toggleExpanded(index)}
                activeOpacity={0.8}
                style={styles.itemButton}
              >
                <View style={styles.itemHeader}>
                  <View style={styles.icon}>{feature.icon}</View>
                  <Text style={styles.itemTitle}>{feature.title}</Text>
                </View>
                <Text
                  style={[
                    styles.chevron,
                    isExpanded ? styles.chevronExpanded : null,
                  ]}
                >
                  {isExpanded ? '›' : '›'}
                </Text>
              </TouchableOpacity>
              {isExpanded ? (
                <View style={styles.answerWrap}>
                  <Text style={styles.itemDescription}>
                    {feature.description}
                  </Text>
                </View>
              ) : null}
            </View>
          );
        })}
      </View>

      {/* Bottom Features */}
      <View style={styles.bottomCard}>
        <View style={styles.bottomGrid}>
          {memoizedBottomFeatures.map((f, idx) => (
            <View key={`bf-${idx}`} style={styles.bottomItem}>
              <View style={styles.bottomIconWrap}>{f.icon}</View>
              <Text style={styles.bottomText}>{f.title}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* CTA */}
      <View style={styles.ctaWrap}>
        <LinearGradient
          colors={gradients.pinkOrange}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.cta}
        >
          <Text style={styles.ctaTitle}>Trust. Privacy. Innovation.</Text>
          <Text style={styles.ctaSubtitle}>
            At Nucleotide, we deliver cutting-edge genetic insights while
            safeguarding your privacy at every step.
          </Text>
          <PrimaryButton
            label="Talk to Our Data Privacy Experts"
            style={styles.ctaButton}
            labelTextColor={special.coupon}
            labelStyle={styles.ctaButtonLabel}
          />
        </LinearGradient>
      </View>
    </Section>
  );
});

const styles = StyleSheet.create({
  section: {
    backgroundColor: special.purpleBg,
  },
  ctaWrap: {
    width: '100%',
    alignSelf: 'center',
  },
  accordionWrap: {
    width: '50%',
    alignSelf: 'center',
    gap: 12,
    marginTop: 8,
    marginBottom: 16,
  },
  item: {
    borderWidth: 1,
    borderColor: semantic.border.light,
    borderRadius: 12,
    backgroundColor: semantic.background.primary,
    overflow: 'hidden',
  },
  itemExpanded: {
    // emulate ring
    shadowColor: semantic.shadow.light,
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  itemButton: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    fontFamily: poppinsWeights.semiBold,
    fontSize: 16,
    color: semantic.text.primary,
  },
  chevron: {
    color: semantic.text.secondary,
    fontSize: 22,
    transform: [{ rotate: '0deg' }],
  },
  chevronExpanded: {
    transform: [{ rotate: '90deg' }],
  },
  answerWrap: {
    paddingHorizontal: 16,
    paddingBottom: 14,
  },
  itemDescription: {
    fontFamily: poppinsWeights.regular,
    fontSize: 16,
  },
  bottomCard: {
    width: '70%',
    alignSelf: 'center',
    backgroundColor: semantic.background.primary,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: semantic.border.medium,
    padding: 16,
    marginBottom: 16,
  },
  bottomGrid: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
  },
  bottomItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    minWidth: 0,
  },
  bottomIconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomText: {
    fontFamily: poppinsWeights.regular,
    fontSize: 12,
    color: semantic.text.primary,
    flexShrink: 1,
    textAlign: 'left',
  },
  cta: {
    width: '50%',
    alignSelf: 'center',
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  ctaTitle: {
    ...fontStyles.subsectionTitle,
    color: semantic.text.inverse,
    marginBottom: 6,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  ctaSubtitle: {
    ...fontStyles.caption,
    color: semantic.text.inverse,
    opacity: 0.8,
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 16,
  },
  ctaButton: {
    backgroundColor: semantic.background.primary,
    borderRadius: 8,
    alignSelf: 'center',
    marginVertical: 16,
  },
  ctaButtonLabel: {
    fontWeight: '600',
    fontSize: 12,
  },
});

export default DataSecuritySection;
