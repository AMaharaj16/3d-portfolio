import React, { useEffect, useState, useRef } from 'react';
import { useGLTF, Html } from '@react-three/drei';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import { useFrame } from '@react-three/fiber';

const ACCENT = '#7be0ff';

export default function Tars() {
  const { scene } = useGLTF('/models/tars.glb');
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef();
  const lightRef = useRef();
  const rimRef = useRef();
  const idleRef = useRef();

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        materials.forEach((mat) => {
          const newMat = new THREE.MeshStandardMaterial({
            color: new THREE.Color(0xb8bcc4),
            map: mat.map,
            normalMap: mat.normalMap,
            roughnessMap: mat.roughnessMap,
            metalnessMap: mat.metalnessMap,
            roughness: 0.25,
            metalness: 0.85,
            emissive: new THREE.Color(0x0a3340),
            emissiveIntensity: 0.6,
            envMapIntensity: 1.2,
          });
          child.material = newMat;
          child.castShadow = true;
          child.receiveShadow = true;
        });
      }
    });
  }, [scene]);

  useFrame((state) => {
    if (groupRef.current) {
      const target = hovered ? 1.05 : 1;
      const current = groupRef.current.scale.x;
      const next = current + (target - current) * 0.08;
      groupRef.current.scale.set(next, next, next);
    }
    if (lightRef.current) {
      const target = hovered ? 28 : 8;
      lightRef.current.intensity += (target - lightRef.current.intensity) * 0.08;
    }
    if (rimRef.current) {
      const target = hovered ? 16 : 0;
      rimRef.current.intensity += (target - rimRef.current.intensity) * 0.1;
    }
    // Subtle scanning pulse so TARS feels "alive"
    if (idleRef.current) {
      const pulse = 5 + Math.sin(state.clock.elapsedTime * 2.0) * 1.5;
      idleRef.current.intensity = pulse;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[-16, 0.24, 11]}
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
      <pointLight ref={lightRef} intensity={8} distance={14} color={ACCENT} />
      <pointLight
        ref={idleRef}
        position={[0, 6, 0]}
        intensity={5}
        distance={6}
        color={ACCENT}
      />
      <pointLight
        ref={rimRef}
        position={[2, 3, -2]}
        intensity={0}
        distance={10}
        color="#c8efff"
      />
      {/* Explicit position={[0,0,0]} resets the cached scene's position
          in case the TARS detail page mutated it on a prior navigation. */}
      <primitive
        object={scene}
        position={[0, 0, 0]}
        scale={4}
        rotation={[0, Math.PI / 2, 0]}
      />

      <Html
        position={[0, 8.7, 0]}
        center
        distanceFactor={10}
        style={{ pointerEvents: 'none' }}
      >
        <Tooltip label="Machine Learning" accent={ACCENT} visible={hovered} />
      </Html>
    </group>
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
