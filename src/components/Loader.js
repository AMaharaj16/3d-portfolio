import React from 'react';
import { useProgress } from '@react-three/drei';

/**
 * Stylized full-screen loader rendered OUTSIDE the canvas.
 * Listens to drei's loading progress and fades out when assets are ready.
 */
export default function Loader() {
  const { progress, active } = useProgress();
  const pct = Math.min(100, Math.round(progress));

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          'radial-gradient(ellipse at center, #0d1326 0%, #05060d 70%, #000 100%)',
        color: '#e8eaff',
        fontFamily: '"Inter", "Helvetica Neue", sans-serif',
        opacity: active ? 1 : 0,
        pointerEvents: active ? 'auto' : 'none',
        transition: 'opacity 0.8s ease-out',
      }}
    >
      <div
        style={{
          fontSize: 11,
          letterSpacing: '0.6em',
          textTransform: 'uppercase',
          color: '#7c8ab8',
          marginBottom: 18,
        }}
      >
        Booting room
      </div>
      <div
        style={{
          fontSize: 56,
          fontWeight: 200,
          letterSpacing: '0.05em',
          marginBottom: 28,
          background:
            'linear-gradient(180deg, #ffffff 0%, #b8c4ff 60%, #6e7bb8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 40px rgba(120,160,255,0.25)',
        }}
      >
        {pct}%
      </div>
      <div
        style={{
          width: 280,
          height: 2,
          background: 'rgba(255,255,255,0.08)',
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: `${pct}%`,
            height: '100%',
            background:
              'linear-gradient(90deg, #6e8bff 0%, #a5d4ff 50%, #ffd9a0 100%)',
            boxShadow: '0 0 16px rgba(140,180,255,0.7)',
            transition: 'width 0.25s ease-out',
          }}
        />
      </div>
      <div
        style={{
          marginTop: 24,
          fontSize: 10,
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          color: '#4a5683',
        }}
      >
        Aayush · Portfolio · 3D
      </div>
    </div>
  );
}
