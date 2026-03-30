import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function Desk() {
  const { scene } = useGLTF('/models/desk_set.glb'); // relative to public
  return <primitive object={scene} position={[16, 0.15, 0]} scale={0.018} rotation={[0, Math.PI, 0]} />;
}
