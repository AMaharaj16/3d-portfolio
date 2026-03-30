import React, { useState, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import { useFrame } from '@react-three/fiber';

export default function Desk() {
  const { scene } = useGLTF('/models/desk_set.glb');
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const primitiveRef = useRef();
  const lightRef = useRef();

  useFrame(() => {
    if (primitiveRef.current) {
      const target = hovered ? 0.0185 : 0.018;
      const current = primitiveRef.current.scale.x;
      const next = current + (target - current) * 0.1;
      primitiveRef.current.scale.set(next, next, next);
    }
    if (lightRef.current) {
      const target = hovered ? 20 : 0;
      lightRef.current.intensity += (target - lightRef.current.intensity) * 0.1;
    }
  });

  return (
    <>
      <pointLight
        ref={lightRef}
        position={[16, 6, 0]}
        color="#ffccaa"
        intensity={0}
        distance={20}
      />
      <primitive
        ref={primitiveRef}
        object={scene}
        position={[16, 0.15, 0]}
        scale={0.018}
        rotation={[0, Math.PI, 0]}
        onClick={() => navigate('/desk')}
        onPointerOver={() => {
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = 'auto';
        }}
      />
    </>
  );
}