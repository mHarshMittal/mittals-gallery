'use client'

import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-rose-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-amber-100 to-rose-100">
              {/* Decorative Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.2 }}
                  transition={{ duration: 1 }}
                  className="absolute top-0 left-0 w-64 h-64 bg-amber-200 rounded-full filter blur-3xl"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.2 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="absolute bottom-0 right-0 w-64 h-64 bg-rose-200 rounded-full filter blur-3xl"
                />
              </div>
              
              {/* Content Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  <div className="w-32 h-32 bg-amber-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl text-amber-600">MG</span>
                  </div>
                  <h3 className="text-2xl font-serif text-amber-900">Mittals Gallery</h3>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl font-serif text-amber-900 mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Mittals Gallery is a celebration of craftsmanship and creativity. 
              Each piece in our collection is carefully handcrafted with love and 
              attention to detail, bringing together traditional techniques and 
              contemporary design.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our journey began with a passion for creating beautiful, unique 
              pieces that tell a story. Every item in our collection is a 
              testament to the skill and dedication of our artisans, who pour 
              their heart and soul into each creation.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
              >
                Handcrafted
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-rose-100 text-rose-800 rounded-full text-sm font-medium"
              >
                Unique Designs
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
              >
                Premium Quality
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 