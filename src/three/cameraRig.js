import { useEffect, useRef, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Cinematic camera intro:
 * Starts pulled back high and orbits down into the resting camera position.
 * Once finished, calls onIntroEnd so OrbitControls can take over.
 */
export default function CameraRig({
  startPosition = [26, 14, -16],
  endPosition = [10, 2, -4],
  lookAt = [0, 1, 0],
  duration = 3.2,
  onIntroEnd,
}) {
  const { camera } = useThree();
  const startTime = useRef(null);
  const [done, setDone] = useState(false);
  const startVec = useRef(new THREE.Vector3(...startPosition));
  const endVec = useRef(new THREE.Vector3(...endPosition));
  const lookAtVec = useRef(new THREE.Vector3(...lookAt));

  useEffect(() => {
    camera.position.copy(startVec.current);
    camera.lookAt(lookAtVec.current);
  }, [camera]);

  useFrame((state) => {
    if (done) return;
    if (startTime.current === null) {
      startTime.current = state.clock.elapsedTime;
    }
    const t = (state.clock.elapsedTime - startTime.current) / duration;
    if (t >= 1) {
      camera.position.copy(endVec.current);
      camera.lookAt(lookAtVec.current);
      setDone(true);
      if (onIntroEnd) onIntroEnd();
      return;
    }
    // Ease out cubic for cinematic deceleration
    const ease = 1 - Math.pow(1 - t, 3);
    camera.position.lerpVectors(startVec.current, endVec.current, ease);
    camera.lookAt(lookAtVec.current);
  });

  return null;
}
