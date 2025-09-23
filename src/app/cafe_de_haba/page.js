'use client'

import { useScroll, useTransform } from 'framer-motion'
import HeroCafe from '@/components/cafeHaba/HeroCafe'
import VentajasSection from '@/components/cafeHaba/Ventajas'
import IngredientesSection from '@/components/cafeHaba/Ingredientes'
import PreparacionSection from '@/components/cafeHaba/Preparacion'

export default function Page () {
  const { scrollY } = useScroll()

  const heroOpacity = useTransform(scrollY, [0, 400, 600], [1, 0.5, 0])
  const ventajasOpacity = useTransform(scrollY, [400, 600, 700, 900, 1000], [0, 0.5, 1, 0.5, 0])
  const ingredientesOpacity = useTransform(scrollY, [900, 1100, 1200, 1400, 1500, 1600], [0, 0.5, 1, 1, 0.5, 0])
  const preparacionOpacity = useTransform(scrollY, [1400, 1700, 1900], [0, 0.5, 1])

  return (
    <main className='font-sans text-gray-900 relative overflow-hidden'>
      <HeroCafe opacity={heroOpacity} />
      <VentajasSection opacity={ventajasOpacity} />
      <IngredientesSection opacity={ingredientesOpacity} />
      <PreparacionSection opacity={preparacionOpacity} />
    </main>
  )
}
