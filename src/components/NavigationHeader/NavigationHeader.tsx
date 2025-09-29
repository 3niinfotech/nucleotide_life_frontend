import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { semantic, logo } from '../../utils/colors';
import { typography } from '../../utils/fonts';

interface NavigationHeaderProps {
  title?: string;
  showBackButton?: boolean;
  rightComponent?: React.ReactNode;
}

const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  title,
  showBackButton = false,
  rightComponent,
}) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Left Container - Back Button or Logo */}
        <View style={styles.leftContainer}>
          {showBackButton ? (
            <TouchableOpacity
              style={styles.backButton}
              onPress={handleBackPress}
            >
              <Text style={styles.backButtonText}>‹</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.logoContainer}>
              <View style={styles.logoIcon}>
                <Text style={styles.logoX1}>X</Text>
                <Text style={styles.logoX2}>X</Text>
              </View>
              <Text style={styles.logo}>Nucleotide</Text>
            </View>
          )}
        </View>

        {/* Center Container - Title */}
        <View style={styles.centerContainer}>
          {title && (
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
          )}
        </View>

        {/* Right Container - Custom Component */}
        <View style={styles.rightContainer}>{rightComponent}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: semantic.background.primary,
    borderBottomWidth: 1,
    borderBottomColor: semantic.border.light,
    shadowColor: semantic.shadow.light,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  centerContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: semantic.background.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 24,
    color: semantic.text.primary,
    fontWeight: 'bold',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  logoX1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: logo.teal,
    transform: [{ rotate: '45deg' }],
    marginRight: -8,
  },
  logoX2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: logo.purple,
    transform: [{ rotate: '-45deg' }],
  },
  logo: {
    ...typography.h4,
    color: semantic.text.primary,
  },
  title: {
    ...typography.h3,
    color: semantic.text.primary,
    textAlign: 'center',
  },
});

export default NavigationHeader;
