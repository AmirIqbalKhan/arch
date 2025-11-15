# Complete Architectural Portfolio Website - Cursor AI Prompt

## Project Overview
Create a modern, premium architectural portfolio website with a dark theme, animated 3D background, and smooth interactions. The site should be fully responsive, have consistent spacing, and use glassmorphism design principles throughout.

## Tech Stack & Setup

### Framework & Build Tools
- **React 18.3.0** with **TypeScript**
- **Vite 5.4.21** as build tool
- **Tailwind CSS 3.4.0** for styling
- **Framer Motion 11.0.0** for animations
- **GSAP 3.13.0** for advanced animations (StaggeredMenu)
- **Three.js 0.160.0** with **@react-three/fiber 8.15.19** and **@react-three/drei 9.92.7** for 3D background

### Dependencies
```json
{
  "dependencies": {
    "@react-three/drei": "^9.92.7",
    "@react-three/fiber": "^8.15.19",
    "@types/three": "^0.160.0",
    "clsx": "^2.1.1",
    "framer-motion": "^11.0.0",
    "gsap": "^3.13.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "tailwind-merge": "^3.4.0",
    "three": "^0.160.0"
  },
  "devDependencies": {
    "@types/node": "^20.10.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "@typescript-eslint/eslint-plugin": "^6.21.0",
    "@typescript-eslint/parser": "^6.21.0",
    "@vitejs/plugin-react": "^4.7.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.56.0",
    "eslint-plugin-react-hooks": "^4.6.2",
    "eslint-plugin-react-refresh": "^0.4.24",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.3.0",
    "vite": "^5.4.21"
  }
}
```

## Project Structure

```
src/
├── components/
│   ├── ArchitecturalText.tsx    # Text component with reveal animations
│   ├── Beams.tsx                 # 3D animated background component
│   ├── Beams.css                 # Styles for Beams
│   ├── ContactForm.tsx           # Animated form with floating labels
│   ├── CurvedLoop.tsx            # Horizontal scrolling text animation
│   ├── CurvedLoop.css            # Styles for CurvedLoop
│   ├── Footer.tsx                # Footer with links and info
│   ├── Navigation.tsx            # Navigation wrapper
│   ├── SlidingPanel.tsx          # Panel reveal animation component
│   ├── StaggeredMenu.tsx         # Hamburger menu with staggered animations
│   ├── StaggeredMenu.css         # Styles for StaggeredMenu
│   ├── StudioCard.tsx            # 3D tilt card for Studio section
│   └── TiltedCard.tsx            # 3D interactive card component
│   └── TiltedCard.css            # Styles for TiltedCard
├── lib/
│   └── utils.ts                  # cn() utility for class merging
├── App.tsx                       # Main application component
├── main.tsx                      # React entry point
└── index.css                     # Global styles
```

## Design System

