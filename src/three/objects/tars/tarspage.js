import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';

function TarsModel() {
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
            metalness: 0.4,
            emissive: new THREE.Color(0x444444),
            emissiveIntensity: 0.5,
          });
          child.material = newMat;
        });
      }
    });
  }, [scene]);

  return <primitive object={scene} scale={4} rotation={[0, Math.PI / 2, 0]} />;
}

export default function TarsPage() {
  const navigate = useNavigate();

  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      background: '#0a0f1e',
      color: '#fff',
      fontFamily: 'sans-serif',
    }}>

      {/* 3D canvas */}
      <div style={{ width: '100%', height: '50vh' }}>
        <Canvas camera={{ position: [0, 5, 15], fov: 50 }} shadows>
          <ambientLight intensity={2} />
          <pointLight position={[0, 5, 5]} intensity={6} color={0xffffff} distance={20} />
          <directionalLight position={[5, 10, 5]} intensity={4} />
          <TarsModel />
          <OrbitControls autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>TARS</h1>
        <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          Interstellar — 2014
        </p>
        <p style={{ color: '#ccc', lineHeight: 1.8 }}>
          TARS is a fictional robot from the film Interstellar. Write about why
          you have TARS in your room — maybe a favourite film, an interest in
          space, AI, or just great taste.
        </p>

        <button
          onClick={() => navigate('/')}
          style={{
            marginTop: '2rem',
            padding: '0.6rem 1.4rem',
            background: 'transparent',
            border: '1px solid #555',
            color: '#aaa',
            cursor: 'pointer',
            fontSize: '0.9rem',
            borderRadius: '4px',
            display: 'block',
          }}
        >
          ← Back to room
        </button>
      </div>
    </div>
  );
}