'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function HeroCafeSection ({ opacity }) {
  const [blur, setBlur] = useState(0)
  useEffect(() => {
    if (!opacity || typeof opacity.onChange !== 'function') return
    // valor inicial
    const current = typeof opacity.get === 'function' ? opacity.get() : 1
    setBlur((1 - current) * 8)
    const unsubscribe = opacity.onChange(o => setBlur((1 - o) * 8))
    return unsubscribe
  }, [opacity])

  const [showImage, setShowImage] = useState(false)

  return (
    <motion.section
      style={{
        opacity,
        filter: `blur(${blur}px)`
      }}
      className='sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#3e2723] to-[#5d4037] text-yellow-100 px-6 z-40'
    >
      <motion.div
        initial={{ y: -200, scale: 0.5, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 2, type: 'spring' }}
        className='w-28 h-36 bg-gradient-to-b from-[#4e342e] to-[#3e2723] rounded-full shadow-2xl flex items-center justify-center relative'
        onAnimationComplete={() => setShowImage(true)}
      >
        {showImage && (
          <motion.img
            src='/haba.png'
            alt='Haba'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className='absolute w-20 h-20 object-contain'
          />
        )}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className='text-5xl md:text-8xl font-serif mt-10'
      >
        Café de Haba
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className='mt-4 text-lg md:text-2xl text-[#d7ccc8] max-w-2xl text-center'
      >
        Un producto ancestral, nutritivo y libre de cafeína. Vive la tradición con un sabor auténtico de nuestra tierra.
      </motion.p>
    </motion.section>
  )
}
