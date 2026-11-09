"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Suspense } from "react";

import FloatingPlanet from "./FloatingPlanet";
import ParticleField from "./ParticleField";

export default function Scene3D() {
  return (
    <div className="scene3d">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />

          <pointLight
            position={[4, 3, 5]}
            intensity={35}
            color="#a3ff12"
          />

          <pointLight
            position={[-4, -2, 3]}
            intensity={12}
            color="#3b8d00"
          />

          <FloatingPlanet />
          <ParticleField />

          <Stars
            radius={70}
            depth={40}
            count={500}
            factor={3}
            saturation={0}
            fade
            speed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}