# 💎 Vamshi Photography - Premium Luxury Photography Services

A sophisticated, modern photography portfolio website built with React, TypeScript, and Tailwind CSS. Features premium animations, luxury design elements, and responsive layouts that showcase professional photography services.

## ✨ Features

### 🎨 **Luxury Design System**
- **Premium Color Palette**: Deep charcoal backgrounds with rich gold and platinum accents
- **Elegant Typography**: Playfair Display for headings, Inter for body text
- **Sophisticated Animations**: Framer Motion with luxury timing and easing
- **Responsive Design**: Mobile-first approach with premium mobile experience

### 🚀 **Advanced Functionality**
- **Smooth Page Transitions**: AnimatePresence with custom variants
- **Interactive Portfolio**: PhotoView gallery with zoom functionality
- **Contact Form**: React Hook Form with validation
- **Performance Optimized**: Lazy loading, image optimization, and efficient animations

### 💼 **Professional Sections**
- **Hero Section**: Parallax background with typewriter animation
- **Services**: Premium pricing with detailed package information
- **Portfolio**: Categorized gallery with filtering capabilities
- **About**: Professional background and statistics
- **Blog**: Photography insights and industry knowledge
- **Contact**: Comprehensive contact information and form

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS, Custom CSS Variables
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Forms**: React Hook Form
- **Image Gallery**: React Photo View
- **Build Tool**: Vite
- **Deployment**: Vercel-ready

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/vamshi-photography.git

# Navigate to the project directory
cd vamshi-photography

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🎯 Key Features

### **Premium User Experience**
- Luxury color scheme that communicates premium pricing
- Sophisticated animations that feel expensive and smooth
- Professional typography and spacing
- Elite client testimonials and case studies

### **Performance Optimized**
- Image optimization with responsive srcsets
- Lazy loading for better performance
- Efficient animations with proper cleanup
- SEO optimized with proper meta tags

### **Developer Friendly**
- TypeScript for type safety
- ESLint configuration for code quality
- Modular component architecture
- Clean, maintainable code structure

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full luxury experience with all animations
- **Tablet**: Adapted layouts with maintained premium feel
- **Mobile**: Touch-optimized with fast loading

## 🎨 Customization

### Color Scheme
The luxury color palette can be customized in `src/index.css`:

```css
:root {
  --bg-primary: #0a0a0a;    /* Deep charcoal */
  --accent-gold: #d4af37;   /* Rich gold */
  --accent-platinum: #e5e5e5; /* Platinum */
  /* ... more variables */
}
```

### Animations
Animation timing and effects can be adjusted in component files using Framer Motion variants.

## 🚀 Deployment

The project is configured for deployment on Vercel:

```bash
# Build the project
npm run build

# Deploy to Vercel
vercel --prod
```

## 📄 License

This project is private and proprietary to Vamshi Photography.

## 📞 Contact

**Vamshi Photography**
- Email: vamshikumarakunamoni@gmail.com
- Phone: +91-7386526988
- Location: Hyderabad, Telangana, India

---

*Crafting timeless memories through the art of premium photography* 💎

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
