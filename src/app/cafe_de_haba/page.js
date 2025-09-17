'use client'

import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { TextureLoader } from 'three'
import { useRef } from 'react'

// === Componente del grano de haba (con textura) ===
function HabaImage () {
  const ref = useRef()
  const texture = useLoader(TextureLoader, '/haba.png') // asegúrate que esté en /public

  useFrame((state) => {
    if (ref.current) {
      // animación arriba/abajo + rotación
      ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5 - 1
      ref.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={ref}>
      {/* Un plano con la textura de la haba */}
      <planeGeometry args={[2.5, 2.5]} />
      <meshStandardMaterial map={texture} transparent />
    </mesh>
  )
}

// === Escena principal ===
export default function Hero3D () {
  return (
    <section className='h-screen w-full bg-black text-white relative'>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />

        {/* Aquí usamos la haba animada */}
        <HabaImage />

        <OrbitControls enableZoom={false} />
      </Canvas>

      <div className='absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none'>
        <h1 className='text-5xl md:text-7xl font-bold'>Café de Haba</h1>
        <p className='mt-4 text-gray-300 max-w-xl'>
          El sabor ancestral, nutritivo y libre de cafeína que conecta cultura y bienestar.
        </p>
      </div>
    </section>
  )
}
