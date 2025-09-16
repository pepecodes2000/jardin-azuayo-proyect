"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import SavingsChallenge from "@/components/SavingsChallenge";
import InvestmentSimulator from "@/components/InvestmentSimulator";
import FinancialTips from "@/components/FinancialTips";
import ExpenseTracker from "@/components/ExpenseTracker";
import ProgressBar from "@/components/ProgressBar";
import Feedback from "@/components/Feedback";

// Fade animation CSS
const fadeStyles = {
  transition: "opacity 0.8s",
  opacity: 1,
};

export default function InteractivePage() {
  const [progress, setProgress] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [section, setSection] = useState(0); // 0: Hero, 1: Grid, 2: Progress, 3: Feedback
  const [fade, setFade] = useState(true);

  const handleSuccess = () => {
    setProgress(Math.min(100, progress + 10));
    setFeedback("like");
  };

  const handleNeutral = () => {
    setFeedback("neutral");
  };

  const handleFail = () => {
    setProgress(Math.max(0, progress - 5));
    setFeedback("sad");
  };

  // Navegación simulada en vez de scroll
  const nextSection = () => {
    setFade(false);
    setTimeout(() => {
      setSection((prev) => Math.min(prev + 1, 3));
      setFade(true);
    }, 400);
  };

  const prevSection = () => {
    setFade(false);
    setTimeout(() => {
      setSection((prev) => Math.max(prev - 1, 0));
      setFade(true);
    }, 400);
  };

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(to bottom, #a67c52 0%, #d2b48c 100%)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          ...fadeStyles,
          opacity: fade ? 1 : 0,
          width: "100%",
          maxWidth: "900px",
        }}
      >
        {section === 0 && <Hero />}
        {section === 1 && (
          <div className="grid md:grid-cols-2 gap-6">
            <SavingsChallenge onSuccess={handleSuccess} onNeutral={handleNeutral} />
            <InvestmentSimulator onSuccess={handleSuccess} onFail={handleFail} />
            <ExpenseTracker onSuccess={handleSuccess} onFail={handleFail} />
            <FinancialTips />
          </div>
        )}
        {section === 2 && <ProgressBar progress={progress} />}
        {section === 3 && <Feedback type={feedback} />}
      </div>
      <div className="flex gap-4 mt-8">
        <button
          onClick={prevSection}
          disabled={section === 0}
          className="px-4 py-2 bg-[#8b5c2a] text-white rounded disabled:opacity-50"
        >
          Atrás
        </button>
        <button
          onClick={nextSection}
          disabled={section === 3}
          className="px-4 py-2 bg-[#8b5c2a] text-white rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </main>
  );
}
