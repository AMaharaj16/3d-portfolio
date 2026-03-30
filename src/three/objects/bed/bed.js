import React, { useState, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import { useFrame } from '@react-three/fiber';

export default function Bed() {
  const { scene } = useGLTF('/models/bed.glb');
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef();
  const lightRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      const target = hovered ? 1.05 : 1;
      const current = groupRef.current.scale.x;
      const next = current + (target - current) * 0.08;
      groupRef.current.scale.set(next, next, next);
    }
    if (lightRef.current) {
      const target = hovered ? 20 : 0;
      lightRef.current.intensity += (target - lightRef.current.intensity) * 0.08;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[-11, 0.2, 3]}
      scale={1}
      onClick={() => navigate('/bed')}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
    >
      <pointLight ref={lightRef} intensity={0} distance={15} color="#ffccaa" />
      <primitive object={scene} scale={5} rotation={[0, -Math.PI / 2, 0]} />
    </group>
  );
}