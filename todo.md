# SemestaBlog Development Todo

## MVP Implementation Plan

### 1. Project Setup ✓
- [x] Create Next.js project with TypeScript and Tailwind
- [ ] Install required dependencies
- [ ] Setup project structure

### 2. Core Components (8 files max)
- [ ] `src/components/GlassCard.tsx` - Glassmorphism wrapper component
- [ ] `src/components/BottomNav.tsx` - iOS-style mobile navigation
- [ ] `src/components/PostCard.tsx` - Blog post card component
- [ ] `src/components/SearchBar.tsx` - Search functionality
- [ ] `src/components/MDRenderer.tsx` - Markdown content renderer
- [ ] `src/data/posts.ts` - Seed data with 20 articles

### 3. Pages
- [ ] `src/app/page.tsx` - Home page (trending + latest posts)
- [ ] `src/app/blog/page.tsx` - Blog listing with filters
- [ ] `src/app/blog/[slug]/page.tsx` - Individual blog post
- [ ] `src/app/about/page.tsx` - About page
- [ ] `src/app/contact/page.tsx` - Contact form

### 4. Features
- [ ] Glassmorphism styling with Tailwind
- [ ] Client-side search functionality
- [ ] Category filtering
- [ ] Related posts by category/tags
- [ ] SEO metadata
- [ ] Responsive design (desktop top nav, mobile bottom nav)

### 5. Final Steps
- [ ] Install dependencies and test build
- [ ] Lint check
- [ ] Preview functionality

## Key Design Elements
- Glassmorphism: backdrop-blur-xl, bg-white/10, border-white/20
- Mobile: iOS-style bottom navigation
- Desktop: Glass top navbar
- Science theme with clean typography
- Smooth animations with subtle hover effects