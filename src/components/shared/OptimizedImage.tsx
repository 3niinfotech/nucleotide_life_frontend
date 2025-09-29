import React, { useState, useCallback, useMemo } from 'react';
import {
  Image,
  View,
  StyleSheet,
  ImageStyle,
  ViewStyle,
  ActivityIndicator,
  Text,
} from 'react-native';
import { semantic } from '../../utils/colors';
import { useImagePerformance } from '../../hooks/usePerformance';

interface OptimizedImageProps {
  source: any;
  style?: ImageStyle;
  containerStyle?: ViewStyle;
  placeholder?: React.ReactNode;
  errorFallback?: React.ReactNode;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
  showLoadingIndicator?: boolean;
  testID?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = React.memo(
  ({
    source,
    style,
    containerStyle,
    placeholder,
    errorFallback,
    resizeMode = 'cover',
    showLoadingIndicator = true,
    testID,
  }) => {
    const { isLoaded, hasError, handleLoad, handleError } =
      useImagePerformance();
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = useCallback(() => {
      setIsLoading(false);
      handleLoad();
    }, [handleLoad]);

    const handleImageError = useCallback(() => {
      setIsLoading(false);
      handleError();
    }, [handleError]);

    const containerStyles = useMemo(
      () => [styles.container, containerStyle],
      [containerStyle],
    );

    const imageStyles = useMemo(() => [styles.image, style], [style]);

    const renderContent = () => {
      if (hasError) {
        return (
          errorFallback || (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>Failed to load image</Text>
            </View>
          )
        );
      }

      if (isLoading && showLoadingIndicator) {
        return (
          <View style={styles.loadingContainer}>
            <ActivityIndicator
              size="small"
              color={semantic.interactive.primary}
            />
          </View>
        );
      }

      if (isLoading && placeholder) {
        return placeholder;
      }

      return null;
    };

    return (
      <View style={containerStyles} testID={testID}>
        <Image
          source={source}
          style={imageStyles}
          resizeMode={resizeMode}
          onLoad={handleImageLoad}
          onError={handleImageError}
          fadeDuration={200}
          loadingIndicatorSource={undefined}
        />
        {renderContent()}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    backgroundColor: semantic.background.secondary,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: semantic.background.secondary,
  },
  errorContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: semantic.background.secondary,
  },
  errorText: {
    ...typography.caption,
    color: semantic.text.tertiary,
    textAlign: 'center',
  },
});

export default OptimizedImage;
