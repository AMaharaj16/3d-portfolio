import React from 'react';

export default function Claw() {
  return (
    <mesh position={[2, 1, 1]}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial color="#ff0" />
    </mesh>
  );
}
