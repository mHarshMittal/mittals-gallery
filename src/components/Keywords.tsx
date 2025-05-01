'use client'

import { motion } from 'framer-motion'

const keywords = [
  'Handcrafted',
  'Wooden',
  'Elegant',
  'Premium',
  'Unique'
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Keywords() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#FFF9F5] to-[#F5E6D9]">
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {keywords.map((keyword, index) => (
            <motion.div
              key={index}
              variants={item}
              className="text-center"
            >
              <motion.h3
                className="text-2xl md:text-3xl font-serif text-[#2C1810]"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {keyword}
              </motion.h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 