import React, { useEffect, useState, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import { useFrame } from '@react-three/fiber';

export default function Tars() {
  const { scene } = useGLTF('/models/tars.glb');
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef();
  const lightRef = useRef();

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
            metalness: 0.4,
            emissive: new THREE.Color(0x444444),
            emissiveIntensity: 0.5,
          });
          child.material = newMat;
        });
      }
    });
  }, [scene]);

  useFrame(() => {
    if (groupRef.current) {
      const target = hovered ? 1.05 : 1;
      const current = groupRef.current.scale.x;
      // clamp to avoid floating point drift
      const next = current + (target - current) * 0.08;
      groupRef.current.scale.set(next, next, next);
    }
    if (lightRef.current) {
      const target = hovered ? 20 : 6;
      lightRef.current.intensity += (target - lightRef.current.intensity) * 0.08;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[-16, 0.24, 10]}
      scale={1}
      onClick={() => navigate('/tars')}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
    >
      <pointLight ref={lightRef} intensity={6} distance={10} color={0xffffff} />
      <primitive object={scene} scale={4} rotation={[0, Math.PI / 2, 0]} />
    </group>
  );
}