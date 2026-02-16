import React from 'react';

export default function Desk() {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[2, 0.5, 1]} />
      <meshStandardMaterial color="#654321" />
    </mesh>
  );
}
