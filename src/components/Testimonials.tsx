'use client'

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaUser } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Roshni Gupta",
    content: "Diwali ke liye designer diyas aur bandhanwar order kiye. Sach mein zabardast presentation thi! 🪔 Matching gift boxes mein dry fruits pack karke diye, ekdum royal look tha. Poore mohalle mein sabse alag decoration thi hamari! ✨🎆",
  },
  {
    id: 2,
    name: "Priyanka Mittal",
    content: "Wedding season ke liye clothes packing trays aur envelopes mangwaye. Sarees ke liye special wooden trays bohot elegant hain! 👗 Matching envelopes mein cards pack kiye, sab kuch coordinated lag raha tha. Perfect wedding packaging! 💝",
  },
  {
    id: 3,
    name: "Kavita Sharma",
    content: "Karwa Chauth ke thaal ke liye special packaging order ki. Wo handcrafted wooden trays with rangoli design was mind-blowing! 🌺 Sargi ke dry fruits bhi designer baskets mein pack kiye. Saas maa ne bohot appreciate kiya! ❤️",
  },
  {
    id: 4,
    name: "Deepika Jain",
    content: "Bhaiya ki shaadi mein 100+ gifts pack karvaye. Dry fruits ke boxes se lekar clothes ki trays tak, har cheez ekdum perfect! 🎁 Special wooden nameplates bhi banwaye. Mittal ji ne personally sara color combination suggest kiya. Best service ever! ✨",
  },
  {
    id: 5,
    name: "Anjali Agarwal",
    content: "Navratri pooja ke liye complete decoration set liya - bandhanwar, rangoli base, diya stands, aur prasad ke boxes. 🙏 Sab kuch itna traditional yet modern tha! Same day delivery bhi mil gayi Firozabad mein. Highly recommended! 🌟",
  },
  {
    id: 6,
    name: "Neha Singhal",
    content: "Corporate Diwali gifting ke liye premium dry fruit baskets order kiye. Customized wooden boxes with company logo, aur traditional diyas ka combination was outstanding! 🏆 Clients ne kaha best corporate gift they ever received! 🎯",
  },
  {
    id: 7,
    name: "Shalini Garg",
    content: "Beti ki vidaai ke liye trousseau packing karvayi. Lehengas ke liye special size trays, jewelry ke handcrafted boxes, aur matching potli bags - everything was just perfect! 👰 Dulhan ki maa hone ke naate bohot emotional moment tha, aur presentation ne sab kuch aur special bana diya ❤️",
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % testimonials.length;
        console.log(`Moving from ${prevIndex} to ${nextIndex}`);
        return nextIndex;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    console.log(`Clicked dot ${index}`);
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-serif text-center text-amber-900 mb-12"
        >
          Customer Reviews ⭐
        </motion.h2>

        <div className="relative h-[450px] w-full max-w-4xl mx-auto"> {/* Increased height for longer reviews */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-rose-100 rounded-full filter blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />
                
                <FaQuoteLeft className="text-amber-300 text-4xl mb-6 relative z-10" />
                <p className="text-gray-600 text-lg mb-8 flex-grow relative z-10 leading-relaxed">
                  {testimonials[currentIndex].content}
                </p>
                <div className="flex items-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                    <FaUser className="text-amber-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-amber-900 font-medium text-lg">
                      {testimonials[currentIndex].name}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              whileHover={{ scale: 1.2 }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-amber-600 w-8' : 'bg-amber-200'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 