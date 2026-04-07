import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';

function PS5Model() {
  const { scene } = useGLTF('/models/ps5.glb');
  return <primitive object={scene} scale={0.4} />;
}

const projects = [
  {
    title: 'Pac-Man Game',
    date: 'Jun 2025 – Sep 2025',
    description: 'Object-oriented Python recreation of the classic arcade game.',
    bullets: [
      'Implemented grid-based movement and custom collision detection engine.',
      'Built enemy AI using BFS graph traversal for pathfinding.',
      'Structured game entities using encapsulated OOP design principles.',
      'Designed modular game loop with state management.',
    ],
    github: 'https://github.com/AMaharaj16/Pac-Man-Game-Project',
  },
  {
    title: '2048 Game',
    date: 'May 2025',
    description: 'Matrix-driven 2048 clone exploring algorithmic game logic design.',
    bullets: [
      'Implemented tile merging and shifting logic using 2D array transformations.',
      'Separated core game logic from Pygame animation layer.',
      'Built clean, modular object-oriented architecture.',
      'Focused on deterministic state transitions and testing edge cases.',
    ],
    github: 'https://github.com/AMaharaj16/2048-Game-Project',
  },
];

export default function GameConsolePage() {
  const navigate = useNavigate();

  const cardStyle = {
    marginBottom: '2rem',
    padding: '1.5rem',
    border: '1px solid #222',
    borderRadius: '8px',
    background: '#0d1324',
  };

  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      background: '#0a0f1e',
      color: '#fff',
      fontFamily: 'sans-serif',
    }}>

      {/* 3D canvas */}
      <div style={{ width: '100%', height: '50vh' }}>
        <Canvas camera={{ position: [0, 2, 4], fov: 50 }} shadows>
          <ambientLight intensity={2} />
          <directionalLight position={[5, 10, 5]} intensity={4} />
          <PS5Model />
          <OrbitControls autoRotate autoRotateSpeed={1.5} target={[8, 2, -7]}/>
        </Canvas>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Game Development</h1>
        <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '2rem' }}>
          Python Games — 2025
        </p>

        {projects.map((p, i) => (
          <div key={i} style={cardStyle}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>{p.title}</h2>
            <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: '1rem' }}>{p.date}</p>
            <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '1rem' }}>{p.description}</p>
            <ul style={{ color: '#ccc', lineHeight: 1.8, paddingLeft: '1.25rem' }}>
              {p.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
            <div style={{ marginTop: '1.25rem' }}>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: '0.75rem 1.6rem',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  display: 'inline-block',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(99,102,241,0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                View on GitHub →
              </a>
            </div>
          </div>
        ))}

        <button
          onClick={() => navigate('/')}
          style={{
            marginTop: '1rem',
            padding: '0.6rem 1.4rem',
            background: 'transparent',
            border: '1px solid #555',
            color: '#aaa',
            cursor: 'pointer',
            fontSize: '0.9rem',
            borderRadius: '4px',
            display: 'block',
          }}
        >
          ← Back to room
        </button>

        <div style={{ height: '3rem' }} />
      </div>
    </div>
  );
}