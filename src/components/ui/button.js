"use client";
import React from "react";
import clsx from "clsx";

export function Button({ children, variant = "primary", className, ...props }) {
  const baseStyles =
    "px-5 py-2 rounded-2xl font-semibold transition-all duration-300 shadow-md focus:outline-none";

  const variants = {
    primary:
      "bg-green-600 text-white hover:bg-green-700 active:scale-95",
    secondary:
      "bg-yellow-500 text-black hover:bg-yellow-600 active:scale-95",
    outline:
      "border border-green-600 text-green-600 hover:bg-green-50 active:scale-95",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
