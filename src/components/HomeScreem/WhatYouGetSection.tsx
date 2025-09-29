import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Section, PrimaryButton } from '..';
import { semantic } from '../../utils/colors';
import {
  IcGeneticDisease,
  IcGeneticPill,
  IcGeneticPersonalized,
  IcGeneticVitamin,
  IcGeneticCognitive,
  IcGeneticFutureProof,
} from '../../utils/iconUtil';
import { poppinsWeights } from '../../utils/fonts';

const WhatYouGetSection: React.FC = () => {
  return (
    <Section
      title="What You Get with Genetic One"
      subtitle="A comprehensive genetic analysis that provides actionable insights across multiple health dimensions"
      style={styles.sectionBg}
    >
      <View style={styles.featuresShowcase}>
        <View style={styles.featuresCol}>
          <View style={styles.featureRowDivider}>
            <View style={styles.featureItem}>
              <View style={styles.featureRow}>
                <View style={styles.featureIcon}>
                  <IcGeneticDisease width={36} height={36} />
                </View>
                <Text style={styles.featureTitle}>
                  400+ Disease Risk Insights
                </Text>
              </View>
              <Text style={styles.featureDescription}>
                Across 19 medical categories including Cardio, Neuro, Endocrine,
                and more.
              </Text>
            </View>
          </View>
          <View style={styles.featureRowDivider}>
            <View style={styles.featureItem}>
              <View style={styles.featureRow}>
                <View style={styles.featureIcon}>
                  <IcGeneticPill width={36} height={36} />
                </View>
                <Text style={styles.featureTitle}>
                  635+ Drug Response Reports
                </Text>
              </View>
              <Text style={styles.featureDescription}>
                Pharmacogenomic guidance for safer, personalized prescriptions.
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.featureItem}>
              <View style={styles.featureRow}>
                <View style={styles.featureIcon}>
                  <IcGeneticPersonalized width={36} height={36} />
                </View>
                <Text style={styles.featureTitle}>
                  Personalized DNA Dashboard
                </Text>
              </View>
              <Text style={styles.featureDescription}>
                Interactive portal with seamless navigation + clinician-ready,
                detailed PDF reports
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.featuresCenter}>
          <View style={styles.mobilePreview}></View>
          <View style={styles.centerCta}>
            <PrimaryButton
              label="View Sample Report"
              style={styles.inlineButton}
            />
          </View>
        </View>

        <View style={styles.featuresCol}>
          <View style={styles.featureRowDivider}>
            <View style={styles.featureItem}>
              <View style={styles.featureRow}>
                <View style={styles.featureIcon}>
                  <IcGeneticVitamin width={36} height={36} />
                </View>
                <Text style={styles.featureTitle}>Vitamin Profiling</Text>
              </View>
              <Text style={styles.featureDescription}>
                Genetic needs for Vitamin D, B6, B9, B12, and C with diet &
                supplement advice.
              </Text>
            </View>
          </View>
          <View style={styles.featureRowDivider}>
            <View style={styles.featureItem}>
              <View style={styles.featureRow}>
                <View style={styles.featureIcon}>
                  <IcGeneticCognitive width={36} height={36} />
                </View>
                <Text style={styles.featureTitle}>IQ & Cognitive Insights</Text>
              </View>
              <Text style={styles.featureDescription}>
                Discover your potential in memory, learning, and brain
                development.
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.featureItem}>
              <View style={styles.featureRow}>
                <View style={styles.featureIcon}>
                  <IcGeneticFutureProof width={36} height={36} />
                </View>
                <Text style={styles.featureTitle}>Future–Proof Value</Text>
              </View>
              <Text style={styles.featureDescription}>
                One DNA sample unlocks lifetime updates & add‑on reports as
                science evolves.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Section>
  );
};

const styles = StyleSheet.create({
  sectionBg: {
    backgroundColor: 'rgba(136,107,249,0.04)',
  },
  featuresShowcase: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 24,
    width: '70%',
    alignSelf: 'center',
  },
  featuresCol: {
    flex: 1,
  },
  featuresCenter: {
    width: 380,
    alignItems: 'center',
  },
  mobilePreview: {
    width: 380,
    height: 440,
    backgroundColor: semantic.background.tertiary,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: semantic.border.light,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  centerCta: {
    marginTop: 30,
  },
  inlineButton: {
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  featureRowDivider: {
    borderBottomWidth: 1,
    borderBottomColor: semantic.border.light,
    paddingBottom: 30,
    marginBottom: 30,
  },
  featureItem: {
    gap: 8,
  },
  featureRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  featureIcon: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  featureTitle: {
    fontSize: 20,
    fontFamily: poppinsWeights.semiBold,
    color: semantic.text.primary,
    marginBottom: 0,
    alignSelf: 'center',
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 14,
    fontFamily: poppinsWeights.regular,
    color: semantic.text.secondary,
  },
});

export default WhatYouGetSection;
