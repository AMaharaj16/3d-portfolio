import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SailbotPage() {
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

      {/* Hero image */}
      <div style={{
        width: '100%',
        height: '25vh',
        backgroundImage: 'url(/models/sailbot.jpg)',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0a0f1e',
      }} />

      {/* Content */}
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          UBC Sailbot
        </h1>

        <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '2rem' }}>
          Software Team — Autonomous Navigation
        </p>

        {/* Card 1 - Lead */}
        <div style={cardStyle}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>
            Pathfinding Lead
          </h2>
          <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: '1rem' }}>
            Feb 2026 – Present · Vancouver, BC
          </p>

          <ul style={{ color: '#ccc', lineHeight: 1.8, paddingLeft: '1.25rem' }}>
            <li>
              Promoted to Pathfinding Lead, guiding algorithm development and coordinating a six-member
              navigation team within an 80-person multidisciplinary design team.
            </li>
            <li>
              Review pull requests and maintain code quality across the pathfinding module.
            </li>
            <li>
              Identify and scope tasks to improve performance, robustness, and handling of dynamic scenarios.
            </li>
          </ul>
        </div>

        {/* Card 2 - Developer */}
        <div style={cardStyle}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>
            Pathfinding Software Developer
          </h2>
          <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: '1rem' }}>
            Sep 2025 – Feb 2026 · Vancouver, BC
          </p>

          <ul style={{ color: '#ccc', lineHeight: 1.8, paddingLeft: '1.25rem' }}>
            <li>
              Developed local pathfinding algorithms within a ROS-based autonomous navigation system.
            </li>
            <li>
              Designed navigation logic using AIS and sensor data to account for dynamic obstacles.
            </li>
            <li>
              Participated in simulation and on-water testing to validate system performance.
            </li>
          </ul>
        </div>

        {/* Skills */}
        <p style={{ color: '#ccc', marginBottom: '0.5rem' }}>
          <strong>Skills & Technologies:</strong>
        </p>

        <ul style={{ color: '#ccc', lineHeight: 2, paddingLeft: '1.25rem' }}>
          <li>Python</li>
          <li>ROS</li>
          <li>Docker</li>
          <li>GitHub</li>
          <li>Ubuntu</li>
          <li>Pathfinding Algorithms</li>
          <li>Simulation Testing</li>
        </ul>

        {/* Buttons */}
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
          <button
            onClick={() => navigate('/')}
            style={{
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

          <a
            href="https://www.ubcsailbot.org"
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
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 10px 25px rgba(99,102,241,0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Visit Website →
          </a>

          <a
            href="https://github.com/UBCSailbot/sailbot_workspace"
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
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 10px 25px rgba(99,102,241,0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Visit GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}