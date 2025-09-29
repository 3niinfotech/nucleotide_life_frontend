import React, { useCallback, useMemo } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Pressable,
  Platform,
} from 'react-native';
import { semantic } from '../../utils/colors';
import { poppinsWeights } from '../../utils/fonts';

type Props = {
  label: string;
  onPress?: () => void;
  style?: ViewStyle;
  variant?: 'primary' | 'secondary';
  labelStyle?: TextStyle;
  labelTextColor?: string;
  disabled?: boolean;
  loading?: boolean;
  testID?: string;
};

const PrimaryButton: React.FC<Props> = React.memo(
  ({
    label,
    onPress,
    style,
    variant = 'primary',
    labelStyle,
    labelTextColor,
    disabled = false,
    loading = false,
    testID,
  }) => {
    const textStyle = useMemo(() => {
      const baseStyle =
        variant === 'primary' ? styles.primaryText : styles.secondaryText;
      const colorStyle = labelTextColor ? { color: labelTextColor } : {};
      const disabledStyle = disabled ? { opacity: 0.6 } : {};
      return [baseStyle, colorStyle, disabledStyle, labelStyle];
    }, [variant, labelTextColor, disabled, labelStyle]);

    const containerStyle = useMemo(
      () => [
        styles.base,
        variant === 'primary' ? styles.primary : styles.secondary,
        disabled && styles.disabled,
        style,
      ],
      [variant, disabled, style],
    );

    const handlePress = useCallback(() => {
      if (!disabled && !loading && onPress) {
        onPress();
      }
    }, [disabled, loading, onPress]);

    const ButtonComponent =
      Platform.OS === 'ios' ? Pressable : TouchableOpacity;

    return (
      <ButtonComponent
        onPress={handlePress}
        style={containerStyle}
        disabled={disabled || loading}
        testID={testID}
        accessibilityRole="button"
        accessibilityState={{ disabled: disabled || loading }}
      >
        <Text style={textStyle}>{loading ? 'Loading...' : label}</Text>
      </ButtonComponent>
    );
  },
);

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
  },
  primary: {
    backgroundColor: semantic.interactive.primary,
    borderColor: semantic.interactive.primary,
    shadowColor: semantic.shadow.light,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  primaryText: {
    color: semantic.text.inverse,
    fontSize: 16,
    fontFamily: poppinsWeights.semiBold,
  },
  secondary: {
    backgroundColor: semantic.interactive.secondary,
    borderColor: semantic.border.medium,
    borderWidth: 1,
  },
  secondaryText: {
    fontSize: 16,
    fontFamily: poppinsWeights.medium,
    color: semantic.text.primary,
  },
  disabled: {
    opacity: 0.6,
  },
});

export default PrimaryButton;
