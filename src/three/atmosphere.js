import React from 'react';
import { Sparkles } from '@react-three/drei';

/**
 * Lean atmospheric particles. Total ~70 sparkles vs. earlier ~140 — easier
 * on the GPU, and slow drift speeds keep them from "teleporting" at bounds.
 */
export default function Atmosphere() {
  return (
    <>
      {/* Big slow-drifting room-wide dust */}
      <Sparkles
        count={32}
        scale={[34, 9, 22]}
        position={[1, 5.5, 3]}
        size={2.2}
        speed={0.04}
        opacity={0.32}
        color="#ffd9a0"
        noise={0.5}
      />

      {/* Cyan halo near TARS */}
      <Sparkles
        count={14}
        scale={[5, 5, 5]}
        position={[-15, 4, 11]}
        size={1.5}
        speed={0.07}
        opacity={0.55}
        color="#7be0ff"
        noise={0.4}
      />

      {/* Warm halo near desk lamp */}
      <Sparkles
        count={12}
        scale={[6, 4, 5]}
        position={[15, 4, 0]}
        size={1.5}
        speed={0.06}
        opacity={0.45}
        color="#ffb964"
        noise={0.4}
      />

      {/* Violet halo near PS5 */}
      <Sparkles
        count={12}
        scale={[5, 3, 4]}
        position={[8, 2.6, -7]}
        size={1.4}
        speed={0.06}
        opacity={0.4}
        color="#a586ff"
        noise={0.4}
      />
    </>
  );
}
