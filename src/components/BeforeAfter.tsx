'use client'

import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type ComparisonItem = {
  id: number
  beforeImage: string
  afterImage: string
  title: string
  description: string
}

const sampleComparisons: ComparisonItem[] = [
  {
    id: 1,
    beforeImage: '/products/product-1.jpg',
    afterImage: '/products/product-2.jpg',
    title: 'Gift Box Transformation',
    description: 'From simple to elegant packaging'
  },
  {
    id: 2,
    beforeImage: '/products/product-3.jpg',
    afterImage: '/products/product-4.jpg',
    title: 'Custom Design',
    description: 'Personalized touch for special occasions'
  }
]

export default function BeforeAfter() {
  const [sliderPositions, setSliderPositions] = useState<number[]>(sampleComparisons.map(() => 50))
  const containerRefs = useRef<(HTMLDivElement | null)[]>([])

  const setRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    containerRefs.current[index] = el
  }, [])

  return (
    <section className="py-16 px-4 bg-[#FFE8D6]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Before & After</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sampleComparisons.map((comparison, index) => (
            <motion.div
              key={comparison.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg"
              ref={setRef(index)}
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0">
                  <Image
                    src={comparison.beforeImage}
                    alt={`Before - ${comparison.title}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
                <div 
                  className="absolute inset-0"
                  style={{ clipPath: `inset(0 ${100 - sliderPositions[index]}% 0 0)` }}
                >
                  <Image
                    src={comparison.afterImage}
                    alt={`After - ${comparison.title}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                  style={{ left: `${sliderPositions[index]}%` }}
                  onMouseDown={(e) => {
                    e.preventDefault()
                    const container = containerRefs.current[index]
                    if (!container) return

                    const startX = e.clientX
                    const startPosition = sliderPositions[index]
                    const containerRect = container.getBoundingClientRect()
                    
                    const handleMouseMove = (e: MouseEvent) => {
                      const deltaX = e.clientX - startX
                      const percentageDelta = (deltaX / containerRect.width) * 100
                      const newPosition = Math.max(0, Math.min(100, startPosition + percentageDelta))
                      setSliderPositions(prev => {
                        const newPositions = [...prev]
                        newPositions[index] = newPosition
                        return newPositions
                      })
                    }
                    
                    const handleMouseUp = () => {
                      document.removeEventListener('mousemove', handleMouseMove)
                      document.removeEventListener('mouseup', handleMouseUp)
                    }
                    
                    document.addEventListener('mousemove', handleMouseMove)
                    document.addEventListener('mouseup', handleMouseUp)
                  }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 bg-[#D4A373] rounded-full" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                <h3 className="text-xl font-semibold">{comparison.title}</h3>
                <p className="text-sm">{comparison.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 