# 🌍 Desafío Country Quiz

Una aplicación interactiva de preguntas de geografía que pone a prueba tus conocimientos sobre países del mundo, banderas y capitales. Construida con React, TypeScript y styled-components.

![Country Quiz Challenge](https://img.shields.io/badge/React-19.1.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)
![Styled Components](https://img.shields.io/badge/Styled%20Components-6.1.18-hotpink.svg)

## 🚀 Funcionalidades

- **Quiz interactivo:**: 10 preguntas aleatorias por sesión
- **Reconocimiento de banderas**: Identifica países por sus banderas
- **Conocimiento de capitales**: Pon a prueba tu conocimiento sobre las capitales del mundo
- **Diseño responsivo**: Funciona perfectamente en dispositivos de escritorio y móviles
- **Puntaje en tiempo real**: Sigue tu progreso con actualizaciones de puntuación instantáneas
- **Navegación entre preguntas**: Salta a cualquier pregunta usando los indicadores numéricos
- **Retroalimentación instantánea**: Ve inmediatamente si tus respuestas son correctas o incorrectas
- **Resumen al finalizar**: Resultados detallados con porcentaje de aciertos



## 📁 Project Structure

```
src/
├── components/                   # React components
│   ├── quiz/                     # Quiz-specific components
│   │   ├── QuestionCard.tsx
│   │   ├── QuestionNumbers.tsx
│   │   ├── QuizHeader.tsx
│   │   └── QuizComplete.tsx
│   └── layout/                   # Layout components
├── hooks/                        # Custom React hooks
├── services/                     # API services
├── types/                        # TypeScript type definitions
├── utils/                        # Utility functions
│   ├── array/                    # Array manipulation utilities
│   └── quiz/                     # Quiz-specific utilities
└── styles/                       # Global styles and theme
```


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

### Scripts de desarrollo

```bash
npm run dev          # Start development server
npm run build        # Build for production  
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Run TypeScript checks
```

## Cómo jugar

1. **Inicia el quiz**: La aplicación carga 10 preguntas aleatorias
2. **Responde las preguntas**: Haz clic en la respuesta que elijas
3. **Recibe retroalimentación**: Ve inmediatamente si es correcta con indicadores visuales
4. **Navega**: Usa los círculos numerados para saltar entre preguntas
5. **Finaliza**: Completa todas las preguntas para ver tu puntuación final
6. **Juega de nuevo**: Reinicia con un nuevo set de preguntas


## Autor

**Z3R0-86**
- Email: k86029@gmail.com
- GitHub: [@Z3R0-86](https://github.com/Z3R0-86)
