import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function Bed() {
  const { scene } = useGLTF('/models/bed.glb'); // relative to public/
  return <primitive object={scene} position={[2, 0.24, 3]} scale={1.8} />;
}
