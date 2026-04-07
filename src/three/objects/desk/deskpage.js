import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';

function DeskModel() {
  const { scene } = useGLTF('/models/desk_set.glb');
  return <primitive object={scene} scale={0.018} rotation={[0, Math.PI, 0]} />;
}

const projects = [
  {
    title: 'CodeBuddy',
    date: 'Oct 2025 – Jan 2026',
    description: 'Full-stack empirical performance analysis platform for JavaScript programs.',
    bullets: [
      'Architected a React + Vite frontend with Node.js/Express backend to safely execute and profile user-submitted JavaScript.',
      'Implemented runtime measurement using high-resolution timers and memory profiling across dynamically scaled input sizes.',
      'Applied least-squares regression to fit empirical data to asymptotic complexity classes (O(n), O(n²), O(log n), etc.)',
      'Designed dynamic data visualizations to illustrate time and space growth trends.',
      'Focused on secure execution boundaries and performance isolation.',
    ],
    github: 'https://github.com/AMaharaj16/CodeBuddy',
  },
  {
    title: 'Must Dance',
    date: 'Nov 2025',
    tag: 'HackCamp 2025',
    description: 'Machine learning–powered dance scoring web app built in a 24-hour hackathon.',
    bullets: [
      'Co-developed React frontend and Flask backend to process user-recorded dance videos.',
      'Integrated FFmpeg and OpenCV for robust frame extraction and preprocessing.',
      'Built ML-based pose estimation pipeline using Mediapipe to compare user movement against reference choreography.',
      'Designed scoring logic to evaluate positional accuracy across key body landmarks.',
      'Shipped a working MVP within 24 hours in a 3-person team.',
    ],
    github: 'https://github.com/boydhamilton/mustdance',
  },
  {
    title: 'Huddle',
    date: 'Jan 2026',
    tag: 'nwHacks 2026',
    description: 'Private family-oriented social platform with real-time interactivity.',
    bullets: [
      'Built full-stack application using Next.js (TypeScript) and Supabase with PostgreSQL.',
      'Implemented authentication, media posting, and real-time presence tracking.',
      'Developed a daily memory game with persistent leaderboard functionality.',
      'Designed an accessible, mobile-friendly UI to promote engagement.',
    ],
    github: 'https://github.com/jeffh11/NwHacks',
  },
  {
    title: '3D Developer Portfolio',
    date: 'Feb 2026 – Present',
    description: 'Interactive 3D portfolio built with immersive scene rendering.',
    bullets: [
      'Built with React and Three.js for real-time 3D rendering.',
      'Implemented custom camera controls and scene transitions.',
      'Optimized rendering performance and asset loading.',
      'Designed interactive 3D experience while maintaining responsiveness.',
    ],
    github: 'https://github.com/AMaharaj16/3d-portfolio',
  },
  {
    title: '2D Developer Portfolio',
    date: 'Feb 2026',
    description: 'Responsive personal portfolio website showcasing projects and experience.',
    bullets: [
      'Built with Next.js and TypeScript.',
      'Implemented dynamic routing and reusable component architecture.',
      'Designed responsive layouts for desktop and mobile.',
      'Focused on clean typography and minimal UI.',
    ],
    github: 'https://github.com/AMaharaj16/2d-portfolio',
  },
];

export default function DeskPage() {
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

      {/* 3D Canvas */}
      <div style={{ width: '100%', height: '40vh' }}>
        <Canvas camera={{ position: [0, 5, 10], fov: 50 }} shadows>
          <ambientLight intensity={2} />
          <directionalLight position={[5, 10, 5]} intensity={4} />
          <DeskModel />
          <OrbitControls autoRotate autoRotateSpeed={1.5} target={[15, 3, 0]} />
        </Canvas>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Full Stack Projects</h1>
        <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '2rem' }}>
          Aayush Maharaj
        </p>

        {projects.map((p, i) => (
          <div key={i} style={cardStyle}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>
              {p.title}
              {p.tag && (
                <span style={{
                  marginLeft: '0.75rem',
                  fontSize: '0.7rem',
                  color: '#666',
                  border: '1px solid #333',
                  borderRadius: '4px',
                  padding: '2px 8px',
                  verticalAlign: 'middle',
                  fontWeight: 400,
                }}>
                  {p.tag}
                </span>
              )}
            </h2>
            <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: '1rem' }}>
              {p.date}
            </p>
            <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '1rem' }}>
              {p.description}
            </p>
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
          }}
        >
          ← Back to room
        </button>

        <div style={{ height: '3rem' }} />
      </div>
    </div>
  );
}