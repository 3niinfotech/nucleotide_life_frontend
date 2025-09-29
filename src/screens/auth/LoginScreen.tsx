import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Modal,
} from 'react-native';
import { AuthStackScreenProps } from '../../navigation/types';
import { useAppDispatch } from '../../hooks';
import { setActiveSection } from '../../store/slices/navigationSlice';
import { semantic } from '../../utils/colors';
import { typography } from '../../utils/fonts';
import { IcPhone } from '../../utils/iconUtil';

type Props = AuthStackScreenProps<'Login'>;

const LoginScreen: React.FC<Props> = ({ navigation: _navigation }) => {
  const dispatch = useAppDispatch();
  const [mobileNumber, setMobileNumber] = useState('');
  // OTP is tracked as individual digits; no single string state needed
  const [otpDigits, setOtpDigits] = useState(['', '', '', '']);
  // Track OTP flow via modal visibility; no separate flag required
  const [isLoading, setIsLoading] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const [focusedOtpIndex, setFocusedOtpIndex] = useState<number | null>(null);
  const otpRefs = useRef<(TextInput | null)[]>([null, null, null, null]);

  const handleSendOTP = async () => {
    console.log('handleSendOTP called, mobileNumber:', mobileNumber);

    if (!mobileNumber.trim()) {
      Alert.alert('Error', 'Please enter your mobile number');
      return;
    }

    console.log('Setting loading to true');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Timeout callback executing');
      setIsLoading(false);
      setShowOtpModal(true);
      setResendTimer(30);
      startResendTimer();
      console.log('Modal should be visible now');
    }, 500);
  };

  const handleVerifyOTP = async () => {
    const otpCode = otpDigits.join('');
    if (otpCode.length !== 4) {
      Alert.alert('Error', 'Please enter the complete 4-digit OTP');
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowOtpModal(false);
      // Set active section to home so menu highlights Home and content renders
      dispatch(setActiveSection('home'));
    }, 1000);
  };

  const handleResendOTP = () => {
    if (resendTimer > 0) return;

    setOtpDigits(['', '', '', '']);
    setResendTimer(30);
    startResendTimer();
    // Simulate resending OTP
  };

  const startResendTimer = () => {
    const timer = setInterval(() => {
      setResendTimer(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Store timer reference for cleanup
    return timer;
  };

  const handleMobileNumberChange = (value: string) => {
    // Remove any non-numeric characters
    const numericValue = value.replace(/[^0-9]/g, '');
    // Limit to 10 digits
    const limitedValue = numericValue.slice(0, 10);
    setMobileNumber(limitedValue);
  };

  const handleOtpDigitChange = (index: number, value: string) => {
    // Only allow single digit
    if (value.length > 1) return;

    // Remove non-numeric characters
    const numericValue = value.replace(/[^0-9]/g, '');

    const newOtpDigits = [...otpDigits];
    newOtpDigits[index] = numericValue;
    setOtpDigits(newOtpDigits);

    // Auto-focus next input if value is entered and not the last input
    if (numericValue && index < 3) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyPress = (index: number, key: string) => {
    // Handle backspace - focus previous input if current is empty
    if (key === 'Backspace' && !otpDigits[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Main Dashboard Access Section */}
          <View style={styles.dashboardSection}>
            <View style={styles.dashboardContent}>
              <Text style={styles.dashboardTitle}>Access Your Dashboard</Text>

              <View style={styles.loginCard}>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Mobile Number</Text>
                  <View style={styles.phoneInputContainer}>
                    <Text style={styles.countryCode}>+91</Text>
                    <TextInput
                      style={styles.phoneInput}
                      placeholder="Enter your mobile number"
                      placeholderTextColor={semantic.text.placeholder}
                      value={mobileNumber}
                      onChangeText={handleMobileNumberChange}
                      keyboardType="phone-pad"
                      maxLength={10}
                    />
                  </View>
                </View>

                <TouchableOpacity
                  style={styles.otpButton}
                  onPress={() => {
                    console.log('Get OTP button pressed');
                    handleSendOTP();
                  }}
                >
                  <Text style={styles.otpButtonText}>
                    {isLoading ? 'Sending...' : 'Get OTP'}
                  </Text>
                </TouchableOpacity>

                <Text style={styles.privacyNotice}>
                  Nucleotide does not share any of your personal information
                  with Google or Apple, including your genetic results.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* OTP Verification Modal */}
      <Modal
        visible={showOtpModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowOtpModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.otpModal}>
            {/* Phone Icon */}
            <View style={styles.phoneIcon}>
              <IcPhone />
            </View>

            {/* Modal Title */}
            <Text style={styles.modalTitle}>Mobile Verification</Text>

            {/* Instructions */}
            <Text style={styles.modalInstructions}>
              Please enter the 4 digit code sent to
            </Text>
            <Text style={styles.phoneNumber}>+91 {mobileNumber}</Text>

            {/* OTP Input Fields */}
            <View style={styles.otpContainer}>
              {otpDigits.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={ref => {
                    otpRefs.current[index] = ref;
                  }}
                  style={[
                    styles.otpInput,
                    digit ? styles.otpInputFilled : null,
                    focusedOtpIndex === index ? styles.otpInputFocused : null,
                  ]}
                  value={digit}
                  onChangeText={value => handleOtpDigitChange(index, value)}
                  onKeyPress={({ nativeEvent }) =>
                    handleOtpKeyPress(index, nativeEvent.key)
                  }
                  onFocus={() => setFocusedOtpIndex(index)}
                  onBlur={() => setFocusedOtpIndex(null)}
                  keyboardType="numeric"
                  maxLength={1}
                  textAlign="center"
                />
              ))}
            </View>

            {/* Resend Section */}
            <View style={styles.resendContainer}>
              <Text style={styles.resendText}>Didn't get the code?</Text>
              <TouchableOpacity
                onPress={handleResendOTP}
                disabled={resendTimer > 0}
              >
                <Text
                  style={[
                    styles.resendButton,
                    resendTimer > 0 ? styles.resendButtonDisabled : null,
                  ]}
                >
                  {resendTimer > 0 ? `Resend in ${resendTimer}s` : 'Resend'}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Verify Button */}
            <TouchableOpacity
              style={styles.verifyButton}
              onPress={handleVerifyOTP}
              disabled={isLoading}
            >
              <Text style={styles.verifyButtonText}>
                {isLoading ? 'Verifying...' : 'Verify'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: semantic.background.secondary,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  dashboardSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 60,
  },
  dashboardContent: {
    width: '100%',
    maxWidth: 600,
    alignItems: 'center',
  },
  dashboardTitle: {
    ...typography.h2,
    textAlign: 'center',
    marginBottom: 40,
    color: semantic.text.primary,
  },
  loginCard: {
    backgroundColor: semantic.background.primary,
    padding: 32,
    borderRadius: 8,
    width: '100%',
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputLabel: {
    ...typography.label,
    color: semantic.text.secondary,
    marginBottom: 8,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: semantic.border.medium,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: semantic.background.primary,
  },
  countryCode: {
    ...typography.body,
    color: semantic.text.secondary,
    marginRight: 8,
  },
  phoneInput: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    ...typography.body,
    color: semantic.text.primary,
  },
  otpButton: {
    backgroundColor: semantic.interactive.primary,
    paddingVertical: 16,
    borderRadius: 8,
    marginBottom: 30,
    shadowColor: semantic.shadow.colored,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  otpButtonText: {
    ...typography.button,
    color: semantic.text.inverse,
    textAlign: 'center',
  },
  privacyNotice: {
    ...typography.small,
    color: semantic.text.tertiary,
    textAlign: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  otpModal: {
    backgroundColor: semantic.background.primary,
    borderRadius: 16,
    padding: 32,
    width: '100%',
    maxWidth: '30%',
    alignItems: 'center',
    shadowColor: semantic.shadow.light,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 8,
  },
  phoneIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: semantic.background.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  modalTitle: {
    ...typography.h3,
    color: semantic.text.primary,
    marginBottom: 16,
    textAlign: 'center',
  },
  modalInstructions: {
    ...typography.body,
    color: semantic.text.secondary,
    textAlign: 'center',
    marginBottom: 8,
  },
  phoneNumber: {
    ...typography.body,
    color: semantic.interactive.primary,
    fontWeight: '600',
    marginBottom: 32,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
    width: '100%',
    maxWidth: 280,
  },
  otpInput: {
    width: 60,
    height: 60,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#F9FAFB',
    ...typography.h4,
    color: semantic.text.primary,
    textAlign: 'center',
  },
  otpInputFilled: {
    borderColor: semantic.interactive.primary,
    backgroundColor: 'rgba(135, 106, 249, 0.1)', // Purple with 10% opacity
    color: semantic.interactive.primary, // Purple text
  },
  otpInputFocused: {
    borderColor: semantic.interactive.primary,
    borderWidth: 2,
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  resendText: {
    ...typography.caption,
    color: semantic.text.secondary,
    marginRight: 8,
  },
  resendButton: {
    ...typography.caption,
    color: semantic.interactive.primary,
    fontWeight: '600',
  },
  resendButtonDisabled: {
    color: semantic.text.tertiary,
  },
  verifyButton: {
    backgroundColor: semantic.interactive.primary,
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  verifyButtonText: {
    ...typography.button,
    color: semantic.text.inverse,
    fontWeight: '600',
  },
});

export default LoginScreen;
