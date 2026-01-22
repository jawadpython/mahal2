# MAESTRO Print - Premium Printing & Advertising Website

A modern, elegant, premium website for MAESTRO Print - a professional printing and advertising company.

## Features

- 🎨 **Modern Design**: Elegant black, dark gray, white color scheme with green accents
- 📱 **Fully Responsive**: Optimized for all devices
- ✨ **Smooth Animations**: Powered by Framer Motion
- 🚀 **Next.js 14**: Built with the latest Next.js App Router
- 🎯 **SEO Friendly**: Optimized metadata and structure
- 💬 **WhatsApp Integration**: Floating WhatsApp button for easy contact
- 🖼️ **Portfolio Gallery**: Interactive lightbox image gallery
- 📝 **Contact Form**: Professional contact form with validation

## Pages

1. **Home** - Hero section, services preview, why choose us, CTA
2. **Services** - Detailed service listings with descriptions
3. **Portfolio** - Grid gallery with lightbox preview
4. **About Us** - Company story, mission, and values
5. **Contact** - Contact form, info cards, and map placeholder

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:
- Primary colors: black, dark gray, white, green accent
- Located in the `colors.primary` section

### Contact Information

Update contact details in:
- `components/Footer.tsx` - Footer contact info
- `components/sections/ContactInfo.tsx` - Contact page info
- `components/WhatsAppButton.tsx` - WhatsApp number

### Google Maps

Replace the map placeholder in `components/sections/MapPlaceholder.tsx` with your actual Google Maps embed code.

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── services/           # Services page
│   ├── portfolio/          # Portfolio page
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer component
│   ├── WhatsAppButton.tsx  # Floating WhatsApp button
│   └── sections/           # Page sections
└── public/                 # Static assets
```

## License

This project is private and proprietary.
