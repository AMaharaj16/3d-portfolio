import { useState } from 'react';
import { useSpring, animated } from '@react-spring/three';
import { useTexture } from '@react-three/drei';

export default function Poster({ imagePath, position, rotation, width = 1.2, height = 1.6 }) {
  const texture = useTexture(imagePath);
  const [hovered, setHovered] = useState(false);

  const { intensity, emissiveIntensity } = useSpring({
    intensity: hovered ? 4 : 0,
    emissiveIntensity: hovered ? 1.5 : 0,
    config: { tension: 180, friction: 14 },
  });

  return (
    <group
      position={position}
      rotation={rotation}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
    >
      <animated.pointLight
        position={[0, 0, 1]}
        color="#ffcc88"
        intensity={intensity}
        distance={6}
      />

      <mesh position={[0, 0, -0.06]}>
        <boxGeometry args={[width + 0.06, height + 0.06, 0.1]} />
        <animated.meshStandardMaterial
          color="#1a1a1a"
          emissive="#ffcc88"
          emissiveIntensity={emissiveIntensity}
        />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  );
}