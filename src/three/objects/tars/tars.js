import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { Environment } from '@react-three/drei';

// inside your Canvas/scene:
<Environment preset="studio" />

export default function Tars() {
  const { scene } = useGLTF('/models/tars.glb');

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        const materials = Array.isArray(child.material) ? child.material : [child.material];

        materials.forEach((mat) => {
            const newMat = new THREE.MeshStandardMaterial({
                color: new THREE.Color(0xaaaaaa),
                map: mat.map,
                normalMap: mat.normalMap,
                roughnessMap: mat.roughnessMap,
                metalnessMap: mat.metalnessMap,
                roughness: 0.3,
                metalness: 0.4,              // lower this — high metalness goes dark without env map
                emissive: new THREE.Color(0x444444),  // brighter emissive to compensate
                emissiveIntensity: 0.5,
            });
            child.material = newMat;
        });
      }
    });
  }, [scene]);

  return (
    <group position={[-16, 0.24, 10]}>
      <pointLight intensity={6} distance={10} color={0xffffff} />
      <primitive object={scene} scale={4} rotation={[0, Math.PI/2, 0]} />
    </group>
  );
}