"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * @param {{ type: "like" | "meh" | "cry" | null, onEnd: () => void }} props
 */
export default function Feedback({ type, onEnd }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (type) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        onEnd();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [type, onEnd]);

  if (!type || !visible) return null;

  const icons = {
    like: "👍",
    meh: "😐",
    cry: "😭",
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center pointer-events-none text-6xl"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
    >
      <span className="drop-shadow-lg">{icons[type]}</span>
    </motion.div>
  );
}
