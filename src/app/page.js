'use client'

import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home () {
  return (
    <main className='min-h-screen bg-gradient-to-br from-green-100 via-white to-blue-100 text-gray-800'>
      {/* Hero */}
      <Hero />

      {/* Secciones principales */}
      <div className='max-w-5xl mx-auto px-6 py-12 space-y-12'>
        <Section
          title='1. Descripción del problema y/o necesidad'
          text='Gran parte de la población enfrenta dificultades para manejar adecuadamente sus finanzas personales y familiares.
            Más del 30% de las personas no lleva un registro de ingresos y gastos, lo que genera sobreendeudamiento y poca capacidad de ahorro.
            El problema se agrava porque la mayoría de herramientas financieras son costosas, complejas o poco accesibles.'
        />

        <Section
          title='2. Nuestra solución'
          text='Un programa digital gratuito y accesible, diseñado como página web,
            que permita registrar ingresos y gastos de manera rápida, generar métricas visuales de salud financiera
            y ofrecer recomendaciones simples para fomentar el ahorro y la planificación solidaria.'
        />

        <Section
          title='3. Proceso creativo'
          text='La idea surge a partir de la reflexión sobre el cooperativismo y la necesidad de herramientas financieras inclusivas.
            Mediante lluvia de ideas y análisis de aplicaciones existentes, se determinó crear una solución gratuita y comunitaria
            que será validada y mejorada con retroalimentación de los usuarios.'
        />

        <Section
          title='4. Componente socio-creativo'
          text='El proyecto combina tecnología y vocación social.
            No solo apoya a la gestión personal, sino que fomenta el aprendizaje colectivo y la cooperación.
            Promueve la educación financiera en sectores que no acceden a este tipo de servicios, fortaleciendo la organización comunitaria.'
        />

        <Section
          title='5. Factor de innovación'
          text='A diferencia de aplicaciones tradicionales, nuestra herramienta es gratuita, sin publicidad y con enfoque cooperativo.
            Está pensada para ser usada en comunidades, cooperativas y asociaciones,
            generando un valor único al promover la colaboración y el bienestar económico colectivo.'
        />
      </div>

      <div className='flex justify-center'>
        <Link href='/cafe_de_haba' passHref>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='mt-8 inline-block bg-white text-green-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition'
          >
            Comenzar
          </motion.button>
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
