Desafío Country Quiz

Una aplicación interactiva de preguntas de geografía que pone a prueba tus conocimientos sobre países del mundo, banderas y capitales. Construida con React, TypeScript y styled-components.

![Country Quiz Challenge](https://img.shields.io/badge/React-19.1.0-blue.svg) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg) ![Styled Components](https://img.shields.io/badge/Styled%20Components-6.1.18-hotpink.svg)


Funcionalidades:

- Quiz interactivo: 10 preguntas aleatorias por sesión
- Reconocimiento de banderas: Identifica países por sus banderas
- Conocimiento de capitales: Pon a prueba tu conocimiento sobre las capitales del mundo
- Diseño responsivo: Funciona perfectamente en dispositivos de escritorio y móviles
- Puntaje en tiempo real: Sigue tu progreso con actualizaciones de puntuación instantáneas
- Navegación entre preguntas: Salta a cualquier pregunta usando los indicadores numéricos
- Retroalimentación instantánea: Ve inmediatamente si tus respuestas son correctas o incorrectas
 Resumen al finalizar: Resultados detallados con porcentaje de aciertos


Estructura del proyecto

src/
├── components/                        # Componentes de React
│   ├── quiz/                          # Componentes específicos del quiz
│   │   ├── QuestionCard.tsx
│   │   ├── QuestionNumbers.tsx
│   │   ├── QuizHeader.tsx
│   │   └── QuizComplete.tsx
│   └── layout/                        # Componentes de layout
├── hooks/                             # Hooks personalizados de React
├── services/                          # Servicios para API
├── types/                             # Definiciones de tipos de TypeScript
├── utils/                             # Funciones utilitarias
│   ├── array/                         # Utilidades para manipulación de arreglos
│   └── quiz/                          # Utilidades específicas del quiz
└── styles/                            # Estilos globales y tema


Inicio rápido

Requisitos:
- Node.js 18+
- npm o yarn

Instalación:

# Clona el repositorio
git clone <repository-url>
cd Country-Quiz-k86

# Instala dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev

# Construye para producción
npm run build

# Previsualiza la versión de producción
npm run preview

Scripts de desarrollo
npm run dev               # Inicia el servidor de desarrollo
npm run build             # Construye para producción  
npm run lint              # Ejecuta ESLint
npm run lint:fix          # Corrige problemas detectados por ESLint
npm run type-check        # Ejecuta chequeo de tipos de TypeScript


Cómo jugar:

- Inicia el quiz: La aplicación carga 10 preguntas aleatorias
- Responde las preguntas: Haz clic en la respuesta que elijas
- Recibe retroalimentación: Ve inmediatamente si es correcta con indicadores visuales
- Navega: Usa los círculos numerados para saltar entre preguntas
- Finaliza: Completa todas las preguntas para ver tu puntuación final
- Juega de nuevo: Reinicia con un nuevo set de preguntas


Autor

- Z3R0-86
- Email: k86029@gmail.com
- GitHub: @Z3R0-86









