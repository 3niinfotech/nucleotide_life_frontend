import React, { useState, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  TextInput,
  Image,
} from 'react-native';
import { poppinsWeights } from '../../utils/fonts';
import { semantic, logo, colors, special, neutral } from '../../utils/colors';
import {
  IcFb,
  IcInsta,
  IcGooglePlus,
  IcX,
  IcLinkedin,
  IcAppWhiteTxtIcon,
} from '../../utils/iconUtil';
import { ImgFooterBackNucleotide } from '../../utils/imageUtil';

const Footer: React.FC = React.memo(() => {
  const [email, setEmail] = useState('');

  const handleWebsitePress = useCallback((url: string) => {
    Linking.openURL(url);
  }, []);

  const handleSubscribe = useCallback(() => {
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
  }, [email]);

  const socialLinks = useMemo(
    () => [
      {
        icon: <IcFb width={20} height={20} />,
        url: 'https://facebook.com/nucleotide',
      },
      {
        icon: <IcInsta width={20} height={20} />,
        url: 'https://instagram.com/nucleotide',
      },
      {
        icon: <IcGooglePlus width={20} height={20} />,
        url: 'https://plus.google.com/nucleotide',
      },
      {
        icon: <IcX width={20} height={20} />,
        url: 'https://twitter.com/nucleotide',
      },
      {
        icon: <IcLinkedin width={20} height={20} />,
        url: 'https://linkedin.com/company/nucleotide',
      },
    ],
    [],
  );

  const linkSections = useMemo(
    () => [
      {
        title: 'Privacy & Legal',
        links: [
          'DNA Privacy and Security',
          'Terms and Conditions',
          'Refund and Cancellation',
          'Shipping and Delivery',
        ],
      },
      {
        title: 'Company',
        links: ['Investor Info and Roadmap', 'Careers', 'About Us', 'Our Team'],
      },
      {
        title: 'Resources',
        links: ['Blog', 'Research Papers', 'Sample Reports', 'Upload Raw DNA'],
      },
      {
        title: 'Support',
        links: ['FAQs', 'Support Center', 'Contact Us', 'Track Your Order'],
      },
    ],
    [],
  );

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={ImgFooterBackNucleotide}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* Main Footer Content */}
      <View style={styles.footerContent}>
        {/* Left Section - Nucleotide Info */}
        <View style={styles.leftSection}>
          <View style={styles.logoSection}>
            <View style={styles.footerLogo}>
              <IcAppWhiteTxtIcon style={styles.logoIcon} />
            </View>
            <Text style={styles.description}>
              Decoding your DNA to reveal disease risk, drug response, vitamin
              needs, and cognitive insights for a healthier future.
            </Text>
            <View style={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.socialLink}
                  onPress={() => handleWebsitePress(social.url)}
                >
                  {social.icon}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* Middle Sections - Links */}
        <View style={styles.middleSection}>
          {linkSections.map((section, sectionIndex) => (
            <View key={sectionIndex} style={styles.linkSection}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              {section.links.map((link, linkIndex) => (
                <TouchableOpacity key={linkIndex} style={styles.linkItem}>
                  <Text style={styles.linkText}>{link}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>

      {/* Footer Bottom Row - Copyright and Newsletter */}
      <View style={styles.footerBottom}>
        <Text style={styles.copyright}>
          © 2024 Nucleotide. All rights reserved.
        </Text>
        <View style={styles.newsletterContainer}>
          <TextInput
            style={styles.emailInput}
            placeholder="Enter your email"
            placeholderTextColor={colors.withOpacity(
              semantic.text.placeholder,
              0.5,
            )}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TouchableOpacity
            style={styles.subscribeButton}
            onPress={handleSubscribe}
          >
            <Text style={styles.subscribeButtonText}>Subscribe</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: special.footer,
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    bottom: 0,
    left: '25%',
    transform: [{ translateX: -50 }],
    height: 200,
    opacity: 0.3,
    zIndex: 0,
    width: '70%',
  },
  footerContent: {
    flexDirection: 'row',
    paddingVertical: 60,
    paddingHorizontal: 24,
    maxWidth: 1400,
    alignSelf: 'center',
    width: '100%',
  },
  leftSection: {
    flex: 1,
    marginRight: 40,
  },
  logoSection: {
    marginBottom: 20,
  },
  footerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  logoX1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: logo.teal,
    transform: [{ rotate: '45deg' }],
    marginRight: -6,
  },
  logoX2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: logo.purple,
    transform: [{ rotate: '-45deg' }],
  },
  description: {
    fontFamily: poppinsWeights.regular,
    fontSize: 14,
    color: semantic.text.inverse,
    marginBottom: 24,
    width: '70%',
  },
  socialLinks: {
    flexDirection: 'row',
    gap: 12,
  },
  socialLink: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleSection: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linkSection: {
    flex: 1,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontFamily: poppinsWeights.semiBold,
    fontSize: 16,
    color: semantic.text.inverse,
    marginBottom: 16,
  },
  linkItem: {
    marginBottom: 12,
  },
  linkText: {
    color: semantic.text.inverse,
    fontFamily: poppinsWeights.regular,
    fontSize: 14,
  },
  newsletterContainer: {
    backgroundColor: colors.withOpacity(semantic.background.overlay, 0.2),
    borderRadius: 8,
    overflow: 'hidden',
    flexDirection: 'row',
    maxWidth: 400,
    width: 400,
  },
  emailInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontFamily: poppinsWeights.regular,
    fontSize: 14,
    color: neutral.gray200,
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: semantic.border.divider,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  subscribeButton: {
    backgroundColor: semantic.interactive.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  subscribeButtonText: {
    fontFamily: poppinsWeights.medium,
    fontSize: 14,
    color: semantic.text.inverse,
  },
  footerBottom: {
    borderTopWidth: 1,
    borderTopColor: semantic.border.divider,
    paddingVertical: 20,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 1400,
    alignSelf: 'center',
    width: '100%',
  },
  copyright: {
    color: semantic.text.placeholder,
    textAlign: 'left',
    fontFamily: poppinsWeights.regular,
    fontSize: 14,
  },
});

export default Footer;
