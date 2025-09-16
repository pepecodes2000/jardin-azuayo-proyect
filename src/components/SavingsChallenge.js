"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SavingsChallenge({ onSuccess, onNeutral }) {
  const [income, setIncome] = useState(200);
  const [savings, setSavings] = useState(0);

  const handleSave = () => {
    const amount = Math.floor(Math.random() * 60);
    const newSavings = savings + amount;
    setSavings(newSavings);

    const percent = (newSavings / income) * 100;
    if (percent >= 20) {
      onSuccess();
    } else {
      onNeutral();
    }
  };

  return (
    <Card className="p-4 shadow-lg">
      <CardContent className="space-y-3">
        <h2 className="text-xl font-bold text-green-600">Reto de Ahorro</h2>
        <p className="text-sm text-gray-500">
          Ingreso: ${income} — Ahorro actual: ${savings}
        </p>
        <Button onClick={handleSave}>Ahorrar</Button>
      </CardContent>
    </Card>
  );
}
