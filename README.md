# Personal Website

A modern, responsive personal website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- ⚡ **Fast & Modern**: Built with Vite for lightning-fast development and builds
- 🎨 **Beautiful Design**: Styled with Tailwind CSS for a modern, responsive design
- 📱 **Mobile-First**: Fully responsive design that works on all devices
- ✨ **Smooth Animations**: Engaging animations and transitions
- 🎯 **TypeScript**: Full type safety for better development experience
- 🚀 **Optimized**: Production-ready with optimized builds

## Sections

- **Hero**: Eye-catching introduction with animated background
- **About**: Personal information and skills showcase
- **Projects**: Portfolio of featured work with live demos
- **Contact**: Contact form and social media links
- **Footer**: Additional links and information

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Fonts**: Inter (Google Fonts)
- **Icons**: Heroicons (SVG)
- **Deployment**: Vercel / Netlify ready

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd personal_website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Personal Information

Update the following components with your information:

- `src/components/Header.tsx` - Your name in the header
- `src/components/Hero.tsx` - Name, title, description, and social links
- `src/components/About.tsx` - Personal story, skills, and quick facts
- `src/components/Projects.tsx` - Your projects and portfolio
- `src/components/Contact.tsx` - Contact information and social links
- `src/components/Footer.tsx` - Footer information and links

### Styling

The website uses Tailwind CSS. You can customize:

- Colors: Update the color palette in `tailwind.config.js`
- Animations: Modify animations in `tailwind.config.js` and `src/index.css`
- Layout: Adjust spacing and layout in individual components

### Images

Replace the placeholder images in the Projects section with your own:

- Update the `image` URLs in `src/components/Projects.tsx`
- Consider using a service like Unsplash or your own hosted images

## Deployment

### Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with the included `vercel.json` configuration

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Deploy automatically with the included `netlify.toml` configuration

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own personal website!

## Contributing

This is a personal website template. Feel free to fork and customize it for your own use!