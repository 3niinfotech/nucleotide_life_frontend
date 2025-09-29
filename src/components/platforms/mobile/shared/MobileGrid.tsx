import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

interface MobileGridProps {
  children: React.ReactNode;
  columns?: number;
  gap?: number;
  horizontal?: boolean;
  showsHorizontalScrollIndicator?: boolean;
  contentContainerStyle?: any;
}

const MobileGrid: React.FC<MobileGridProps> = ({
  children,
  columns = 1,
  gap = 16,
  horizontal = false,
  showsHorizontalScrollIndicator = false,
  contentContainerStyle,
}) => {
  const childrenArray = React.Children.toArray(children);

  if (horizontal) {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        contentContainerStyle={[
          styles.horizontalContainer,
          { gap },
          contentContainerStyle,
        ]}
      >
        {childrenArray.map((child, index) => (
          <View key={index} style={styles.horizontalItem}>
            {child}
          </View>
        ))}
      </ScrollView>
    );
  }

  // Vertical grid layout
  const rows = [];
  for (let i = 0; i < childrenArray.length; i += columns) {
    const rowChildren = childrenArray.slice(i, i + columns);
    rows.push(
      <View key={i} style={[styles.row, { gap }]}>
        {rowChildren.map((child, index) => (
          <View key={index} style={[styles.gridItem, { flex: 1 }]}>
            {child}
          </View>
        ))}
      </View>,
    );
  }

  return <View style={[styles.container, { gap }]}>{rows}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontalContainer: {
    paddingHorizontal: 16,
  },
  horizontalItem: {
    marginRight: 16,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  gridItem: {
    marginHorizontal: 8,
  },
});

export default MobileGrid;

