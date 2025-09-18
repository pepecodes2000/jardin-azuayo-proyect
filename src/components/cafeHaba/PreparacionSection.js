'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Coffee } from 'lucide-react'

export default function PreparacionSection ({ opacity }) {
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
      className='sticky top-0 h-screen flex flex-col items-center justify-center bg-[#efebe9] text-gray-900 px-6 z-10'
    >
      <div className='bg-white shadow-xl p-8 rounded-xl max-w-3xl text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>Preparación</h2>
        <ol className='space-y-3 text-lg text-left'>
          <li>Hervir agua a fuego medio.</li>
          <li>Agregar 1-2 cucharadas de café de haba molido.</li>
          <li>Dejar reposar 3-5 minutos para liberar aroma.</li>
          <li>Servir caliente o frío, endulzar al gusto.</li>
        </ol>
        <div className='flex items-center justify-center gap-2 mt-6'>
          <Coffee className='text-amber-600 w-8 h-8' />
          <span className='text-lg'>Una tradición en cada sorbo</span>
        </div>
      </div>
    </motion.section>
  )
}
