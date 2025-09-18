'use client'

import { useScroll, useTransform } from 'framer-motion'
import HeroCafe from '@/components/cafeHaba/heroCafe'
import VentajasSection from '@/components/cafeHaba/ventajasSection'
import IngredientesSection from '@/components/cafeHaba/IngredientesSection'
import PreparacionSection from '@/components/cafeHaba/PreparacionSection'

export default function Page () {
  const { scrollY } = useScroll()

  const heroOpacity = useTransform(scrollY, [0, 400, 500], [1, 0.5, 0])
  const ventajasOpacity = useTransform(scrollY, [500, 600, 700], [0, 0.5, 1])
  const ingredientesOpacity = useTransform(scrollY, [1200, 1300, 1400], [0, 0.5, 1])
  const preparacionOpacity = useTransform(scrollY, [1800, 1900, 2000], [0, 0.5, 1])

  return (
    <main className='font-sans text-gray-900 relative overflow-hidden'>
      <HeroCafe opacity={heroOpacity} />
      <VentajasSection opacity={ventajasOpacity} />
      <IngredientesSection opacity={ingredientesOpacity} />
      <PreparacionSection opacity={preparacionOpacity} />
    </main>
  )
}
