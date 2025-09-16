"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-r from-green-400 via-blue-500 to-yellow-400 rounded-2xl shadow-lg overflow-hidden">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        📊 COAC JA & ISTEPS
      </motion.h1>

      <motion.h2
        className="mt-2 text-2xl md:text-4xl font-semibold text-white drop-shadow-md"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Programa CCL 2025
      </motion.h2>

      <motion.p
        className="mt-6 text-lg md:text-2xl text-white/90 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        💡 “Tu economía, nuestra comunidad”
      </motion.p>
    </section>
  );
}
