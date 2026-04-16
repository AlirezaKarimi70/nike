# Product Requirements Document (PRD) - Nike Landing Page Clone

## 1. Project Overview
The goal of this project is to build a modern, responsive landing page for Nike using React, TypeScript, and Tailwind CSS. The page will showcase Nike products, provide information about the brand, and offer a way for users to subscribe to a newsletter.

## 2. Target Audience
- Potential customers interested in Nike products.
- Users looking for a high-quality, professional-looking shopping experience.

## 3. Core Features & Functional Requirements

### 3.1. Navigation Bar (Navbar)
- **Logo**: Display the Nike logo (header-logo.svg).
- **Links**: Navigation links to Home, About Us, Products, and Contact Us.
- **Hamburger Menu**: For mobile devices, display a hamburger icon to toggle the menu.

### 3.2. Hero Section
- **Big Shoe Display**: Large image of a featured shoe.
- **Shoe Collection**: Thumbnails for different shoe models that update the main shoe image when clicked.
- **Statistics**: Display key metrics (e.g., Brands, Shops, Customers).
- **Call to Action (CTA)**: "Shop Now" button with an icon.

### 3.3. Popular Products Section
- **Heading**: "Our Popular Products".
- **Product Cards**: Display multiple products (shoe4.svg to shoe8.svg) with:
    - Image
    - Rating (star icon and score)
    - Product Name
    - Price

### 3.4. Super Quality Section
- **Heading**: "We Provide You Super Quality Shoes".
- **Description**: Text explaining the quality and craftsmanship.
- **Image**: High-quality product image (shoe8.svg or similar).
- **CTA**: "View Details" button.

### 3.5. Services Section
- **Service Cards**: Display multiple services with:
    - Icon (shield-tick, support, truck-fast)
    - Heading (e.g., Free Shipping, Secure Payment, Love to help you)
    - Description text

### 3.6. Special Offer Section
- **Heading**: "Special Offer".
- **Image**: Promotional image (offer.svg).
- **Description**: Details about the current offer.
- **CTAs**: "Shop Now" and "Learn More" buttons.

### 3.7. Customer Reviews Section
- **Heading**: "What Our Customers Say?".
- **Review Cards**: Display customer testimonials with:
    - Profile Image (customer1.jpeg, customer2.svg)
    - Rating (star icon and score)
    - Review text
    - Customer name

### 3.8. Subscribe Section
- **Heading**: "Sign Up for Updates & Newsletter".
- **Input Field**: Email address input.
- **CTA**: "Sign Up" button.

### 3.9. Footer Section
- **Logo**: Display the Nike logo (footer-logo.svg).
- **Social Links**: Icons for Facebook, Twitter, and Instagram.
- **Navigation Groups**: Grouped links for Products, Help, and Get in Touch.
- **Copyright**: Copyright notice with a copyright icon.

## 4. Technical Requirements
- **Framework**: React 19.
- **Build Tool**: Vite.
- **Language**: TypeScript.
- **Styling**: Tailwind CSS 4.0 (using custom theme defined in tailwind.config.js).
- **State Management**: Zustand (if needed for global states like cart or theme).
- **Icons/Images**: Use the pre-provided SVGs and images in `src/assets/`.

## 5. Non-Functional Requirements
- **Responsiveness**: The landing page must be fully responsive across mobile, tablet, and desktop devices.
- **Performance**: High performance and fast loading times.
- **Accessibility**: Follow web accessibility standards.

## 6. Assumptions & Constraints
- The project is a clone for educational or demonstration purposes.
- Assets are already provided in the `src/assets/` directory.
- The Tailwind theme is already configured with specific fonts and colors.
