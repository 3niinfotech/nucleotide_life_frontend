import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { semantic } from '../../../utils/colors';
import { useResponsive } from '../../../hooks/useResponsive';

interface WebLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  footer?: React.ReactNode;
  maxWidth?: number;
  padding?: number;
}

const WebLayout: React.FC<WebLayoutProps> = ({
  children,
  header,
  sidebar,
  footer,
  maxWidth = 1200,
  padding = 24,
}) => {
  const { isDesktop, isTablet } = useResponsive();

  return (
    <View style={styles.container}>
      {header && <View style={styles.header}>{header}</View>}

      <View style={styles.mainContent}>
        {sidebar && isDesktop && <View style={styles.sidebar}>{sidebar}</View>}

        <ScrollView
          style={styles.content}
          contentContainerStyle={[
            styles.contentContainer,
            {
              maxWidth: isDesktop ? maxWidth : undefined,
              paddingHorizontal: isDesktop ? padding : 16,
            },
          ]}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </View>

      {footer && <View style={styles.footer}>{footer}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: semantic.background.primary,
    minHeight: '100vh',
  },
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backgroundColor: semantic.background.primary,
    borderBottomWidth: 1,
    borderBottomColor: semantic.border.light,
  },
  mainContent: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: 280,
    backgroundColor: semantic.background.secondary,
    borderRightWidth: 1,
    borderRightColor: semantic.border.light,
    padding: 16,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingVertical: 24,
    alignSelf: 'center',
    width: '100%',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: semantic.border.light,
    backgroundColor: semantic.background.secondary,
  },
});

export default WebLayout;

