import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { semantic } from '../../utils/colors';
import { typography } from '../../utils/fonts';

type Item = { id: string; title: string; content: string };

type Props = {
  items: Item[];
};

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Accordion: React.FC<Props> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <View style={styles.container}>
      {items.map(item => {
        const open = item.id === openId;
        return (
          <View key={item.id} style={styles.item}>
            <TouchableOpacity
              onPress={() => toggle(item.id)}
              style={styles.header}
            >
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.chevron}>{open ? '−' : '+'}</Text>
            </TouchableOpacity>
            {open && <Text style={styles.content}>{item.content}</Text>}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: semantic.border.light,
    backgroundColor: semantic.background.secondary,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: semantic.border.light,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...typography.bodyLarge,
    color: semantic.text.primary,
    flex: 1,
  },
  chevron: {
    ...typography.h4,
    color: semantic.text.secondary,
  },
  content: {
    ...typography.body,
    color: semantic.text.secondary,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});

export default Accordion;
