import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { semantic } from '../../utils/colors';
import { typography } from '../../utils/fonts';

type Props = {
  title: string;
  description?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
};

const Card: React.FC<Props> = ({ title, description, footer, children }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {!!description && <Text style={styles.description}>{description}</Text>}
      {children}
      {!!footer && <View style={styles.footer}>{footer}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexBasis: '48%',
    backgroundColor: semantic.background.secondary,
    borderWidth: 1,
    borderColor: semantic.border.light,
    borderRadius: 12,
    padding: 16,
  },
  title: {
    ...typography.h4,
    color: semantic.text.primary,
    marginBottom: 6,
  },
  description: {
    ...typography.body,
    color: semantic.text.secondary,
  },
  footer: {
    marginTop: 12,
  },
});

export default Card;
