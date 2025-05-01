'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import BeforeAfter from '@/components/BeforeAfter'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Keywords from '@/components/Keywords'

const WHATSAPP_NUMBER = '8273001784'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF9F5] text-[#2C1810]">
      <Hero />
      <About />
      <Services />
      <Keywords />
      <Gallery />
      <BeforeAfter />
      <Testimonials />
      <Contact />

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </main>
  )
} 