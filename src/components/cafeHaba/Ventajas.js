'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Leaf, Star } from 'lucide-react'
import Image from 'next/image'

export default function VentajasSection ({ opacity }) {
  const [blur, setBlur] = useState(0)
  useEffect(() => {
    if (!opacity || typeof opacity.onChange !== 'function') return
    const current = typeof opacity.get === 'function' ? opacity.get() : 0
    setBlur((1 - current) * 6)
    const unsubscribe = opacity.onChange(o => setBlur((1 - o) * 6))
    return unsubscribe
  }, [opacity])

  return (
    <motion.section
      style={{
        opacity,
        filter: `blur(${blur}px)`
      }}
      className='sticky top-0 h-screen flex items-center justify-center bg-[#fafafa] text-gray-900 px-6 z-30 relative'
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

        {/* Columna Izquierda - Imagen */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='flex items-center justify-center'
        >
          <Image
            src='https://www.lavanguardia.com/files/image_990_484/uploads/2017/04/02/5fa3c781884b7.jpeg'
            alt='Imagen Café de Haba'
            width={600}
            height={400}
            className='rounded-xl shadow-xl object-cover w-full h-full max-h-[500px]'
          />
        </motion.div>

        {/* Columna Derecha - Ventajas */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='bg-white/80 p-8 rounded-xl shadow-xl text-center'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>Ventajas del Café de Haba</h2>
          <ul className='space-y-6 text-lg md:text-xl text-left'>
            <motion.li
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className='flex items-center gap-3'
            >
              <CheckCircle className='text-green-600 w-6 h-6 flex-shrink-0' />
              Libre de cafeína, ideal para todos.
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='flex items-center gap-3'
            >
              <Leaf className='text-emerald-600 w-6 h-6 flex-shrink-0' />
              Nutrición: fibra, proteína y minerales esenciales.
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='flex items-center gap-3'
            >
              <Star className='text-amber-500 w-6 h-6 flex-shrink-0' />
              Herencia ancestral de la sierra ecuatoriana.
            </motion.li>
          </ul>
        </motion.div>

      </div>
    </motion.section>
  )
}
