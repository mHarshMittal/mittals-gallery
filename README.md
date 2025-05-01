# Mittalls - Handcrafted Wooden Products

A showcase website for Mittalls' handcrafted wooden products, including gift boxes, envelopes, trays, cards, gift packing, clothes packing, jewelry boxes, and home decor items.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create the necessary directories:
```bash
mkdir -p public/temp
mkdir -p public/products/gift-boxes
mkdir -p public/products/envelopes
mkdir -p public/products/trays
mkdir -p public/products/cards
mkdir -p public/products/gift-packing
mkdir -p public/products/clothes-packing
mkdir -p public/products/jewelry-boxes
mkdir -p public/products/home-decor
```

## Image Processing

To process and organize product images:

1. Place your WebP images in the `public/temp` directory
2. Run the image processing script:
```bash
npm run process-images
```

The script will:
- Process all WebP images from the temp directory
- Resize images to 800x800 pixels
- Convert them to JPEG format
- Organize them into appropriate category folders based on filename:
  - Files containing "jewelry" → jewelry-boxes
  - Files containing "envelope" → envelopes
  - Files containing "tray" → trays
  - Files containing "card" → cards
  - Files containing "gift" and "pack" → gift-packing
  - Files containing "clothes" or "garment" → clothes-packing
  - Files containing "decor" or "home" → home-decor
  - All others → gift-boxes

## Development

To run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Production

To build for production:
```bash
npm run build
npm start
```

## Features

- Responsive design
- Image optimization
- Category-based product organization
- Contact information integration
- Social media links

## Project Structure

- `src/app/` - Main application pages
- `src/components/` - Reusable components
- `public/images/` - Image assets
- `public/videos/` - Video assets

## Adding Content

1. Add images to `public/images/` directory
2. Update the sample data in respective components:
   - `Gallery.tsx` - Add gallery items
   - `BeforeAfter.tsx` - Add before/after comparisons
   - `Testimonials.tsx` - Add client testimonials

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## Deployment

The website can be deployed to Vercel or any other hosting platform that supports Next.js applications.

## Contact

For any questions or support, please contact [your contact information]. 