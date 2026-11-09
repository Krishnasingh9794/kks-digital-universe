"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Group } from "three";

export default function FloatingPlanet() {
  const planetRef = useRef<Mesh>(null);
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * 0.25;
      planetRef.current.rotation.x += delta * 0.08;
    }

    if (groupRef.current) {
      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.8) * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={planetRef}>
        <icosahedronGeometry args={[1.35, 5]} />
        <meshStandardMaterial
          color="#70c900"
          emissive="#315e00"
          emissiveIntensity={0.65}
          roughness={0.3}
          metalness={0.8}
          wireframe
        />
      </mesh>

      <mesh rotation={[1.2, 0.3, 0.4]}>
        <torusGeometry args={[1.8, 0.012, 16, 160]} />
        <meshBasicMaterial color="#a3ff12" />
      </mesh>

      <mesh rotation={[0.5, 1.1, 0.2]}>
        <torusGeometry args={[2.05, 0.008, 16, 160]} />
        <meshBasicMaterial color="#56a900" />
      </mesh>
    </group>
  );
}