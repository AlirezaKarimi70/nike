# Technical Specification - Nike Landing Page Clone

## 1. Technical Context
- **Frontend Framework**: React 19 (Vite-based)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **State Management**: Zustand (for hero section shoe selection)
- **Icons/Images**: SVGs and PNGs in `src/assets/`
- **Build Tool**: Vite

## 2. Implementation Approach
- **Component-Driven Development**: Break the UI into reusable components stored in `src/components/`.
- **Atomic Components**: `Button`, `ShoeCard`, `ServiceCard`, `ReviewCard`.
- **Modular Sections**: Each PRD section (Hero, PopularProducts, SuperQuality, etc.) will be its own component in `src/sections/`.
- **Static Data Management**: Centralized data in `src/constants/index.ts` to keep components clean.
- **Responsive Design**: Mobile-first approach using Tailwind's utility classes.

## 3. Source Code Structure Changes
- `src/components/`: New directory for reusable components (Button.tsx, ShoeCard.tsx, etc.)
- `src/sections/`: New directory for major page sections (Hero.tsx, PopularProducts.tsx, etc.)
- `src/constants/index.ts`: Data for navigation, products, services, reviews, and footer links.
- `src/App.tsx`: Main entry point assembling all sections.
- `src/index.css`: Custom fonts and Tailwind directives.

## 4. Data Model / API / Interface Changes
No external APIs. All data will be local in `src/constants/index.ts`.

### 4.1. Data Interfaces
- `NavLink`: `{ href: string; label: string }`
- `Shoe`: `{ thumbnail: string; bigShoe: string }`
- `Statistic`: `{ value: string; label: string }`
- `Product`: `{ imgURL: string; name: string; price: string; rating: number }`
- `Service`: `{ imgURL: string; label: string; subtext: string }`
- `Review`: `{ imgURL: string; customerName: string; rating: number; feedback: string }`
- `FooterLink`: `{ title: string; links: { name: string; link: string }[] }`
- `SocialMedia`: `{ src: string; alt: string }`

## 5. Delivery Phases
1. **Phase 1: Setup & Constants**
   - Create `src/constants/index.ts` and export all data based on PRD.
   - Setup basic directory structure (`src/components`, `src/sections`).
2. **Phase 2: Navigation & Hero**
   - Implement `Navbar.tsx` and `Hero.tsx`.
   - Implement `Button.tsx` and `ShoeCard.tsx`.
3. **Phase 3: Core Products**
   - Implement `PopularProducts.tsx` and `SuperQuality.tsx`.
   - Implement `PopularProductCard.tsx`.
4. **Phase 4: Services & Offers**
   - Implement `Services.tsx` and `SpecialOffer.tsx`.
   - Implement `ServiceCard.tsx`.
5. **Phase 5: Reviews & Newsletter**
   - Implement `CustomerReviews.tsx` and `Subscribe.tsx`.
   - Implement `ReviewCard.tsx`.
6. **Phase 6: Footer**
   - Implement `Footer.tsx`.
7. **Phase 7: Final Polish**
   - Refine animations, responsiveness, and lint check.

## 6. Verification Approach
- **Linting**: `npm run lint` to ensure code quality.
- **Type Checking**: `npm run build` (which includes `tsc -b`) to verify types.
- **Visual Inspection**: Manual check of responsiveness across breakpoints (mobile, tablet, desktop).
- **Functionality**: Verify hero image selection and mobile menu toggle.
