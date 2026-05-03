import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import '../styles/pages.css';

/**
 * Shared layout for every detail page.
 * - Sticky top nav with back button + wordmark
 * - 3D hero scene (cheap: no shadows, no env, capped DPR, slow autorotate)
 * - Body content with consistent typography
 *
 * Pass `accent` as a hex color to color the page's accents.
 * `hero` is the JSX rendered inside the hero canvas.
 */
export default function PageLayout({
  accent = '#ffb964',
  eyebrow = 'Section',
  title,
  lead,
  hero,
  children,
}) {
  const navigate = useNavigate();

  return (
    <div className="page" style={{ '--accent': accent }}>
      <nav className="page-nav">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back to room
        </button>
        <div className="brand-mark">
          Aayush <b>· Portfolio</b>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-eyebrow">
          <span className="dot" />
          <span>{eyebrow}</span>
        </div>
        <Canvas
          camera={{ position: [0, 4, 12], fov: 45 }}
          dpr={[1, 1.4]}
          gl={{ antialias: true, powerPreference: 'high-performance' }}
          style={{ width: '100%', height: '100%' }}
        >
          <ambientLight intensity={1.1} color="#a9b8e0" />
          <hemisphereLight args={['#ffe2b5', '#1a2240', 0.9]} />
          <directionalLight position={[6, 10, 6]} intensity={2.0} color="#ffd2a0" />
          <pointLight position={[-4, 3, 4]} intensity={5} distance={10} color={accent} />
          <pointLight position={[4, 2, -4]} intensity={3} distance={8} color="#7aa6ff" />
          <Suspense fallback={null}>{hero}</Suspense>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.6}
            target={[0, 1, 0]}
          />
        </Canvas>
        <div className="hero-overlay" />
      </div>

      <div className="page-body">
        <h1 className="page-title">{title}</h1>
        {lead && <p className="page-lead">{lead}</p>}
        {children}
      </div>
    </div>
  );
}
