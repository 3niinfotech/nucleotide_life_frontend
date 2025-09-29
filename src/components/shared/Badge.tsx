import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { semantic, primary } from '../../utils/colors';
import { typography } from '../../utils/fonts';

type Props = {
  label: string;
  variant?: 'teal' | 'purple' | 'gray';
};

const Badge: React.FC<Props> = ({ label, variant = 'teal' }) => {
  const styleByVariant =
    variant === 'purple'
      ? { backgroundColor: primary.purple }
      : variant === 'gray'
      ? { backgroundColor: semantic.background.tertiary }
      : { backgroundColor: primary.teal };

  const textColor =
    variant === 'gray' ? semantic.text.primary : semantic.text.inverse;

  return (
    <View style={[styles.container, styleByVariant]}>
      <Text style={[styles.text, { color: textColor }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
  },
  text: {
    ...typography.caption,
    fontWeight: '600',
  },
});

export default Badge;
