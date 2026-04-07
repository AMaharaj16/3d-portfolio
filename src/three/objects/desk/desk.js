import React, { useState, useRef } from 'react';
import { useGLTF, Html } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import { useFrame } from '@react-three/fiber';

export default function Desk() {
  const { scene } = useGLTF('/models/desk_set.glb');
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const primitiveRef = useRef();
  const lightRef = useRef();

  useFrame(() => {
    if (primitiveRef.current) {
      const target = hovered ? 0.0185 : 0.018;
      const current = primitiveRef.current.scale.x;
      const next = current + (target - current) * 0.1;
      primitiveRef.current.scale.set(next, next, next);
    }
    if (lightRef.current) {
      const target = hovered ? 20 : 0;
      lightRef.current.intensity += (target - lightRef.current.intensity) * 0.1;
    }
  });

  return (
    <>
      <pointLight
        ref={lightRef}
        position={[16, 6, 0]}
        color="#ffccaa"
        intensity={0}
        distance={20}
      />

      <Html
        position={[16, 7, 0]}
        center
        distanceFactor={10}
        style={{ pointerEvents: 'none' }}
      >
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          padding: '9px 16px',
          background: '#111',
          border: '1px solid #333',
          borderRadius: '6px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(4px)',
          transition: 'opacity 0.15s ease-out, transform 0.15s ease-out',
        }}>
          <span style={{
            fontFamily: '"Inter", "Helvetica Neue", sans-serif',
            fontSize: '40px',
            fontWeight: '500',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#fff',
          }}>
            Full Stack
          </span>

          {/* Caret */}
          <div style={{
            position: 'absolute',
            bottom: '-5px',
            left: '50%',
            transform: 'translateX(-50%) rotate(45deg)',
            width: '8px',
            height: '8px',
            background: '#111',
            borderRight: '1px solid #333',
            borderBottom: '1px solid #333',
            pointerEvents: 'none',
          }} />
        </div>
      </Html>

      <primitive
        ref={primitiveRef}
        object={scene}
        position={[16, 0.15, 0]}
        scale={0.018}
        rotation={[0, Math.PI, 0]}
        onClick={() => navigate('/desk')}
        onPointerOver={() => {
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = 'auto';
        }}
      />
    </>
  );
}