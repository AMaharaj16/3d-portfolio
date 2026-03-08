import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function Bedroom() {
  const { scene } = useGLTF('/models/empty_room.glb'); // relative to public/
  return <primitive object={scene} position={[1, 0.24, 3]} scale={1.8} />;
}
