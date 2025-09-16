"use client";
import { motion } from "framer-motion";

export default function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-gray-200 rounded-2xl h-6 overflow-hidden">
      <motion.div
        className="h-full bg-secondary"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}
