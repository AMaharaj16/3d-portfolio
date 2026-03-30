import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Room from './three/room';
import SailbotPage from './three/objects/poster/sailbotpage';
import SafeSoftwarePage from './three/objects/poster/safesoftwarepage';
import DeskPage from './three/objects/desk/deskpage';

function MainScene() {
  return (
    <Canvas
      shadows
      camera={{ position: [10, 2, -4], fov: 60 }}
      style={{ width: '100vw', height: '100vh', display: 'block' }}
    >
      <ambientLight intensity={2.5} />
      <Room />
      <OrbitControls target={[0, 1, 0]} minDistance={10} maxDistance={40} />
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScene />} />
        <Route path="/sailbot" element={<SailbotPage />} />
        <Route path="/safesoftware" element={<SafeSoftwarePage />} />   
        <Route path="/desk" element={<DeskPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;