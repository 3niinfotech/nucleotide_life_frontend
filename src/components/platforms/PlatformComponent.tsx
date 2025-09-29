import React from 'react';
import { selectPlatformComponent } from '../../utils/platform';

// Generic platform component selector
export interface PlatformComponentProps<T = any> {
  web: React.ComponentType<T>;
  mobile: React.ComponentType<T>;
  ios?: React.ComponentType<T>;
  android?: React.ComponentType<T>;
  [key: string]: any;
}

export const PlatformComponent = <T,>({
  web: WebComponent,
  mobile: MobileComponent,
  ios: IOSComponent,
  android: AndroidComponent,
  ...props
}: PlatformComponentProps<T>) => {
  const SelectedComponent = selectPlatformComponent(
    WebComponent,
    MobileComponent,
    IOSComponent,
    AndroidComponent,
  );

  return <SelectedComponent {...props} />;
};

// Higher-order component for platform-specific rendering
export const withPlatform = <P extends object>(
  webComponent: React.ComponentType<P>,
  mobileComponent: React.ComponentType<P>,
  iosComponent?: React.ComponentType<P>,
  androidComponent?: React.ComponentType<P>,
) => {
  return React.forwardRef<any, P>((props, ref) => {
    const SelectedComponent = selectPlatformComponent(
      webComponent,
      mobileComponent,
      iosComponent,
      androidComponent,
    );

    return <SelectedComponent ref={ref} {...props} />;
  });
};

// Conditional rendering based on platform
export const PlatformView: React.FC<{
  web?: React.ReactNode;
  mobile?: React.ReactNode;
  ios?: React.ReactNode;
  android?: React.ReactNode;
  children?: React.ReactNode;
}> = ({ web, mobile, ios, android, children }) => {
  const { getPlatform } = require('../../utils/platform');
  const platform = getPlatform();

  switch (platform) {
    case 'ios':
      return <>{ios || children}</>;
    case 'android':
      return <>{android || children}</>;
    case 'web':
      return <>{web || children}</>;
    default:
      return <>{mobile || children}</>;
  }
};

