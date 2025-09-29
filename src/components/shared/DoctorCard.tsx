import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { semantic } from '../../utils/colors';
import { typography } from '../../utils/fonts';

type Props = {
  name: string;
  title: string;
};

const DoctorCard: React.FC<Props> = ({ name, title }) => {
  return (
    <View style={styles.card}>
      <View style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexBasis: '23%',
    alignItems: 'center',
    backgroundColor: semantic.background.primary,
    borderWidth: 1,
    borderColor: semantic.border.light,
    borderRadius: 12,
    padding: 16,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: semantic.background.tertiary,
    marginBottom: 12,
  },
  name: {
    ...typography.label,
    color: semantic.text.primary,
  },
  title: {
    ...typography.small,
    color: semantic.text.secondary,
  },
});

export default DoctorCard;
