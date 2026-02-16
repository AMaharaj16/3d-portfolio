import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Room from './three/room';

function App() {
  return (
    <Canvas
        shadows
        camera={{ position: [0, 2, 8], fov: 60 }}
        style={{ width: '100vw', height: '100vh', display: 'block' }}
        >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 10, 5]} intensity={1} />
        <Room />
        <OrbitControls target={[0, 1, 0]} minDistance={2} maxDistance={12}/>
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
