import React from 'react';
import Bed from './objects/bed';
import Desk from './objects/desk';
import GameConsole from './objects/gameconsole';
import Bedroom from './objects/bedroom';
import Tars from './objects/tars';
import Poster from './objects/poster'

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
      <Tars intensity={10} emissive={0xffffff} />
      <Poster
        imagePath="/models/sailbot.jpg"   // put images in /public/posters/
        position={[5, 7, -7.5]}           // adjust to your wall coords
        rotation={[0, 0, 0]}     // left wall faces right
        width={2.2}
        height={3}
      />
    </>
  );
}
