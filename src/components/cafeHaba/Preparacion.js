'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Coffee } from 'lucide-react'
import Image from 'next/image'

export default function PreparacionSection ({ opacity }) {
  const [blur, setBlur] = useState(0)

  useEffect(() => {
    if (!opacity || typeof opacity.onChange !== 'function') return
    const current = typeof opacity.get === 'function' ? opacity.get() : 0
    setBlur((1 - current) * 6)
    const unsubscribe = opacity.onChange(o => setBlur((1 - o) * 6))
    return unsubscribe
  }, [opacity])

  const colVariants = {
    hiddenLeft: { opacity: 0, x: -50 },
    hiddenRight: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  }

  const smokeVariants = {
    initial: { opacity: 0, y: 0, scale: 0.7 },
    animate: {
      opacity: [1, 1, 1],
      y: [100, 0, -10],
      scale: [0.7, 1.2, 0.9],
      transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
    }
  }

  return (
    <motion.section
      style={{ opacity, filter: `blur(${blur}px)` }}
      className='sticky top-0 h-screen flex items-center justify-center bg-[#efebe9] text-gray-900 px-6 z-30 relative'
    >
      {/* Fondo con logo */}
      <div className='absolute inset-0 flex items-center justify-center z-0'>
        <Image
          src='/logo.png'
          alt='Logo Café de Haba'
          fill
          className='object-contain opacity-30 pointer-events-none'
        />
      </div>

      {/* Contenedor de dos columnas */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-6xl z-10'>

        <motion.div
          initial='hiddenLeft'
          animate='visible'
          variants={colVariants}
          transition={{ duration: 0.8 }}
          className='bg-white/80 p-8 rounded-xl shadow-xl'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>Preparación</h2>
          <ol className='space-y-3 text-lg'>
            <li>Hervir agua a fuego medio.</li>
            <li>Agregar 1-2 cucharadas de café de haba molido.</li>
            <li>Dejar reposar 3-5 minutos para liberar aroma.</li>
            <li>Servir caliente o frío, endulzar al gusto.</li>
          </ol>
          <div className='flex items-center gap-2 mt-6'>
            <Coffee className='text-amber-600 w-8 h-8' />
            <span className='text-lg'>Una tradición en cada sorbo</span>
          </div>
        </motion.div>

        <motion.div
          initial='hiddenRight'
          animate='visible'
          variants={colVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex items-center justify-center relative'
        >
          <div className='relative flex flex-col items-center'>
            {/* Humo animado encima */}
            <div className='absolute -top-20 flex flex-row gap-4 items-start'>
              {[0, 0.3, 0.6].map((delay, index) => (
                <motion.div
                  key={index}
                  className='w-3 h-16 rounded-full blur-md bg-gradient-to-t from-[#D97706]/30 via-[#D97706]/50 to-[#D97706]/0'
                  variants={smokeVariants}
                  initial='initial'
                  animate='animate'
                  transition={{
                    duration: 5 + index * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay
                  }}
                  style={{ x: index * 2 }}
                />
              ))}
            </div>

            {/* Taza */}
            <motion.div
              className='mt-16 w-28 h-20 bg-amber-700 rounded-b-full relative'
              animate={{ y: [0, -4, 0], rotate: [0, 8, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className='absolute -top-2 -right-6 w-6 h-8 border-4 border-amber-700 rounded-full' />
            </motion.div>

          </div>
        </motion.div>

      </div>
    </motion.section>
  )
}
