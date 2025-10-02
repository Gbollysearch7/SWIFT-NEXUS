# Vibe Marketing Portfolio

A stunning, modern portfolio website built for a growth marketing specialist focusing on no-code platforms.

## Features

- **Modern Design**: Clean, spacious layout with purple/blue gradient color palette
- **Smooth Animations**: Powered by Framer Motion for scroll-triggered and interactive animations
- **Responsive**: Mobile-first design that works beautifully on all devices
- **Accessible**: Built with WCAG 2.1 AA standards in mind
- **Performance Optimized**: Efficient component rendering and code splitting

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible component library
- **Framer Motion** - Production-ready animation library
- **Lucide React** - Beautiful, consistent icons
- **Figtree Font** - Clean, modern typography

## Sections

1. **Hero Section**
   - Large gradient heading
   - Animated floating background elements
   - Call-to-action buttons with hover effects
   - Floating statistics cards

2. **Services Section**
   - 4 service cards with icons
   - Hover animations and scroll-triggered fade-ins
   - No-Code Expertise, Growth Marketing, Automation, Analytics

3. **Portfolio Section**
   - 3 project showcase cards
   - Image hover effects with overlays
   - Results metrics with checkmarks
   - Parallax scroll effects

4. **Process Section**
   - Split layout with image and content
   - 4-step process timeline
   - Animated floating statistics
   - Hover effects on process cards

5. **Contact Section**
   - Functional contact form with shadcn/ui components
   - Social media links
   - Gradient background
   - Form validation

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

The development server runs on `http://localhost:5173`

### Project Structure

```
vibe-marketing/
├── src/
│   ├── components/
│   │   └── ui/          # shadcn/ui components
│   ├── lib/
│   │   └── utils.ts     # Utility functions
│   ├── App.tsx          # Main application component
│   ├── index.css        # Global styles with Tailwind
│   └── main.tsx         # Entry point
├── public/              # Static assets
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Customization

### Colors

The color palette can be customized in `tailwind.config.js` and `src/index.css`. Current theme uses:
- Purple: Primary brand color
- Blue: Secondary accent color
- Cyan: Tertiary accent color

### Typography

The Figtree font is loaded from Google Fonts. To change the font, update the import in `src/index.css` and the font family in `tailwind.config.js`.

### Content

All content is defined inline in `src/App.tsx`. Update the text, images, and data to match your needs.

## Components

### Custom shadcn/ui Components

- **Button**: Multiple variants (default, outline, ghost) and sizes
- **Card**: Flexible card component with header, content, and footer
- **Input**: Styled form input with focus states
- **Textarea**: Multi-line text input for forms

All components are fully customizable through className props and support Tailwind utility classes.

## Performance

- Lazy loading for images
- Optimized animations with Framer Motion
- Efficient re-renders with React best practices
- Code splitting with Vite

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Credits

- Design & Development: Vibe Marketing Portfolio
- Images: Unsplash
- Icons: Lucide React
- Components: shadcn/ui
