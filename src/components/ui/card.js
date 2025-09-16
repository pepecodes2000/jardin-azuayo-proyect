"use client";
import React from "react";
import clsx from "clsx";

export function Card({ className, children }) {
  return (
    <div
      className={clsx(
        "rounded-2xl shadow-lg bg-white border border-gray-200 overflow-hidden",
        "hover:shadow-xl transition-shadow duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardContent({ className, children }) {
  return (
    <div className={clsx("p-6", className)}>
      {children}
    </div>
  );
}
