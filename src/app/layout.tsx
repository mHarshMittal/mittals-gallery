import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Mittals Gallery',
  description: 'Premium handcrafted wooden boxes, gift packaging & home decor in Firozabad. Custom designs for weddings, corporate gifts & special occasions.',
  keywords: 'wooden boxes, gift boxes, jewelry boxes, home decor, handmade, Mittals Gallery, Firozabad, wedding gifts, corporate gifts',
  authors: [{ name: 'Mittals Gallery' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Mittals Gallery',
    description: 'Premium handcrafted wooden boxes and elegant packaging solutions in Firozabad.',
    url: 'https://mittalsgallery.com',
    siteName: 'Mittals Gallery',
    images: [
      {
        url: '/products/product-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Mittals Gallery',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  verification: {
    google: 'your-google-site-verification', // You'll need to add this later
  },
  alternates: {
    canonical: 'https://mittalsgallery.com'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#8B4513" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
} 