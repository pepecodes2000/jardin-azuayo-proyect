'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function HeroCafe () {
  const [showImage, setShowImage] = useState(false)
  const { scrollY } = useScroll()

  const heroOpacity = useTransform(scrollY, [0, 400, 450], [1, 0.5, 0])
  const ventajasOpacity = useTransform(scrollY, [350, 400, 800], [0, 0.5, 1])
  const ingredientesOpacity = useTransform(scrollY, [750, 800, 1200], [0, 0.5, 1])
  const preparacionOpacity = useTransform(scrollY, [1150, 1200, 1600], [0, 0.5, 1])

  return (
    <main className='bg-[#3e2723] text-white overflow-hidden font-sans'>
      <div className='relative h-[400vh]'>
        {/* HERO */}
        <motion.section
          style={{
            opacity: heroOpacity,
            filter: `blur(${(1 - heroOpacity) * 8}px)`
          }}
          className='sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#3e2723] to-[#5d4037]'
        >
          {/* Grano animado */}
          <motion.div
            initial={{ y: -200, scale: 0.5, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 2, type: 'spring' }}
            className='w-24 h-32 bg-gradient-to-b from-[#4e342e] to-[#3e2723] rounded-full shadow-2xl flex items-center justify-center relative'
            onAnimationComplete={() => setShowImage(true)}
          >
            {showImage && (
              <motion.img
                src='/haba.png'
                alt='Haba'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className='absolute w-16 h-16 object-contain'
              />
            )}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className='text-5xl md:text-7xl font-serif mt-10 text-yellow-100'
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

          {/* Imagen decorativa de fondo */}
          <motion.img
            src='/coffee-leaf.png'
            alt='Decoración hoja café'
            className='absolute bottom-10 right-10 w-32 opacity-30 rotate-[-15deg]'
          />
        </motion.section>

        {/* VENTAJAS */}
        <motion.section
          style={{
            opacity: ventajasOpacity,
            filter: `blur(${(1 - ventajasOpacity) * 6}px)`
          }}
          className="sticky top-0 h-screen flex items-center justify-center bg-[url('/ventajas.jpg')] bg-cover bg-center"
        >
          <div className='bg-[#5d4037]/70 p-6 rounded-xl text-white text-3xl md:text-4xl font-bold text-center'>
            Ventajas del café de haba
          </div>
          <motion.img
            src='/coffee-beans.png'
            alt='Granos de café'
            className='absolute top-10 left-10 w-24 opacity-30'
          />
        </motion.section>

        {/* INGREDIENTES */}
        <motion.section
          style={{
            opacity: ingredientesOpacity,
            filter: `blur(${(1 - ingredientesOpacity) * 6}px)`
          }}
          className="sticky top-0 h-screen flex items-center justify-center bg-[url('/ingredientes.jpg')] bg-cover bg-center"
        >
          <div className='bg-[#5d4037]/70 p-6 rounded-xl text-white text-3xl md:text-4xl font-bold text-center'>
            Ingredientes
          </div>
          <motion.img
            src='/coffee-leaf.png'
            alt='Hojas decorativas'
            className='absolute bottom-10 right-10 w-28 opacity-30 rotate-[10deg]'
          />
        </motion.section>

        {/* PREPARACIÓN */}
        <motion.section
          style={{
            opacity: preparacionOpacity,
            filter: `blur(${(1 - preparacionOpacity) * 6}px)`
          }}
          className="sticky top-0 h-screen flex items-center justify-center bg-[url('/preparacion.jpg')] bg-cover bg-center"
        >
          <div className='bg-[#5d4037]/70 p-6 rounded-xl text-white text-3xl md:text-4xl font-bold text-center'>
            Preparación
          </div>
          <motion.img
            src='/coffee-cup.png'
            alt='Taza café'
            className='absolute top-10 right-10 w-32 opacity-40 rotate-[-10deg]'
          />
        </motion.section>
      </div>
    </main>
  )
}
