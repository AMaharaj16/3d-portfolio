import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function Desk() {
  const { scene } = useGLTF('/models/desk_set.glb'); // relative to public
  return <primitive object={scene} position={[0, 3, 0]} scale={10} />;
}
