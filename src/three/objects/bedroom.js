import React, { useLayoutEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Bedroom() {
  const { scene } = useGLTF('/models/empty_room.glb');
  const ref = useRef();

  // useLayoutEffect runs synchronously after render but before paint, so
  // shadow flags are guaranteed to be set on the very first rendered frame.
  useLayoutEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <primitive
      ref={ref}
      object={scene}
      position={[1, 0.24, 3]}
      scale={1.8}
    />
  );
}
