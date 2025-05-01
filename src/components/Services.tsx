'use client'

import { motion } from 'framer-motion'
import { FaGift, FaRing, FaBoxOpen, FaPalette } from 'react-icons/fa'

const services = [
  {
    icon: <FaGift className="text-4xl text-[#D4A373]" />,
    title: 'Wedding Gift Packaging',
    description: 'Beautiful and elegant packaging solutions for wedding gifts that make a lasting impression.'
  },
  {
    icon: <FaRing className="text-4xl text-[#D4A373]" />,
    title: 'Jewelry Presentation',
    description: 'Stunning displays and packaging for jewelry that highlight their beauty and significance.'
  },
  {
    icon: <FaBoxOpen className="text-4xl text-[#D4A373]" />,
    title: 'Custom Gift Boxes',
    description: 'Personalized gift boxes designed to match your wedding theme and color scheme.'
  },
  {
    icon: <FaPalette className="text-4xl text-[#D4A373]" />,
    title: 'Festival Decorations',
    description: 'Traditional and modern decorative elements for Indian festivals and celebrations.'
  }
]

export default function Services() {
  return (
    <section className="py-16 px-4 bg-[#FFE8D6]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-700">
            Discover our range of services designed to make your special occasions even more memorable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 