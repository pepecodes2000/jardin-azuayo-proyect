"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/**
 * @param {{ onSuccess: () => void, onFail: () => void }} props
 */
export default function ExpenseTracker({ onSuccess, onFail }) {
  const [balance, setBalance] = useState(100);

  const handleExpense = () => {
    const amount = Math.floor(Math.random() * 40);
    const newBalance = balance - amount;
    setBalance(newBalance);
    newBalance > 50 ? onSuccess() : onFail();
  };

  return (
    <Card className="p-4 shadow-lg">
      <CardContent className="space-y-3">
        <h2 className="text-xl font-bold text-primary">Medidor de Gastos</h2>
        <p className="text-sm text-gray-500">Balance actual: ${balance}</p>
        <Button onClick={handleExpense}>Gastar</Button>
      </CardContent>
    </Card>
  );
}
