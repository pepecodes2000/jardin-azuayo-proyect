"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-r from-green-400 via-blue-500 to-yellow-400 text-white py-10 px-6 rounded-t-2xl shadow-lg text-center">
      <motion.p
        className="text-lg md:text-xl font-semibold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        🌍 “Tu economía, nuestra comunidad”
      </motion.p>

      <motion.p
        className="mt-2 text-sm text-white/80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        © 2025 COAC JA & ISTEPS – Programa CCL 2025
      </motion.p>
    </footer>
  );
}
