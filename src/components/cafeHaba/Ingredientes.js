'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function IngredientesSection ({ opacity }) {
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
      className='sticky top-0 h-screen flex flex-col items-center justify-center bg-[#5d4037] text-yellow-100 px-6 z-20'
    >
      <div className='bg-[#3e2723]/80 p-8 rounded-xl shadow-xl max-w-3xl text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>Ingredientes</h2>
        <div className='overflow-x-auto'>
          <table className='min-w-full text-sm md:text-base text-yellow-100'>
            <thead className='bg-[#4e342e]'>
              <tr>
                <th className='px-4 py-2'>Ingrediente</th>
                <th className='px-4 py-2'>Beneficio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='px-4 py-2'>Haba</td>
                <td className='px-4 py-2'>Fuente natural de proteína y fibra</td>
              </tr>
              <tr className='bg-[#4e342e]'>
                <td className='px-4 py-2'>Agua pura</td>
                <td className='px-4 py-2'>Infusión sin aditivos</td>
              </tr>
              <tr>
                <td className='px-4 py-2'>Empaque ecológico</td>
                <td className='px-4 py-2'>Respeta el ambiente</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </motion.section>
  )
}
