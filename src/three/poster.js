import { useState } from 'react';
import { useSpring, animated } from '@react-spring/three';
import { useTexture } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';

export default function Poster({
  imagePath,
  position,
  rotation,
  width,
  height,
  route,
  accentColor = '#ffcc88',
}) {
  const texture = useTexture(imagePath);
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const { lightI, frameEm, glowOpacity, posterEm, scale } = useSpring({
    lightI: hovered ? 10 : 0,
    frameEm: hovered ? 0.5 : 0,
    glowOpacity: hovered ? 0.28 : 0,
    posterEm: hovered ? 0.12 : 0,
    scale: hovered ? 1.04 : 1,
    config: { tension: 220, friction: 18 },
  });

  return (
    <animated.group
      position={position}
      rotation={rotation}
      scale={scale}
      onClick={() => route && navigate(route)}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
    >
      {/* Hover accent light */}
      <animated.pointLight
        position={[0, 0, 1.5]}
        color={accentColor}
        intensity={lightI}
        distance={8}
      />

      {/* Soft outer glow plane behind the frame (always on, brighter on hover) */}
      <animated.mesh position={[0, 0, -0.12]}>
        <planeGeometry args={[width + 0.9, height + 0.9]} />
        <animated.meshBasicMaterial
          color={accentColor}
          transparent
          opacity={glowOpacity}
          depthWrite={false}
        />
      </animated.mesh>

      {/* Frame */}
      <mesh position={[0, 0, -0.06]} castShadow>
        <boxGeometry args={[width + 0.18, height + 0.18, 0.1]} />
        <animated.meshStandardMaterial
          color="#0a0a0a"
          metalness={0.6}
          roughness={0.35}
          emissive={accentColor}
          emissiveIntensity={frameEm}
        />
      </mesh>

      {/* Inner matte border */}
      <mesh position={[0, 0, -0.02]}>
        <planeGeometry args={[width + 0.06, height + 0.06]} />
        <meshStandardMaterial color="#161618" roughness={0.9} />
      </mesh>

      {/* Image */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[width, height]} />
        <animated.meshStandardMaterial
          map={texture}
          emissiveMap={texture}
          emissive="#ffffff"
          emissiveIntensity={posterEm}
          toneMapped
        />
      </mesh>
    </animated.group>
  );
}
