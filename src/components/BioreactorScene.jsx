import { Canvas, useFrame } from '@react-three/fiber'

import {
  OrbitControls,
  Text
} from '@react-three/drei'

import {
  useMemo,
  useRef
} from 'react'


// ======================================
// PARTÍCULAS DEL FLUIDO
// ======================================

function FluidParticles({

  current,
  rho,
  torque,
  pressureDiff

}) {

  const particlesRef = useRef()

  // ======================================
  // DENSIDAD
  // ======================================

  const particleSize =

    0.03 +

    (rho - 500) * 0.00004

  // ======================================
  // PARTÍCULAS
  // ======================================

  const particles = useMemo(() => {

    const arr = []

    for (let i = 0; i < 350; i++) {

      arr.push({

        radius:
          0.2 + Math.random() * 1.5,

        theta:
          Math.random() * Math.PI * 2,

        height:
          Math.random() * 4 - 2,

        offset:
          Math.random() * 100

      })

    }

    return arr

  }, [])

  // ======================================
  // ANIMACIÓN CONTINUA
  // ======================================

  useFrame((state) => {

    const t =
      state.clock.getElapsedTime()

    particlesRef.current.children.forEach(

      (mesh, i) => {

        const p = particles[i]

        // ======================================
        // VELOCIDAD
        // ======================================

        const angularSpeed =

          (
            0.4 +

            current * 0.45 +

            torque * 60

          )

          *

          (1200 / rho)

        // ======================================
        // MOVIMIENTO HELICOIDAL
        // ======================================

        const theta =

          p.theta +

          t * angularSpeed

        // ======================================
        // VÓRTICE
        // ======================================

        const vortexRadius =

          p.radius +

          Math.sin(
            t * 1.5 +
            p.offset
          ) * 0.08

        const x =

          vortexRadius *

          Math.cos(theta)

        const z =

          vortexRadius *

          Math.sin(theta)

        // ======================================
        // RECIRCULACIÓN SUAVE
        // ======================================

        const turbulence =

            Math.min(
                current / 10,
                1
            )

            const chaoticTerm =

            Math.sin(
                t * 5 +
                p.offset
            )

            *

            turbulence

            *

            0.45

            const y =

            p.height +

            Math.cos(
                theta * 0.7 +
                t * 1.2
            ) * 0.15 +

            chaoticTerm

        mesh.position.set(
          x,
          y,
          z
        )

      }

    )

  })

  return (

    <group ref={particlesRef}>

      {

        particles.map((_, i) => (

          <mesh key={i}>

            <sphereGeometry
              args={[particleSize]}
            />

            <meshStandardMaterial

              color="#e4eb60"

              emissive="#e4eb60"

              emissiveIntensity={1.2}

            />

          </mesh>

        ))

      }

    </group>

  )

}


// ======================================
// BARRA MAGNÉTICA
// ======================================

function MagneticBar({

  current,
  torque

}) {

  const ref = useRef()

  useFrame(() => {

    const speed =

      0.03 +

      current * 0.03 +

      torque * 35

    ref.current.rotation.z += speed

  })

  return (

    <mesh

      ref={ref}

      rotation={[

        Math.PI / 2,

        0,

        0

      ]}

    >

      <cylinderGeometry
        args={[0.1, 0.1, 1.8, 32]}
      />

      <meshStandardMaterial

        color="#ff3b30"

        emissive="#ff3b30"

        emissiveIntensity={2}

        metalness={0.9}

        roughness={0.15}

      />

    </mesh>

  )

}


// ======================================
// TANQUE
// ======================================

function ReactorTank() {

  return (

    <mesh>

      <cylinderGeometry
        args={[2, 2, 5, 64]}
      />

      <meshPhysicalMaterial

        color="#a5d8ff"

        transparent

        opacity={0.13}

        transmission={1}

        roughness={0.03}

        clearcoat={1}

      />

    </mesh>

  )

}


// ======================================
// FLUIDO
// ======================================

function FluidBody() {

  return (

    <mesh>

      <cylinderGeometry
        args={[1.92, 1.92, 4.6, 64]}
      />

      <meshPhysicalMaterial

        color="#1d4ed8"

        transparent

        opacity={0.18}

      />

    </mesh>

  )

}


// ======================================
// ESCENA PRINCIPAL
// ======================================

export default function BioreactorScene({

  current,
  rho,
  torque,
  pressureDiff

}) {

  return (

    <div
      style={{

        height: '650px',

        width: '100%',

        borderRadius: '24px',

        overflow: 'hidden',

        background:
          'linear-gradient(to bottom, #020617, #0f172a)'

      }}
    >

      <Canvas
        camera={{
          position: [5, 3, 5]
        }}
      >

        {/* Luces */}

        <ambientLight intensity={1.6} />

        <pointLight
          position={[10, 10, 10]}
          intensity={3}
        />

        <pointLight
          position={[-10, 5, -10]}
          intensity={2}
          color="#e4eb60"
        />

        {/* Reactor */}

        <ReactorTank />

        <FluidBody />

        {/* Barra */}

        <MagneticBar

          current={current}

          torque={torque}

        />

        {/* Fluido */}

        <FluidParticles

          current={current}

          rho={rho}

          torque={torque}

          pressureDiff={pressureDiff}

        />

        {/* Texto */}

        <Text
          position={[0, 3.6, 0]}
          fontSize={0.25}
          color="white"
        >

          I = {current.toFixed(1)} A

        </Text>

        <Text
          position={[0, 3.2, 0]}
          fontSize={0.22}
          color="#00f5d4"
        >

          τ = {torque.toFixed(4)}

        </Text>

        <Text
          position={[0, 2.8, 0]}
          fontSize={0.22}
          color="#e4eb60"
        >

          ΔP = {pressureDiff.toFixed(1)}

        </Text>

        <OrbitControls />

      </Canvas>

    </div>

  )

}