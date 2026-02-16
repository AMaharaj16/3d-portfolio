import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function ArmorSuit() {
    const { scene } = useGLTF('/models/armorsuit.glb'); // relative to public/
    return <primitive rotation={[0, - Math.PI / 2, 0]}
    object={scene} position={[4.5, 0.35, -3]} scale={1.6} />;
}
