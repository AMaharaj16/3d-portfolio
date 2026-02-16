import React from 'react';

export default function GameConsole() {
  return (
    <mesh position={[1.5, 0.5, 0]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#0f0" />
    </mesh>
  );
}
