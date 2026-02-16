import React from 'react';
import ArmorSuit from './objects/armorsuit';
import Bed from './objects/bed';
import Claw from './objects/claw';
import Desk from './objects/desk';
import GameConsole from './objects/gameconsole';

export default function Room() {
  return (
    <>
      {/* Floor */}
      <mesh position={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[10, 0.5, 10]} />
        <meshStandardMaterial color="#444" />
      </mesh>

      {/* Back Wall */}
      <mesh visible={false} position={[0, 2.5, -5]} receiveShadow>
        <boxGeometry args={[10, 5, 0.5]} />
        <meshStandardMaterial color="#888" />
      </mesh>

      {/* Front Wall */}
      <mesh position={[0, 2.5, 5]} receiveShadow>
        <boxGeometry args={[10, 5, 0.5]} />
        <meshStandardMaterial color="#888" />
      </mesh>

      {/* Left Wall */}
      <mesh visible={false} position={[-5, 2.5, 0]} receiveShadow>
        <boxGeometry args={[0.5, 5, 10]} />
        <meshStandardMaterial color="#888" />
      </mesh>

      {/* Right Wall */}
      <mesh position={[5, 2.5, 0]} receiveShadow>
        <boxGeometry args={[0.5, 5, 10]} />
        <meshStandardMaterial color="#888" />
      </mesh>

      {/* Objects inside the room */}
      <Desk />
      <GameConsole />
      <ArmorSuit />
      <Claw />
      <Bed />
    </>
  );
}
