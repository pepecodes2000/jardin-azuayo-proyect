'use client'
import { motion } from 'framer-motion'

export default function Section ({ title, text }) {
  return (
    <section className='relative flex flex-col items-center justify-center text-center py-16 px-6 bg-white rounded-2xl shadow-lg mt-10'>
      <motion.h2
        className='text-2xl md:text-4xl font-bold text-gray-800'
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {title}
      </motion.h2>

      <motion.p
        className='mt-6 text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed whitespace-pre-line'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        {text}
      </motion.p>
    </section>
  )
}
