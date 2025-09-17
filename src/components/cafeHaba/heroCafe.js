'use client'
import { motion } from 'framer-motion'

export default function HeroCafe () {
  return (
    <section className='relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden'>
      {/* Animación del grano cayendo */}
      <motion.div
        initial={{ y: -200, scale: 0.5, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 2, type: 'spring' }}
        className='w-20 h-28 bg-gradient-to-b from-[#4e342e] to-[#3e2723] rounded-full shadow-2xl'
      />

      {/* Aparición del texto después */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className='text-5xl md:text-7xl font-bold mt-10'
      >
        Café de Haba
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className='mt-4 text-lg md:text-2xl text-gray-300 max-w-2xl text-center'
      >
        Un producto ancestral, nutritivo y libre de cafeína.
        Vive la tradición con un sabor auténtico de nuestra tierra.
      </motion.p>

      {/* Botón CTA */}
      <motion.a
        href='#beneficios'
        whileHover={{ scale: 1.05 }}
        className='mt-8 inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-200 transition'
      >
        Descubre más
      </motion.a>
    </section>
  )
}
