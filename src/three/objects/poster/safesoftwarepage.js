import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SafeSoftwarePage() {
  const navigate = useNavigate();

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
        backgroundImage: 'url(/models/safesoftware.jpg)',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0a0f1e',
      }} />

      {/* Content */}
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Safe Software</h1>
        <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          Internship — 2024
        </p>
        <p style={{ color: '#ccc', lineHeight: 1.8 }}>
          Write about your Safe Software experience here.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
          <a
            href="https://www.safe.com"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: '0.6rem 1.4rem',
              background: '#fff',
              color: '#000',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '0.9rem',
            }}
          >
            Safe Software →
          </a>
        </div>

        <button
          onClick={() => navigate('/')}
          style={{
            marginTop: '2rem',
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
      </div>
    </div>
  );
}