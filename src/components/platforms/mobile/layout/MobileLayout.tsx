import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { semantic } from '../../../utils/colors';

interface MobileLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  safeArea?: boolean;
  backgroundColor?: string;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({
  children,
  header,
  footer,
  safeArea = true,
  backgroundColor = semantic.background.primary,
}) => {
  const Container = safeArea ? SafeAreaView : View;

  return (
    <Container style={[styles.container, { backgroundColor }]}>
      {header && <View style={styles.header}>{header}</View>}

      <View style={styles.content}>{children}</View>

      {footer && <View style={styles.footer}>{footer}</View>}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    zIndex: 100,
  },
  content: {
    flex: 1,
  },
  footer: {
    zIndex: 100,
  },
});

export default MobileLayout;

