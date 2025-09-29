# Nucleotide Life Frontend

A React Native Web application built with Redux for a life sciences research organization.

## Features

- **Modern UI Design**: Clean, professional interface inspired by life sciences themes
- **Redux State Management**: Proper Redux store structure with slices
- **Responsive Design**: Works on both web and mobile platforms
- **Component Architecture**: Modular, reusable components
- **TypeScript Support**: Full TypeScript integration

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header/          # Navigation header
│   ├── Hero/            # Main hero section
│   └── Footer/          # Footer component
├── store/               # Redux store configuration
│   └── slices/          # Redux slices for state management
├── hooks/               # Custom React hooks
└── types/               # TypeScript type definitions
```

## Components

### Header

- Navigation menu with active state management
- Responsive design (desktop/mobile)
- Brand logo and tagline

### Hero Section

- Main landing content with call-to-action buttons
- Statistics showcase
- About section with company information
- Services preview cards

### Footer

- Company information and contact details
- Quick links and social media
- Professional styling

## Redux Store

### App Slice

- Loading states
- User authentication
- Theme management
- Current page tracking

### Navigation Slice

- Active section tracking
- Mobile menu state
- Navigation helpers

## Getting Started

### Prerequisites

- Node.js >= 20
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
# Run web development server
npm run web

# Run mobile development
npm run android
npm run ios
```

### Build

```bash
# Build for web production
npm run build:web
```

## Available Scripts

- `npm run web` - Start web development server
- `npm run android` - Run Android app
- `npm run ios` - Run iOS app
- `npm run build:web` - Build web production bundle
- `npm run clean` - Clean build artifacts

## Technologies Used

- React Native 0.81.4
- React 19.1.0
- Redux Toolkit 2.9.0
- React Redux 9.2.0
- Redux Persist 6.0.0
- TypeScript 5.8.3
- Webpack 5.101.3

## Browser Support

The web version supports all modern browsers including:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Development Notes

- Uses React Native Web for web compatibility
- Redux state is persisted using AsyncStorage
- Responsive design with platform-specific optimizations
- TypeScript for type safety
- Modular component architecture for maintainability
