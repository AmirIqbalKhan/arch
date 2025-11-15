# Architectural Portfolio

A modern, responsive architectural portfolio website built with React, Vite, and Tailwind CSS. Features animated 3D backgrounds, interactive cards, and smooth animations.

## Features

- 🎨 Modern glassmorphism design with animated Beams background
- 📱 Fully responsive across all screen sizes
- ✨ Interactive 3D tilted cards for projects
- 🎭 Smooth animations using Framer Motion
- 🎯 Staggered menu navigation
- 📝 Animated contact form with floating labels
- 🎪 Curved loop text animation

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Three.js** - 3D background effects
- **GSAP** - Advanced animations

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AmirIqbalKhan/arch.git
cd arch
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/       # React components
│   ├── Beams.tsx     # Animated background
│   ├── TiltedCard.tsx # 3D interactive cards
│   ├── ContactForm.tsx # Animated form
│   └── ...
├── App.tsx           # Main application
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## License

MIT

