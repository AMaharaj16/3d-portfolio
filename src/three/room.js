import React from 'react';
import Bed from './objects/bed/bed';
import Desk from './objects/desk/desk';
import GameConsole from './objects/gameconsole/gameconsole';
import Bedroom from './objects/bedroom';
import Tars from './objects/tars/tars';
import Door from './objects/door/door';
import Poster from './poster';

export default function Room() {
  return (
    <>
      {/* Roof - moody navy that still reads as a real surface
          (was previously near-black which made the room visually disappear) */}
      <mesh position={[1, 11, 3]} receiveShadow castShadow>
        <boxGeometry args={[38, 0.5, 24]} />
        <meshStandardMaterial
          color="#1c2545"
          roughness={0.85}
          metalness={0.05}
          emissive="#1a2240"
          emissiveIntensity={0.04}
        />
      </mesh>

      {/* Objects inside the room (positions unchanged) */}
      <Bedroom />
      <Desk />
      <GameConsole />
      <Bed />
      <Tars intensity={10} emissive={0xffffff} />
      <Door />

      <Poster
        imagePath="/models/sailbot.jpg"
        position={[5, 7, -7.5]}
        rotation={[0, 0, 0]}
        width={2.2}
        height={3}
        route="/sailbot"
        accentColor="#7bd0ff"
      />
      <Poster
        imagePath="/models/safesoftware.jpg"
        position={[2, 7, -7.5]}
        rotation={[0, 0, 0]}
        width={3}
        height={2}
        route="/safesoftware"
        accentColor="#a586ff"
      />
    </>
  );
}
