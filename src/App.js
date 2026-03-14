import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Room from './three/room';

function App() {
  return (
    <Canvas
        shadows
        camera={{ position: [10, 2, -4], fov: 60 }}
        style={{ width: '100vw', height: '100vh', display: 'block' }}
        >
        <ambientLight intensity={2.5} />
        <Room />
        <OrbitControls target={[0, 1, 0]} minDistance={10} maxDistance={40}/>
        <directionalLight
            position={[0, 10, 0]}
            intensity={8}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
        />
    </Canvas>
  );
}

export default App;
