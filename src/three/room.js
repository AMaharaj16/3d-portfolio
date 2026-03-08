import React from 'react';
import Bed from './objects/bed';
import Desk from './objects/desk';
import GameConsole from './objects/gameconsole';
import Bedroom from './objects/bedroom'

export default function Room() {
  return (
    <>
      {/* Roof */}
      <mesh position={[1, 11, 3]} receiveShadow>
        <boxGeometry args={[38, 0.5, 24]} />
        <meshStandardMaterial color="#444" />
      </mesh>

      {/* Objects inside the room */}
      <Bedroom />
      <Desk />
      <GameConsole />
      <Bed />
    </>
  );
}
