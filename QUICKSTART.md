# Quick Start Guide - Vibe Marketing Portfolio

## Installation & Running

```bash
# Navigate to project directory
cd "/Users/gbolahan/Documents/web apps/Portfolio/vibe-marketing"

# Run development server
npm run dev
```

The site will be available at: **http://localhost:5173**

## Building for Production

```bash
npm run build
npm run preview
```

## Key Features Implemented

### 1. Hero Section
- Gradient animated background with floating bubbles
- Large gradient heading "Scale Faster With No-Code Magic"
- Animated tagline and CTAs
- Floating statistics cards (300% Growth Rate, 50+ Projects, 98% Satisfaction)

### 2. Services Section
- 4 service cards with icons and animations
- Scroll-triggered fade-in effects
- Hover animations that lift cards
- Services: No-Code Expertise, Growth Marketing, Marketing Automation, Analytics

### 3. Portfolio Section
- 3 project showcase cards
- Image hover effects with overlay buttons
- Results metrics with checkmarks
- Projects: SaaS Platform Launch, E-commerce Growth, Marketing Automation

### 4. Process Section
- Split layout with content and team image
- 4-step animated process cards
- Floating statistics cards
- Steps: Discovery, Build, Test, Scale

### 5. Contact Section
- Fully functional contact form
- Social media icon links
- Gradient purple/blue background
- Form validation with shadcn/ui components

## Technologies Used

- React 18 + TypeScript
- Vite (Build tool)
- Tailwind CSS v3.4
- shadcn/ui components
- Framer Motion animations
- Lucide React icons
- Figtree Google Font

## File Structure

```
src/
├── App.tsx              # Main application with all sections
├── index.css            # Global styles & Tailwind config
├── main.tsx             # Entry point
├── components/
│   └── ui/              # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── textarea.tsx
└── lib/
    └── utils.ts         # Utility functions
```

## Customization Tips

### Change Colors
Edit `src/index.css` and `tailwind.config.js` to modify the color scheme

### Update Content
All content is in `src/App.tsx` - simply search and replace text/images

### Add More Sections
Follow the existing pattern with Framer Motion's `whileInView` for scroll animations

### Modify Animations
Adjust animation duration, delay, and effects in the motion components

## Browser DevTools
- Open with: Cmd+Option+I (Mac) or F12 (Windows)
- Check responsive design with device toolbar
- Test on mobile, tablet, desktop views

## Next Steps

1. Replace placeholder images with real project images
2. Update contact form to connect to a backend/service
3. Add real social media links
4. Deploy to Vercel/Netlify/your hosting platform
5. Set up analytics (Google Analytics, Plausible, etc.)

## Support

For issues or questions about the code:
- Check the README.md for detailed documentation
- Review shadcn/ui docs: https://ui.shadcn.com
- Framer Motion docs: https://www.framer.com/motion
- Tailwind CSS docs: https://tailwindcss.com

Enjoy your beautiful new portfolio website!
