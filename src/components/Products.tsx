'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { products as productImages } from '../data/products';

const Products = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-serif text-center text-amber-900 mb-12"
        >
          Our Products
        </motion.h2>

        {/* Product Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productImages.map((img, idx) => (
            <motion.div
              key={img}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center"
            >
              <img
                src={`/products/${img}`}
                alt={`Product ${idx + 1}`}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products; 