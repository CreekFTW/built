# Built

A modern, high-performance website for Built - a full-stack tech partner specializing in custom software, AI automation, and business systems.

## Overview

Built is built with Next.js 16, React 19, and Tailwind CSS 4, featuring a sleek design with animations, dark mode support, and comprehensive business pages.

## Features

- Modern, responsive design with Framer Motion animations
- Dark mode support with next-themes
- Contact form with email integration (Resend)
- Form validation using React Hook Form and Zod
- UI components powered by Radix UI
- Automatic sitemap generation
- SEO optimized with comprehensive metadata
- Business pages: About, Contact, Privacy Policy, Terms of Service, SLA, Security

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Radix UI](https://www.radix-ui.com/) - Accessible components
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://zod.dev/) - Schema validation
- [Resend](https://resend.com/) - Email delivery
- [next-sitemap](https://github.com/iamvishnusankar/next-sitemap) - Sitemap generation

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd built
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit [.env.local](.env.local) and add your configuration:
```env
RESEND_API_KEY=your_resend_api_key_here
EMAIL=your_contact_email@example.com
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building

Build the production version:

```bash
npm run build
```

This will:
1. Create an optimized production build
2. Generate sitemap automatically via postbuild hook

### Production

Start the production server:

```bash
npm start
```

## Project Structure

```
built/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── (main)/            # Main layout group
│   │   │   ├── page.tsx       # Homepage
│   │   │   ├── about/         # About page
│   │   │   ├── contact/       # Contact page
│   │   │   ├── privacy/       # Privacy policy
│   │   │   ├── terms/         # Terms of service
│   │   │   ├── sla/           # Service level agreement
│   │   │   └── security/      # Security page
│   │   ├── layout.tsx         # Root layout
│   │   └── not-found.tsx      # 404 page
│   ├── components/
│   │   ├── dom/               # Domain components
│   │   │   ├── hero.tsx
│   │   │   ├── features.tsx
│   │   │   ├── solutions.tsx
│   │   │   ├── testimonials.tsx
│   │   │   ├── faqs.tsx
│   │   │   ├── cta.tsx
│   │   │   ├── contact-form.tsx
│   │   │   ├── navbar.tsx
│   │   │   └── footer.tsx
│   │   ├── layout/            # Layout components
│   │   ├── ui/                # UI components (Radix UI)
│   │   └── theme-provider.tsx # Theme context
│   └── lib/                   # Utilities
├── public/                    # Static assets
├── next-sitemap.config.js     # Sitemap configuration
└── package.json
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend API key for email delivery | Yes |
| `CONTACT_EMAIL` | Email address to receive contact form submissions | Yes |

## Deployment

The site is deployed on [Vercel](https://vercel.com) at [https://built-phi.vercel.app](https://built-phi.vercel.app).

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

Make sure to configure environment variables in your Vercel project settings.

## License

Private - All rights reserved
