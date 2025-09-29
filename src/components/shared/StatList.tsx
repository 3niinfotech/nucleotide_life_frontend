import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { semantic } from '../../utils/colors';
import { typography } from '../../utils/fonts';

type Props = {
  items: string[];
};

const StatList: React.FC<Props> = ({ items }) => {
  return (
    <View style={styles.container}>
      {items.map((text, idx) => (
        <View key={idx} style={styles.row}>
          <Text style={styles.bullet}>✓</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bullet: {
    marginRight: 8,
    color: semantic.interactive.primary,
  },
  text: {
    ...typography.caption,
    color: semantic.text.secondary,
  },
});

export default StatList;
