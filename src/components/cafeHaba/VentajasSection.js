'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Leaf, Star } from 'lucide-react'

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
      className='sticky top-0 h-screen flex flex-col items-center justify-center bg-[#fafafa] text-gray-900 px-6 z-30'
    >
      <div className='bg-white/80 p-8 rounded-xl shadow-xl max-w-3xl text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>Ventajas del Café de Haba</h2>
        <ul className='space-y-4 text-lg md:text-xl'>
          <li className='flex items-center gap-3'>
            <CheckCircle className='text-green-600 w-6 h-6' /> Libre de cafeína, ideal para todos.
          </li>
          <li className='flex items-center gap-3'>
            <Leaf className='text-emerald-600 w-6 h-6' /> Nutrición: fibra, proteína y minerales esenciales.
          </li>
          <li className='flex items-center gap-3'>
            <Star className='text-amber-500 w-6 h-6' /> Herencia ancestral de la sierra ecuatoriana.
          </li>
        </ul>
      </div>
    </motion.section>
  )
}
