import React from 'react';
import {ScrollView, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export function NucleotideScreen(): React.JSX.Element {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.brand}>Nucleotide.me</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.primaryCta}>
            <Text style={styles.primaryCtaText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.hero}>
        <View style={styles.heroText}>
          <Text style={styles.title}>Build your digital genome</Text>
          <Text style={styles.subtitle}>All your links, identity, and insights in one profile.</Text>
          <View style={styles.ctaRow}>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Create your page</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Learn more</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.heroMedia}>
          <View style={styles.mockCard}>
            <View style={styles.avatar} />
            <View style={styles.mockLineWide} />
            <View style={styles.mockLine} />
            <View style={styles.mockLine} />
            <View style={[styles.mockLine, {width: '60%'}]} />
          </View>
        </View>
      </View>

      <View style={styles.features}>
        {[
          {title: 'Unified profile', desc: 'Bring links, socials, and content together.'},
          {title: 'Custom themes', desc: 'Make it yours with flexible styling.'},
          {title: 'Analytics', desc: 'See what resonates with your audience.'},
        ].map((f, idx) => (
          <View key={idx} style={styles.feature}>
            <View style={styles.featureIcon} />
            <Text style={styles.featureTitle}>{f.title}</Text>
            <Text style={styles.featureDesc}>{f.desc}</Text>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© {new Date().getFullYear()} Nucleotide.me</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0F',
  },
  content: {
    paddingBottom: 48,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(255,255,255,0.08)',
  },
  brand: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 12,
  },
  primaryCta: {
    backgroundColor: '#6C5CE7',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
  },
  primaryCtaText: {
    color: 'white',
    fontWeight: '600',
  },
  hero: {
    paddingHorizontal: 20,
    paddingTop: 32,
    gap: 24,
  },
  heroText: {
    gap: 12,
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: 0.2,
  },
  subtitle: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 16,
    lineHeight: 22,
  },
  ctaRow: {
    marginTop: 8,
    flexDirection: 'row',
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#6C5CE7',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  primaryButtonText: {
    color: 'white',
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  secondaryButtonText: {
    color: 'white',
    fontWeight: '700',
  },
  heroMedia: {
    alignItems: 'center',
  },
  mockCard: {
    width: '100%',
    maxWidth: 560,
    backgroundColor: '#12121A',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    padding: 16,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#6C5CE7',
    marginBottom: 12,
  },
  mockLineWide: {
    height: 12,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 6,
    marginBottom: 10,
    width: '80%',
  },
  mockLine: {
    height: 10,
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 5,
    marginBottom: 8,
    width: '90%',
  },
  features: {
    paddingHorizontal: 20,
    paddingTop: 32,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  feature: {
    flexBasis: '48%',
    backgroundColor: '#12121A',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  featureIcon: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: '#6C5CE7',
    marginBottom: 10,
  },
  featureTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  featureDesc: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    lineHeight: 20,
  },
  footer: {
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  footerText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 12,
  },
});

