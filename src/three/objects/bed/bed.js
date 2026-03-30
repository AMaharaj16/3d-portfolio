import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function Bed() {
  const { scene } = useGLTF('/models/bed.glb'); // relative to public/
  return <primitive object={scene} position={[-12, 0.2, 3]} scale={5} rotation={[0, -Math.PI / 2, 0]}/>;
}
