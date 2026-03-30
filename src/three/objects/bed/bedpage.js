import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';

function BedModel() {
  const { scene } = useGLTF('/models/bed.glb');
  return <primitive object={scene} scale={5} rotation={[0, -Math.PI / 2, 0]} />;
}

export default function BedPage() {
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
          <directionalLight position={[5, 10, 5]} intensity={4} />
          <BedModel />
          <OrbitControls autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Bed</h1>
        <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          My Room
        </p>
        <p style={{ color: '#ccc', lineHeight: 1.8 }}>
          Write about whatever you want to associate with the bed here.
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