# 🌍 Country Quiz Challenge

An interactive geography quiz application that tests your knowledge of world countries, flags, and capitals. Built with React, TypeScript, and styled-components.

![Country Quiz Challenge](https://img.shields.io/badge/React-19.1.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)
![Styled Components](https://img.shields.io/badge/Styled%20Components-6.1.18-hotpink.svg)

## 🚀 Features

- **📊 Interactive Quiz**: 10 randomly generated questions per session
- **🏳️ Flag Recognition**: Identify countries by their flags  
- **🏙️ Capital Knowledge**: Test your knowledge of world capitals
- **📱 Responsive Design**: Works perfectly on desktop and mobile devices
- **🎯 Real-time Scoring**: Track your progress with live score updates
- **🔄 Question Navigation**: Jump to any question using the number indicators
- **⚡ Instant Feedback**: See correct/incorrect answers immediately
- **🎉 Completion Summary**: Detailed results with percentage accuracy

## 🛠️ Technologies Used

- **React 19.1.0** - Modern UI library with latest features
- **TypeScript** - Type-safe development
- **Styled Components** - CSS-in-JS styling solution
- **Vite** - Fast build tool and dev server
- **ESLint** - Code quality and consistency
- **REST Countries API** - Live country data

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── quiz/           # Quiz-specific components
│   │   ├── QuestionCard.tsx
│   │   ├── QuestionNumbers.tsx
│   │   ├── QuizHeader.tsx
│   │   └── QuizComplete.tsx
│   └── layout/         # Layout components
├── hooks/              # Custom React hooks
├── services/           # API services
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
│   ├── array/         # Array manipulation utilities
│   └── quiz/          # Quiz-specific utilities
└── styles/            # Global styles and theme
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd Country-Quiz-k86

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production  
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Run TypeScript checks
```

## 🎮 How to Play

1. **Start the Quiz**: The application loads 10 random questions
2. **Answer Questions**: Click on your chosen answer
3. **Get Feedback**: See if you're correct instantly with visual indicators
4. **Navigate**: Use the numbered circles to jump between questions
5. **Complete**: Finish all questions to see your final score
6. **Play Again**: Restart with a new set of questions

## 🏗️ Architecture Highlights

### Clean Code Organization
- **Separation of Concerns**: Components, services, and utilities are clearly separated
- **Type Safety**: Full TypeScript coverage for better development experience
- **Reusable Components**: Modular design for easy maintenance and testing

### Performance Optimizations
- **Memoized Calculations**: Quiz questions are memoized to prevent unnecessary recalculations
- **Efficient State Management**: Minimal re-renders with proper state structure
- **Lazy Loading**: Components are optimized for fast initial load

### Accessibility Features
- **ARIA Labels**: Screen reader friendly interface
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Proper focus handling for better UX

## 🎨 Design System

The application uses a consistent design system with:
- **Color Palette**: Carefully chosen colors for optimal contrast
- **Typography Scale**: Harmonious font sizes and weights
- **Spacing System**: Consistent spacing throughout the application
- **Responsive Breakpoints**: Mobile-first responsive design

## 🌐 API Integration

Uses the [REST Countries API](https://restcountries.com) to fetch real-time country data including:
- Country names and flags
- Capital cities
- Additional metadata

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Z3R0-86**
- Email: k86029@gmail.com
- GitHub: [@Z3R0-86](https://github.com/Z3R0-86)

## 🙏 Acknowledgments

- [REST Countries API](https://restcountries.com) for providing comprehensive country data
- React team for the amazing framework
- The open source community for inspiration and tools

---

**⭐ Star this repository if you found it helpful!**