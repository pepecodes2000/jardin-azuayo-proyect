'use client'

import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home () {
  return (
    <main className='min-h-screen bg-gradient-to-br from-green-100 via-white to-blue-100 text-gray-800'>
      {/* Hero */}
      <Hero />

      {/* Secciones principales */}
      <div className='max-w-5xl mx-auto px-6 py-12 space-y-12'>
        <Section
          title='1. Descripción del problema y/o necesidad'
          text='El café de haba, bebida ancestral de la sierra ecuatoriana, ha perdido relevancia frente al café convencional.
                Su bajo posicionamiento, falta de promoción y escasa transmisión cultural ponen en riesgo una
                tradición que tiene alto valor nutritivo y económico para comunidades locales.'
        />

        <Section
          title='2. Nuestra solución'
          text='Impulsar un modelo de producción y comercialización sostenible del café de haba.
           Esto incluye capacitación a productores, innovación en empaques y marketing digital,
            además de posicionarlo como alternativa saludable, libre de cafeína y con identidad cultural.'
        />

        <Section
          title='3. Proceso creativo'
          text='La idea surgió de sesiones de lluvia de ideas en torno al rescate de productos ancestrales. Se evaluaron alternativas y se definió el café de haba por su potencial nutritivo, cultural y de mercado, planteando validación inicial en ferias locales y comunidades.'
        />

        <Section
          title='4. Componente socio-creativo'
          text='El proyecto conecta tradición y tecnología: rescata un producto ancestral y lo proyecta a un mercado moderno. Combina creatividad (branding, empaques ecológicos) con impacto social (fortalecer productores locales y cooperativismo).'
        />

        <Section
          title='5. Factor de innovación'
          text='La innovación radica en su propuesta gratuita de rescate cultural, acompañada de marketing digital y empaques ecológicos, diferenciándose de productos convencionales. Se dirige a consumidores conscientes y gourmet, un nicho en expansión.'
        />

        <Section
          title='6. Propuesta de valor'
          text='El Café de Haba es una alternativa saludable al café convencional:
  sin cafeína, nutritivo, ancestral y sostenible.
  Ofrece al consumidor una experiencia cultural y un producto con propósito social.'
        />

        <Section
          title='7. Prototipado'
          text='El producto avanza en cuatro fases:
  base artesanal, pruebas locales, empaque ecológico y PMV listo para el mercado.'
        />
        <div className='overflow-x-auto bg-white rounded-xl shadow-md p-4'>
          <table className='min-w-full text-sm text-left text-gray-700'>
            <thead className='bg-amber-200'>
              <tr>
                <th className='px-4 py-2'>Fase</th>
                <th className='px-4 py-2'>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='px-4 py-2 font-semibold'>Base</td>
                <td className='px-4 py-2'>Producción artesanal inicial.</td>
              </tr>
              <tr className='bg-amber-50'>
                <td className='px-4 py-2 font-semibold'>1.0</td>
                <td className='px-4 py-2'>Pruebas en ferias y comunidades.</td>
              </tr>
              <tr>
                <td className='px-4 py-2 font-semibold'>2.0</td>
                <td className='px-4 py-2'>Empaque ecológico y branding.</td>
              </tr>
              <tr className='bg-amber-50'>
                <td className='px-4 py-2 font-semibold'>PMV</td>
                <td className='px-4 py-2'>Versión lista para escalar.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Section
          title='8. Actividades claves'
          text='Claves: selección de haba, tostado y molienda, empaque sostenible,
  marketing en ferias y digital, distribución en tiendas y cooperativas.'
        />

        <Section
          title='9. Recursos claves'
          text='Recursos principales: humanos (productores y marketing),
  técnicos (maquinaria), materiales (haba y empaques) y financieros (capital semilla).'
        />
        <div className='overflow-x-auto bg-white rounded-xl shadow-md p-4'>
          <table className='min-w-full text-sm text-left text-gray-700'>
            <thead className='bg-amber-200'>
              <tr>
                <th className='px-4 py-2'>Categoría</th>
                <th className='px-4 py-2'>Detalle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='px-4 py-2 font-semibold'>Humanos</td>
                <td className='px-4 py-2'>Productores y equipo de marketing.</td>
              </tr>
              <tr className='bg-amber-50'>
                <td className='px-4 py-2 font-semibold'>Técnicos</td>
                <td className='px-4 py-2'>Maquinaria de tostado y molienda.</td>
              </tr>
              <tr>
                <td className='px-4 py-2 font-semibold'>Materiales</td>
                <td className='px-4 py-2'>Haba seleccionada y empaques eco.</td>
              </tr>
              <tr className='bg-amber-50'>
                <td className='px-4 py-2 font-semibold'>Financieros</td>
                <td className='px-4 py-2'>Capital semilla y microcréditos.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Section
          title='10. Segmentación de clientes'
          text='Cuatro segmentos clave conforman el mercado meta, destacando adultos mayores
  y consumidores saludables con el 65% del potencial.'
        />
        <div className='overflow-x-auto bg-white rounded-xl shadow-md p-4'>
          <table className='min-w-full text-sm text-left text-gray-700'>
            <thead className='bg-amber-200'>
              <tr>
                <th className='px-4 py-2'>Segmento</th>
                <th className='px-4 py-2'>%</th>
                <th className='px-4 py-2'>Razón</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='px-4 py-2 font-semibold'>Adultos mayores</td>
                <td className='px-4 py-2'>35%</td>
                <td className='px-4 py-2'>Alternativa sin cafeína.</td>
              </tr>
              <tr className='bg-amber-50'>
                <td className='px-4 py-2 font-semibold'>Consumidores saludables</td>
                <td className='px-4 py-2'>30%</td>
                <td className='px-4 py-2'>Buscan productos naturales.</td>
              </tr>
              <tr>
                <td className='px-4 py-2 font-semibold'>Cultural y gourmet</td>
                <td className='px-4 py-2'>20%</td>
                <td className='px-4 py-2'>Valoran tradición e identidad.</td>
              </tr>
              <tr className='bg-amber-50'>
                <td className='px-4 py-2 font-semibold'>Comunidades</td>
                <td className='px-4 py-2'>15%</td>
                <td className='px-4 py-2'>Consumo solidario y en volumen.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Section
          title='11. Canales de distribución'
          text='El Café de Haba llegará al consumidor final a través de tres canales principales:
          (1) ferias locales y comunitarias,
          (2) tiendas gourmet y cafeterías,
          (3) venta digital mediante redes sociales y página web.
          Estos canales permiten abarcar tanto un mercado tradicional como uno moderno y digital.'
        />

        <Section
          title='12. Relación con clientes'
          text='La estrategia de relación se basará en:
          atención personalizada en ferias,
          fidelización mediante programas de recompra en tiendas,
          y comunidad digital activa con recetas, beneficios y cultura ancestral en la web.
          El objetivo es crear vínculos emocionales y de confianza con los consumidores.'
        />

        <Section
          title='13. Aliados estratégicos'
          text='El proyecto contará con aliados estratégicos para fortalecer su impacto:'
        />
        <div className='overflow-x-auto bg-white rounded-xl shadow-md p-4'>
          <table className='min-w-full text-sm text-left text-gray-700'>
            <thead className='bg-amber-200'>
              <tr>
                <th className='px-4 py-2'>Aliado</th>
                <th className='px-4 py-2'>Contribución</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='px-4 py-2 font-semibold'>Cooperativas</td>
                <td className='px-4 py-2'>Apoyo en financiamiento y comercialización.</td>
              </tr>
              <tr className='bg-amber-50'>
                <td className='px-4 py-2 font-semibold'>Instituciones educativas</td>
                <td className='px-4 py-2'>Promoción de educación financiera y cultural.</td>
              </tr>
              <tr>
                <td className='px-4 py-2 font-semibold'>Tiendas locales y gourmet</td>
                <td className='px-4 py-2'>Espacios de venta y posicionamiento.</td>
              </tr>
              <tr className='bg-amber-50'>
                <td className='px-4 py-2 font-semibold'>Gobiernos locales</td>
                <td className='px-4 py-2'>Impulso a productos ancestrales en ferias y programas comunitarios.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Section
          title='14. Estructura de costos'
          text='La estructura de costos del proyecto incluye insumos, producción y comercialización.
          Se proyecta mantener un equilibrio entre calidad y precio accesible.'
        />
        <div className='overflow-x-auto bg-white rounded-xl shadow-md p-4'>
          <table className='min-w-full text-sm text-left text-gray-700'>
            <thead className='bg-amber-200'>
              <tr>
                <th className='px-4 py-2'>Categoría</th>
                <th className='px-4 py-2'>Detalle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='px-4 py-2 font-semibold'>Materia prima</td>
                <td className='px-4 py-2'>Compra de haba seleccionada a productores locales.</td>
              </tr>
              <tr className='bg-amber-50'>
                <td className='px-4 py-2 font-semibold'>Producción</td>
                <td className='px-4 py-2'>Tostado, molienda, empaque y control de calidad.</td>
              </tr>
              <tr>
                <td className='px-4 py-2 font-semibold'>Marketing</td>
                <td className='px-4 py-2'>Publicidad digital, página web y promoción en ferias.</td>
              </tr>
              <tr className='bg-amber-50'>
                <td className='px-4 py-2 font-semibold'>Distribución</td>
                <td className='px-4 py-2'>Logística de transporte y almacenamiento.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Section
          title='15. Estrategia de marketing'
          text='La promoción del Café de Haba se enfocará en medios digitales y físicos.
          En lo digital, se usará la página web oficial
          junto con redes sociales y campañas de contenido (recetas, cultura, beneficios).
          En lo físico, se impulsará mediante ferias, degustaciones en tiendas gourmet
          y alianzas con cooperativas. Esta combinación garantiza visibilidad, confianza
          y posicionamiento en el mercado.'
        />

      </div>

      <div className='flex justify-center'>
        <Link href='/cafe_de_haba' passHref>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='mt-8 inline-block bg-white text-green-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition'
          >
            Nuestro producto!!
          </motion.button>
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
