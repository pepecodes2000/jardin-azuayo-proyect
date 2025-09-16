"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function InvestmentSimulator({ onSuccess, onFail }) {
  const [capital, setCapital] = useState(100);

  const handleInvest = () => {
    const chance = Math.random();
    if (chance > 0.5) {
      const profit = Math.floor(Math.random() * 40);
      setCapital(capital + profit);
      onSuccess();
    } else {
      const loss = Math.floor(Math.random() * 30);
      setCapital(Math.max(0, capital - loss));
      onFail();
    }
  };

  return (
    <Card className="p-4 shadow-lg">
      <CardContent className="space-y-3">
        <h2 className="text-xl font-bold text-blue-600">Simulador de Inversión</h2>
        <p className="text-sm text-gray-500">Capital: ${capital}</p>
        <Button onClick={handleInvest}>Invertir</Button>
      </CardContent>
    </Card>
  );
}
