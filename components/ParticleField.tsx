"use client";

import { useMemo, useRef } from "react";
import { Points } from "three";
import { useFrame } from "@react-three/fiber";

export default function ParticleField() {
  const pointsRef = useRef<Points>(null);

  const positions = useMemo(() => {
    const count = 900;
    const values = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      values[i * 3] = (Math.random() - 0.5) * 13;
      values[i * 3 + 1] = (Math.random() - 0.5) * 10;
      values[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }

    return values;
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.018;
      pointsRef.current.rotation.x += delta * 0.006;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#a3ff12"
        size={0.025}
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}