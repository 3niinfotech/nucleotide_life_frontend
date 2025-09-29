import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { semantic } from '../../utils/colors';
import { typography } from '../../utils/fonts';

type Props = {
  name: string;
  rating?: number; // 1-5
  text: string;
};

const TestimonialCard: React.FC<Props> = ({ name, rating = 5, text }) => {
  return (
    <View style={styles.card}>
      <View style={styles.starsRow}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Text
            key={i}
            style={[styles.star, { opacity: i < rating ? 1 : 0.25 }]}
          >
            ★
          </Text>
        ))}
      </View>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.name}>— {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexBasis: '23%',
    backgroundColor: semantic.background.primary,
    borderWidth: 1,
    borderColor: semantic.border.light,
    borderRadius: 12,
    padding: 16,
  },
  starsRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  star: {
    color: '#f5b301',
    marginRight: 2,
  },
  text: {
    ...typography.caption,
    color: semantic.text.secondary,
    marginBottom: 10,
  },
  name: {
    ...typography.label,
    color: semantic.text.primary,
  },
});

export default TestimonialCard;