### Colors
- **Background**: Black (#000000) with animated Beams overlay
- **Text**: White (#ffffff) with opacity variations (white/90, white/70, white/50)
- **Glassmorphism**: `bg-white/10 backdrop-blur-sm border border-white/20`
- **Accent**: Used sparingly for highlights

### Typography
- **Display Font**: Space Grotesk (headings) - weights: 400, 600, 700
- **Body Font**: Inter (body text) - weights: 400, 600, 700
- **Font Sizes**:
  - Hero: `clamp(3rem, 8vw, 8rem)`
  - H1: `clamp(2rem, 5vw, 4rem)`
  - H2: `clamp(1.5rem, 3vw, 2.5rem)`

### Spacing System (Consistent Across All Sections)
- **Section Padding**: `py-12 sm:py-16 md:py-20 lg:py-24`
- **Container Padding**: `px-4 sm:px-6 md:px-8 lg:px-12`
- **Heading Margin**: `mb-8 sm:mb-10 md:mb-12 lg:mb-14`
- **Grid Gaps**: `gap-6 sm:gap-8 md:gap-10 lg:gap-12`
- **Card Padding**: `p-6 sm:p-8 md:p-10`

### Responsive Breakpoints
- Mobile: Default (< 640px)
- Small: `sm:` (640px+)
- Medium: `md:` (768px+)
- Large: `lg:` (1024px+)

## Page Structure (Single Landing Page)

### 1. Hero Section
- **Height**: Full viewport (`h-screen`)
- **Background**: Animated Beams component (fixed, behind all content)
- **Content**:
  - Navigation: "ARCH" text on left, hamburger menu on right (StaggeredMenu)
  - Centered heading: "Architectural Excellence" (two lines)
  - Centered subheading below
  - CurvedLoop animation at absolute bottom with text: "Design ✦ Innovation ✦ Craftsmanship ✦ Sustainability ✦ Excellence ✦"
- **Positioning**: Content centered vertically and horizontally using `top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`

### 2. About Section
- **Layout**: 2-column grid (image left, text right)
- **Image**: TiltedCard component with architect photo
- **Content**: Heading "About", architect name, description paragraphs
- **Height**: Image `h-[300px] sm:h-[350px] md:h-[400px]`, text matches on desktop

### 3. Projects Section
- **Layout**: 3-column grid (1 col mobile, 2 col tablet, 3 col desktop)
- **Cards**: TiltedCard components with project images
- **Content**: 6 projects with title, description, and image overlay
- **Card Height**: `h-[300px] sm:h-[350px] md:h-[400px]`

### 4. Studio Section
- **Layout**: 2-column grid (cards side by side)
- **Cards**: StudioCard components with 3D tilt effect
- **Content**: 
  - Left: "Philosophy" card with 3 paragraphs
  - Right: "Approach" card with 3 subsections (Research & Analysis, Concept Development, Refinement & Detailing)
- **Effect**: 3D tilt on hover matching TiltedCard style

### 5. Contact Section
- **Layout**: 2-column grid (form 2/3, info cards 1/3)
- **Form**: ContactForm component with floating labels
- **Info Cards**: 3 cards (Email, Phone, Location) with glassmorphism
- **Form Fields**: Name, Email, Message with animated floating labels

### 6. Footer
- **Layout**: 4-column grid (1 col mobile, 2 col tablet, 4 col desktop)
- **Sections**: Brand, Navigation, Contact, Social
- **Content**: Copyright, links, contact info

## Component Specifications

### Beams Background Component
- **Source**: Extract from reactbits.dev/backgrounds/beams
- **Props**:
  - `beamWidth={3}`
  - `beamHeight={30}`
  - `beamNumber={20}`
  - `lightColor="#ffffff"`
  - `speed={2}`
  - `noiseIntensity={1.75}`
  - `scale={0.2}`
  - `rotation={30}`
- **Positioning**: Fixed, full viewport, z-index -10
- **Mobile**: Use `100%` instead of `100vw/100vh` to prevent overflow

### StaggeredMenu Component
- **Source**: Extract from reactbits.dev/components/staggered-menu
- **Position**: Right side
- **Logo**: "ARCH" text on left
- **Menu Items**: About, Projects, Studio, Contact
- **Colors**: White button, black when open
- **Behavior**: Smooth scroll to sections, close on click
- **Mobile**: Full width menu panel

### TiltedCard Component
- **Source**: Extract from reactbits.dev/components/tilted-card
- **Props**:
  - `rotateAmplitude={12}`
  - `scaleOnHover={1.05}`
  - `showMobileWarning={false}`
  - `displayOverlayContent={true}`
- **Overlay**: Dark overlay with title and description at bottom
- **Effect**: 3D tilt on mouse move, scale on hover

### CurvedLoop Component
- **Source**: Extract from reactbits.dev/text-animations/curved-loop
- **Configuration**: Straight horizontal line (not curved)
- **Position**: Absolute bottom of hero section
- **Text**: "Design ✦ Innovation ✦ Craftsmanship ✦ Sustainability ✦ Excellence ✦"
- **Speed**: 2
- **Direction**: Left
- **Mobile Font Size**: `clamp(1rem, 5vw, 2rem)` with `min-height: 40px`

### ContactForm Component
- **Features**:
  - Floating labels that animate up on focus/fill
  - Animated bottom border on focus
  - Staggered entry animations
  - Glassmorphism styling
- **Fields**: Name, Email, Message (textarea)
- **Button**: Animated submit button with hover effects

### StudioCard Component
- **Effect**: 3D tilt matching TiltedCard
- **Props**: Same spring config as TiltedCard
- **Rotation**: 8 degrees max (less than TiltedCard)
- **Scale**: 1.02 on hover

## Global Styles (index.css)

### Scrollbar
- **Hidden**: Remove scrollbar but keep scrolling
- **CSS**:
```css
html {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}
html::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}
body {
  scrollbar-width: none;
  -ms-overflow-style: none;
  overflow-x: hidden;
}
body::-webkit-scrollbar {
  display: none;
}
```

### Fonts
- Import from Google Fonts: Inter and Space Grotesk
- Import before `@tailwind` directives

### Grid Overlay
- Architectural grid pattern with low opacity
- Background size: 32px × 32px

## Animations

### Entry Animations
- **Fade in + slide up**: `opacity: 0, y: 30` → `opacity: 1, y: 0`
- **Duration**: 0.6-0.8s
- **Easing**: `[0.16, 1, 0.3, 1]` (cubic bezier)
- **Stagger**: 0.1-0.2s delays between items

### Hover Effects
- **Scale**: 1.02-1.05 on hover
- **3D Tilt**: Based on mouse position
- **Transitions**: 300ms duration

### Scroll Animations
- **Viewport**: `whileInView` with `once: true`
- **Margin**: `-100px` for earlier trigger

## Responsive Design Rules

### Mobile (< 640px)
- Single column layouts
- Reduced padding: `px-4`, `py-12`
- Smaller font sizes
- Full-width menu
- Larger hero line text: `clamp(1rem, 5vw, 2rem)`

### Tablet (640px - 1024px)
- 2-column grids where applicable
- Medium padding: `px-6`, `py-16`
- Adjusted font sizes

### Desktop (1024px+)
- 3-4 column grids
- Full padding: `px-12`, `py-24`
- Maximum font sizes

## Implementation Steps

1. **Setup Project**
   - Initialize Vite + React + TypeScript project
   - Install all dependencies
   - Configure Tailwind CSS with PostCSS
   - Set up path aliases (`@/*`)

2. **Create Base Structure**
   - Set up `index.html` and `main.tsx`
   - Create `App.tsx` with section structure
   - Configure global styles

3. **Implement Background**
   - Extract Beams component from reactbits.dev
   - Fix TypeScript errors (use `as any` for defines)
   - Position as fixed background
   - Add mobile overflow fixes

4. **Create Navigation**
   - Extract StaggeredMenu from reactbits.dev
   - Configure menu items
   - Add smooth scroll handlers
   - Position in hero section

5. **Build Hero Section**
   - Center content vertically and horizontally
   - Add heading and subheading
   - Integrate CurvedLoop at bottom
   - Adjust mobile font sizes

6. **Create Reusable Components**
   - ArchitecturalText (with variants)
   - TiltedCard (extract from reactbits.dev)
   - StudioCard (3D tilt effect)
   - ContactForm (floating labels)

7. **Build Sections**
   - About: 2-column with image and text
   - Projects: Grid of TiltedCards
   - Studio: 2-column with StudioCards
   - Contact: Form + info cards
   - Footer: 4-column grid

8. **Apply Consistent Spacing**
   - Use standardized padding/margin classes
   - Ensure consistent gaps
   - Test responsive breakpoints

9. **Polish & Optimize**
   - Hide scrollbar
   - Fix mobile overflow issues
   - Adjust font sizes for readability
   - Test all interactions

## Key Files to Create/Modify

### Configuration Files
- `package.json` - Dependencies
- `vite.config.ts` - Vite config with path aliases
- `tsconfig.json` - TypeScript config
- `tailwind.config.ts` - Tailwind with custom colors/fonts
- `postcss.config.cjs` - PostCSS config (CommonJS)
- `.gitignore` - Exclude node_modules, dist, etc.

### Source Files
- `src/index.css` - Global styles, scrollbar hiding, fonts
- `src/main.tsx` - React entry point
- `src/App.tsx` - Main component with all sections
- `src/lib/utils.ts` - `cn()` utility function
- All component files as listed in structure

## Important Notes

1. **React Bits Components**: Extract code directly from reactbits.dev website using browser tools
2. **TypeScript Errors**: Use `as any` for Three.js type issues, prefix unused params with `_`
3. **Mobile First**: Design for mobile, then enhance for larger screens
4. **Consistency**: Use the spacing system consistently across all sections
5. **Performance**: Use `once: true` for scroll animations to prevent re-triggering
6. **Accessibility**: Include proper ARIA labels, semantic HTML, keyboard navigation

## Testing Checklist

- [ ] All sections render correctly
- [ ] Responsive on mobile (320px+)
- [ ] Responsive on tablet (768px+)
- [ ] Responsive on desktop (1024px+)
- [ ] Animations work smoothly
- [ ] Navigation menu functions correctly
- [ ] Form validation works
- [ ] No horizontal scroll on mobile
- [ ] Scrollbar is hidden
- [ ] All links work
- [ ] Images load properly
- [ ] 3D effects work on desktop
- [ ] Build completes without errors

## Final Result

A premium, fully responsive architectural portfolio website with:
- Dark theme with animated 3D background
- Smooth animations and interactions
- Consistent spacing and typography
- Glassmorphism design elements
- 3D tilt effects on cards
- Animated navigation menu
- Professional contact form
- Clean, modern aesthetic
- Perfect mobile experience

