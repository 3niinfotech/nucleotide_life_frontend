# Nucleotide Life Frontend

A modern React Native application built with TypeScript, Redux Toolkit, and React Navigation. This project demonstrates a professional, scalable architecture for cross-platform mobile and web development.

## 🚀 Features

- **Cross-Platform**: iOS, Android, and Web support
- **TypeScript**: Full type safety throughout the application
- **Redux Toolkit**: Modern state management with Redux Toolkit
- **React Navigation**: Type-safe navigation with stack and tab navigators
- **Theme System**: Light/Dark mode with customizable themes
- **Authentication**: Complete auth flow with login, register, and forgot password
- **Form Handling**: Custom form hooks with validation
- **API Integration**: Structured API service layer
- **Responsive Design**: Adaptive UI for different screen sizes
- **Professional Architecture**: Clean, maintainable, and scalable code structure

## 📱 Screenshots

The app includes:

- **Authentication Flow**: Login, Register, Forgot Password screens
- **Main App**: Home, Profile, Settings, and Details screens
- **Theme Toggle**: Switch between light and dark modes
- **Responsive UI**: Adapts to different screen sizes

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   └── common/          # Common components (Button, Input, Card, etc.)
├── contexts/            # React contexts
├── hooks/               # Custom React hooks
│   ├── useAuth.ts       # Authentication hook
│   ├── useTheme.ts      # Theme management hook
│   ├── useForm.ts       # Form handling hook
│   └── useApi.ts        # API call hook
├── navigation/          # Navigation configuration
│   ├── AuthStack.tsx    # Authentication stack
│   ├── MainStack.tsx    # Main app stack
│   └── RootNavigator.tsx # Root navigation
├── screens/             # Screen components
│   ├── auth/            # Authentication screens
│   ├── main/            # Main app screens
│   └── SplashScreen.tsx # Loading screen
├── services/            # API and external services
│   ├── ApiService.ts    # Base API service
│   └── AuthService.ts   # Authentication service
├── store/               # Redux store configuration
│   ├── slices/          # Redux slices
│   │   ├── authSlice.ts # Authentication state
│   │   └── themeSlice.ts # Theme state
│   └── index.ts         # Store configuration
├── types/               # TypeScript type definitions
│   ├── auth.ts          # Authentication types
│   ├── theme.ts         # Theme types
│   ├── navigation.ts    # Navigation types
│   └── common.ts        # Common types
├── utils/               # Utility functions
│   └── platform.ts      # Platform detection
└── assets/              # Static assets
    ├── images/          # Image assets
    ├── icons/           # Icon assets
    └── fonts/           # Font assets
```

## 🛠️ Tech Stack

- **React Native 0.81.4** - Cross-platform mobile framework
- **TypeScript** - Type-safe JavaScript
- **Redux Toolkit** - State management
- **React Navigation 6** - Navigation library
- **Redux Persist** - State persistence
- **React Native Safe Area Context** - Safe area handling
- **React Native Vector Icons** - Icon library
- **AsyncStorage** - Local storage
- **React Native Keychain** - Secure storage

## 🚀 Getting Started

### Prerequisites

- Node.js (version 20 or higher)
- React Native CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd nucleotide_life_frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. For iOS development:
   ```bash
   cd ios && pod install && cd ..
   ```

### Running the App

- **iOS**: `npm run ios`
- **Android**: `npm run android`
- **Web**: `npm run web`
- **Start Metro**: `npm start`

### Available Scripts

- `npm start` - Start the Metro bundler
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run web` - Run on web browser
- `npm run web:build` - Build for web production
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run clean` - Clean build artifacts

## 🎨 Theme System

The app includes a comprehensive theme system with:

- **Light/Dark Mode**: Toggle between themes
- **Customizable Colors**: Primary, secondary, success, warning, error colors
- **Typography**: Consistent text styles (h1-h4, body, caption, button)
- **Spacing**: Standardized spacing values
- **Border Radius**: Consistent border radius values

## 🔐 Authentication

The authentication system includes:

- **Login Screen**: Email/password authentication
- **Register Screen**: User registration with validation
- **Forgot Password**: Password reset functionality
- **Secure Storage**: Token storage with Keychain
- **Auto-login**: Persistent authentication state

## 📱 Navigation

Navigation is structured with:

- **Auth Stack**: Login, Register, Forgot Password
- **Main Stack**: Home, Profile, Settings, Details
- **Type Safety**: Full TypeScript support for navigation
- **Deep Linking**: Support for deep linking (configurable)

## 🔧 API Integration

The API layer provides:

- **Base Service**: Configurable HTTP client
- **Authentication Service**: Login, register, profile management
- **Error Handling**: Comprehensive error handling
- **Token Management**: Automatic token refresh
- **Request/Response Interceptors**: Centralized request handling

## 🧪 Testing

The project is set up for testing with:

- **Jest**: Testing framework
- **React Native Testing Library**: Component testing
- **TypeScript**: Type checking

## 📦 Building for Production

### iOS

```bash
npm run ios -- --configuration Release
```

### Android

```bash
npm run android -- --variant=release
```

### Web

```bash
npm run web:build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:

- Create an issue in the repository
- Check the documentation
- Review the code examples

## 🔄 Updates

This project follows modern React Native best practices and is regularly updated to use the latest stable versions of dependencies.

---

**Built with ❤️ using React Native and TypeScript**
