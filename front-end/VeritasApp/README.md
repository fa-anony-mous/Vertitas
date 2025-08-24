# Veritas Frontend

Veritas is a personal AI analyst providing verifiable truth about products through blockchain-verified analysis.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Expo CLI

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npx expo start
   ```

## 🎨 UI Framework

This project uses **Tamagui** for modern, responsive UI components:

- **Tamagui Components**: All UI elements use `YStack`, `XStack`, `Text`, `Button`, `Card`, etc.
- **Theme Tokens**: Colors and spacing use theme tokens like `$blue10`, `$gray11`, `$space.4`
- **Responsive Design**: Uses Tamagui's responsive props where needed

## 📦 Key Dependencies

- `tamagui` - Modern UI framework
- `zustand` - Simple state management
- `axios` - HTTP client for API calls
- `react-native-webview` - In-app browser component
- `@burnt-labs/xion-js-mobile` - XION blockchain SDK
- `expo-web-browser` - External link handling

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AnalysisCard.tsx
│   ├── LoadingSpinner.tsx
│   └── ProofButton.tsx
├── screens/            # Screen components
│   ├── SearchScreen.tsx
│   └── AnalysisScreen.tsx
├── store/              # Zustand state management
├── services/           # API services
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## 🎯 Key Features

- **Modern UI**: Clean, responsive design using Tamagui
- **Type Safety**: Full TypeScript support
- **State Management**: Zustand for simple, efficient state management
- **Component-Based**: Reusable, single-responsibility components
- **Theme Support**: Consistent design tokens and theming

## 🔧 Configuration

### Tamagui Config
The main configuration is in `tamagui.config.ts`:
- Inter font family
- Responsive breakpoints
- Theme tokens
- Media queries

### Babel Config
Configured with Tamagui plugin and React Native support.

## 📱 Development

### Running on Device
```bash
npx expo start --android    # Android
npx expo start --ios        # iOS
npx expo start --web        # Web
```

### Building
```bash
npx expo build:android
npx expo build:ios
npx expo build:web
```

## 🧪 Testing

```bash
npm test           # Run tests
npm run lint       # Lint code
npm run type-check # Type checking
```

## 📚 Resources

- [Tamagui Documentation](https://tamagui.dev/)
- [Tamagui Components](https://tamagui.dev/docs/components)
- [Tamagui Themes](https://tamagui.dev/docs/core/themes)

## 🤝 Contributing

1. Follow the Tamagui component patterns
2. Use theme tokens for colors and spacing
3. Keep components single-responsibility
4. Use TypeScript for all new code

## 📄 License

MIT License - see LICENSE file for details
