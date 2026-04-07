import React, { useState, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import { useFrame } from '@react-three/fiber';

export default function GameConsole() {
  const { scene } = useGLTF('/models/ps5.glb');
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const primitiveRef = useRef();
  const lightRef = useRef();

  useFrame(() => {
    if (primitiveRef.current) {
      const target = hovered ? 0.42 : 0.4;
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
        position={[17, 0.45, 8]}
        color="#ffccaa"
        intensity={0}
        distance={20}
      />
      <primitive
        ref={primitiveRef}
        object={scene}
        position={[17, 0.45, 8]}
        scale={0.4}
        onClick={() => navigate('/gameconsole')}
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