import React, { useState, useRef } from 'react';
import { useGLTF, Html } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import { useFrame } from '@react-three/fiber';

const ACCENT = '#a586ff';

export default function GameConsole() {
  const { scene } = useGLTF('/models/ps5.glb');
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const primitiveRef = useRef();
  const lightRef = useRef();
  const rimRef = useRef();
  const idleRef = useRef();

  useFrame((state) => {
    if (primitiveRef.current) {
      const target = hovered ? 0.42 : 0.4;
      const current = primitiveRef.current.scale.x;
      const next = current + (target - current) * 0.1;
      primitiveRef.current.scale.set(next, next, next);
    }
    if (lightRef.current) {
      const target = hovered ? 28 : 0;
      lightRef.current.intensity += (target - lightRef.current.intensity) * 0.1;
    }
    if (rimRef.current) {
      const target = hovered ? 14 : 0;
      rimRef.current.intensity += (target - rimRef.current.intensity) * 0.1;
    }
    // Subtle pulsing idle glow so the PS5 always reads as "on"
    if (idleRef.current) {
      const pulse = 4 + Math.sin(state.clock.elapsedTime * 1.5) * 1.2;
      idleRef.current.intensity = pulse;
    }
  });

  return (
    <>
      {/* Always-on subtle PS5 glow */}
      <pointLight
        ref={idleRef}
        position={[8, 1.2, -7]}
        color={ACCENT}
        intensity={3}
        distance={6}
        decay={2}
      />
      <pointLight
        ref={lightRef}
        position={[8, 0.45, -7]}
        color={ACCENT}
        intensity={0}
        distance={20}
      />
      <pointLight
        ref={rimRef}
        position={[8, 4, -5]}
        color="#d8c5ff"
        intensity={0}
        distance={10}
      />

      <Html
        position={[8, 3.7, -7]}
        center
        distanceFactor={10}
        style={{ pointerEvents: 'none' }}
      >
        <Tooltip label="Game Development" accent={ACCENT} visible={hovered} />
      </Html>

      <primitive
        ref={primitiveRef}
        object={scene}
        position={[8, 0.45, -7]}
        scale={0.4}
        onClick={() => navigate('/gameconsole')}
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

function Tooltip({ label, accent, visible }) {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: '10px 18px',
        background: 'linear-gradient(180deg, rgba(20,22,38,0.92) 0%, rgba(8,10,20,0.92) 100%)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        border: `1px solid ${accent}55`,
        borderRadius: 10,
        boxShadow: `0 12px 40px rgba(0,0,0,0.7), 0 0 24px ${accent}44, inset 0 1px 0 rgba(255,255,255,0.08)`,
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(6px) scale(0.97)',
        transition: 'opacity 0.18s ease-out, transform 0.18s ease-out',
      }}
    >
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: accent,
          boxShadow: `0 0 10px ${accent}`,
          marginRight: 12,
        }}
      />
      <span
        style={{
          fontFamily: '"Inter", "Helvetica Neue", sans-serif',
          fontSize: 36,
          fontWeight: 500,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#fff',
          textShadow: `0 0 18px ${accent}66`,
        }}
      >
        {label}
      </span>
      <div
        style={{
          position: 'absolute',
          bottom: -6,
          left: '50%',
          transform: 'translateX(-50%) rotate(45deg)',
          width: 10,
          height: 10,
          background: 'rgba(8,10,20,0.92)',
          borderRight: `1px solid ${accent}55`,
          borderBottom: `1px solid ${accent}55`,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
