'use client'

import React, { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { products } from '@/data/products'

const WHATSAPP_NUMBER = '8273001784'

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'boxes', name: 'Wooden Boxes' },
  { id: 'gifts', name: 'Gift Items' },
  { id: 'custom', name: 'Custom Orders' }
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Ensure we have valid filenames
  const validProducts = products.filter((filename): filename is string => 
    typeof filename === 'string' && filename.endsWith('.jpg')
  )

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-4">
            Our Collection
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover Unique Pieces for Every Occasion
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map(category => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-[#8B4513] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {validProducts.map((filename, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-64">
                <img
                  src={`/products/${filename}`}
                  alt={`Product ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    console.error('Error loading image:', filename);
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/placeholder.jpg';
                  }}
                />
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in Product ${index + 1}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 bg-[#25D366] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#128C7E]"
              >
                <FaWhatsapp className="text-xl" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 