import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

type Point = { x: number; y: number };

type Props = {
  colors: string[];
  start?: Point;
  end?: Point;
  style?: ViewStyle | ViewStyle[];
  children?: React.ReactNode;
};

// Simple web fallback using CSS linear-gradient via react-native-web
const LinearGradient: React.FC<Props> = ({
  colors,
  start,
  end,
  style,
  children,
}) => {
  const angleDeg = getAngleDegrees(start, end);
  const gradient = `linear-gradient(${angleDeg}deg, ${colors.join(', ')})`;

  return (
    <View
      style={[
        style as any,
        styles.base,
        {
          // @ts-ignore react-native-web supports backgroundImage
          backgroundImage: gradient,
          // Fallback color
          backgroundColor: colors[0] || 'transparent',
        },
      ]}
    >
      {children}
    </View>
  );
};

function getAngleDegrees(start?: Point, end?: Point): number {
  // Defaults to left -> right
  const s = start ?? { x: 0, y: 0 };
  const e = end ?? { x: 1, y: 0 };
  const dx = e.x - s.x;
  const dy = e.y - s.y;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  // CSS gradient angle 0deg points up; adjust so 0deg = left->right
  return deg;
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 6,
  },
});

export default LinearGradient;
