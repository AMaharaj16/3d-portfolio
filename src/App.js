import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerformanceMonitor } from '@react-three/drei';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as THREE from 'three';

import Room from './three/room';
import SailbotPage from './three/objects/posters/sailbotpage';
import SafeSoftwarePage from './three/objects/posters/safesoftwarepage';
import UpgradedPage from './three/objects/posters/upgradedpage';
import DeskPage from './three/objects/desk/deskpage';
import GameConsolePage from './three/objects/gameconsole/gameconsolepage';
import TarsPage from './three/objects/tars/tarspage';
import BedPage from './three/objects/bed/bedpage';
import DoorPage from './three/objects/door/doorpage';

import Effects from './three/effects';
import Atmosphere from './three/atmosphere';
import CameraRig from './three/cameraRig';
import Loader from './components/Loader';
import HUD from './components/HUD';

function MainScene() {
  const [introDone, setIntroDone] = useState(false);
  const [dpr, setDpr] = useState(1.25);

  return (
    <>
      <HUD />
      <Loader />
      <Canvas
        shadows
        dpr={dpr}
        gl={{
          antialias: false,
          powerPreference: 'high-performance',
          stencil: false,
          alpha: false,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        // Camera intro now starts INSIDE the room, so we never look through
        // back-face-culled walls during the swoop.
        camera={{ position: [13, 8, -7], fov: 55, near: 0.1, far: 200 }}
        style={{ width: '100vw', height: '100vh', display: 'block' }}
        onCreated={({ gl, scene }) => {
          gl.toneMappingExposure = 1.0;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
          scene.background = new THREE.Color('#0a0e1c');
          scene.fog = new THREE.FogExp2('#1a2238', 0.0035);
        }}
      >
        {/* Auto-tune resolution to keep things smooth on weaker GPUs */}
        <PerformanceMonitor
          onIncline={() => setDpr(1.5)}
          onDecline={() => setDpr(1)}
        />

        {/* === Lighting rig (no HDR Environment - keeps shaders simple
            and removes the async load that was causing materials to
            render black on first load) === */}

        <ambientLight intensity={0.95} color="#a9b8e0" />
        <hemisphereLight args={['#ffe2b5', '#1a2240', 0.85]} />

        {/* Key light - the only shadow caster, modest 1024 map */}
        <directionalLight
          position={[14, 18, -6]}
          intensity={3.0}
          color="#ffd2a0"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={0.5}
          shadow-camera-far={50}
          shadow-camera-left={-22}
          shadow-camera-right={22}
          shadow-camera-top={22}
          shadow-camera-bottom={-22}
          shadow-bias={-0.0005}
          shadow-normalBias={0.02}
        />

        {/* Cool fill from opposite side */}
        <directionalLight
          position={[-18, 12, 12]}
          intensity={0.6}
          color="#7aa6ff"
        />

        {/* Subtle back rim for silhouette separation */}
        <directionalLight
          position={[0, 6, 18]}
          intensity={0.3}
          color="#c8d4ff"
        />

        {/* Mood accent zones */}
        <pointLight
          position={[-14, 4, 11]}
          intensity={4}
          distance={11}
          decay={2}
          color="#7be0ff"
        />
        <pointLight
          position={[8, 2.2, -7]}
          intensity={3.5}
          distance={9}
          decay={2}
          color="#a586ff"
        />
        <pointLight
          position={[15, 4, 0]}
          intensity={5}
          distance={11}
          decay={2}
          color="#ffb964"
        />
        <Suspense fallback={null}>
          <Room />
          <Atmosphere />
        </Suspense>

        <CameraRig
          startPosition={[13, 8, -7]}
          endPosition={[10, 2, -4]}
          lookAt={[0, 1, 0]}
          duration={3.0}
          onIntroEnd={() => setIntroDone(true)}
        />

        {introDone && (
          <OrbitControls
            target={[0, 1, 0]}
            minDistance={10}
            maxDistance={40}
            enableDamping
            dampingFactor={0.08}
            rotateSpeed={0.6}
            zoomSpeed={0.7}
          />
        )}

        <Effects />
      </Canvas>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScene />} />
        <Route path="/sailbot" element={<SailbotPage />} />
        <Route path="/safesoftware" element={<SafeSoftwarePage />} />
        <Route path="/upgraded" element={<UpgradedPage />} />
        <Route path="/desk" element={<DeskPage />} />
        <Route path="/gameconsole" element={<GameConsolePage />} />
        <Route path="/tars" element={<TarsPage />} />
        <Route path="/bed" element={<BedPage />} />
        <Route path="/door" element={<DoorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
