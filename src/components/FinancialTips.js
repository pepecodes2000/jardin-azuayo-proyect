"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tips = [
  "Ahorra al menos el 10% de tus ingresos cada mes.",
  "Diversifica tus inversiones para reducir riesgos.",
  "No gastes más de lo que ganas, planifica primero.",
  "El cooperativismo es crecer juntos: ¡aporta y participa!",
  "La disciplina financiera es más importante que la cantidad.",
];

export default function FinancialTips() {
  const [tip, setTip] = useState(null);

  const handleTip = () => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setTip(randomTip);
  };

  return (
    <Card className="p-4 shadow-lg">
      <CardContent className="space-y-3">
        <h2 className="text-xl font-bold text-purple-600">Consejos Financieros</h2>
        {tip ? <p className="italic">💡 {tip}</p> : <p className="text-gray-500">Haz clic para un consejo</p>}
        <Button onClick={handleTip}>Mostrar consejo</Button>
      </CardContent>
    </Card>
  );
}
