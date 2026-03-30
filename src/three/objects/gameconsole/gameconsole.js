import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function GameConsole() {
  const { scene } = useGLTF('/models/ps5.glb'); // relative to public/
  return <primitive object={scene} position={[17, 0.45, 8]} scale={0.4}/>;
}
