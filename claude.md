# Personal Website Development Documentation

## Project Overview

- **Project Name**: my-homepage
- **Tech Stack**: Next.js 15.4.6, React 19.1.0, TailwindCSS
- **Content Management**: MDX (next-mdx-remote)
- **Repository**: Local path `/Users/zhou/work_base/homepage/my-homepage`

## Project Structure

```
my-homepage/
├── src/
│   ├── app/            # Next.js app router
│   │   ├── layout.tsx  # Root layout component
│   │   ├── page.tsx    # Homepage component
│   │   ├── globals.css # Global styles
│   │   ├── projects/   # Project-related routes
│   │   │   └── [slug]/ # Dynamic project detail page route
│   │   └── sections/   # Content section routes
│   │       └── [slug]/ # Dynamic content section detail page route
│   ├── components/     # React components
│   │   ├── Layout.tsx  # Page layout component
│   │   ├── ProjectCard.tsx # Project card component
│   │   └── ui/         # UI component library
│   ├── content/        # MDX content files
│   │   └── sections/   # Website section content
│   │       └── travel-architecture.mdx # Travel and architecture content
│   ├── lib/           # Utility functions and shared logic
│   │   ├── projects.ts # Project data and processing logic
│   │   ├── sections.ts # Content section data and processing logic
│   │   └── utils.ts    # General utility functions
│   └── projects/      # Project-related components and logic
├── public/            # Static assets
└── ...configuration files
```

## Functional Modules

1. **Homepage** (`src/app/page.tsx`)
   - Personal introduction
   - Navigation to other pages
   - Latest content showcase

2. **Content Sections** (`src/content/sections/`)
   - Travel and Architecture (travel-architecture.mdx)
   - [Additional content sections to be added]
   - Rendered through dynamic route `src/app/sections/[slug]/page.tsx`

3. **Project Showcase** (`src/projects/`)
   - Project card component (`src/components/ProjectCard.tsx`)
   - Project detail pages rendered through dynamic route `src/app/projects/[slug]/page.tsx`
   - Project data managed in `src/lib/projects.ts`

4. **Layout System** (`src/components/Layout.tsx`)
   - Provides unified site layout
   - Includes navigation, header, footer, and other common elements
   - Works in conjunction with `src/app/layout.tsx`

5. **Data Management**
   - Project data: `src/lib/projects.ts`
   - Content section data: `src/lib/sections.ts`
   - General utility functions: `src/lib/utils.ts`

## File Descriptions

### Core Files

- **src/app/layout.tsx**: Application root layout, defines basic page structure and metadata
- **src/app/page.tsx**: Homepage component, website entry point
- **src/components/Layout.tsx**: Page layout component, defines page structure and navigation
- **src/lib/projects.ts**: Manages project data and related processing logic
- **src/lib/sections.ts**: Manages content section data and related processing logic

### Dynamic Routes

- **src/app/projects/[slug]/page.tsx**: Dynamic project detail page
- **src/app/sections/[slug]/page.tsx**: Dynamic content section detail page

### Content Files

- **src/content/sections/travel-architecture.mdx**: Travel and architecture content

## Development Plan

### Phase 1: Basic Framework Setup 
- [x] Initialize Next.js project
- [x] Configure TailwindCSS
- [x] Set up basic project structure
- [x] Create core components

### Phase 2: Content Development 
- [ ] Enhance homepage design and content
- [ ] Enrich travel-architecture content
- [ ] Add more content sections
- [ ] Optimize content display components

### Phase 3: Feature Enhancement 
- [ ] Add dark mode support
- [ ] Implement responsive design optimizations
- [ ] Add internationalization support (Chinese/English toggle)
- [ ] SEO optimization

### Phase 4: Deployment and Optimization 
- [ ] Performance optimization
- [ ] Deploy to server/cloud platform
- [ ] Configure custom domain
- [ ] Set up CI/CD workflow

## Open Issues

- [ ] Determine final website style and theme
- [ ] Plan additional content sections
- [ ] Consider whether to add blog functionality
- [ ] Evaluate if backend service support is needed

## Development Log

### 2025-08-15
- Created project planning document (claude.md)
- Reviewed existing project structure
- Established development plan

### 2025-08-26
- Updated project documentation with more detailed file structure and functionality descriptions
- Enhanced module explanations and file purpose descriptions
- Converted documentation to English

## Reference Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/docs/)
