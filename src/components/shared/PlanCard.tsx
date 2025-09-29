import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { semantic, primary } from '../../utils/colors';
import { typography } from '../../utils/fonts';
import PrimaryButton from './PrimaryButton';
import Badge from './Badge';

type Props = {
  title: string;
  price: string;
  description?: string;
  badge?: 'New' | 'Popular' | 'Best Value' | null;
  cta?: string;
};

const PlanCard: React.FC<Props> = ({
  title,
  price,
  description,
  badge,
  cta = 'Choose Plan',
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{title}</Text>
        {!!badge && (
          <Badge
            label={badge}
            variant={badge === 'Popular' ? 'purple' : 'teal'}
          />
        )}
      </View>
      <Text style={styles.price}>{price}</Text>
      {!!description && <Text style={styles.description}>{description}</Text>}
      <PrimaryButton label={cta} style={{ marginTop: 12 }} />
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
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    ...typography.h4,
    color: semantic.text.primary,
  },
  price: {
    ...typography.h3,
    color: primary.purple,
    marginTop: 8,
  },
  description: {
    ...typography.caption,
    color: semantic.text.secondary,
    marginTop: 8,
  },
});

export default PlanCard;
