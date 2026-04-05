import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SafeSoftwarePage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: '100vw',
        minHeight: '100vh',
        background: 'radial-gradient(circle at top, #111827, #020617)',
        color: '#fff',
        fontFamily: 'Inter, sans-serif',
        paddingBottom: '4rem',
      }}
    >
      {/* Hero */}
      <div
        style={{
          width: '100%',
          height: '30vh',
          backgroundImage: 'url(/models/safesoftware.jpg)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9,
        }}
      />

      {/* Card */}
      <div
        style={{
          maxWidth: 750,
          margin: '1rem auto 0 auto',
          padding: '2.5rem',
          borderRadius: '20px',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
        }}
      >
        <h1
          style={{
            fontSize: '2.7rem',
            marginBottom: '0.5rem',
            fontWeight: '600',
            letterSpacing: '-0.5px',
          }}
        >
          Software Developer Intern
        </h1>

        <p style={{ color: '#9ca3af', marginBottom: '0.2rem' }}>
          Safe Software — Product Security
        </p>

        <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '1.8rem' }}>
          Jan 2026 – Apr 2026 · Surrey, BC
        </p>

        <p
          style={{
            color: '#d1d5db',
            lineHeight: 1.8,
            fontSize: '0.95rem',
            marginBottom: '1.5rem',
          }}
        >
          Built internal Python automation tools for vulnerability detection across production systems.
          Worked with Snyk and Black Duck to analyze open-source risks, prioritize CVEs, and support
          remediation across engineering teams. Gained hands-on experience with software supply chain
          security in large-scale systems.
        </p>

        {/* Skills */}
        <div style={{ marginBottom: '2rem' }}>
          <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>
            Skills & Technologies
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {[
              'Python',
              'Snyk',
              'Black Duck',
              'GitHub',
              'Jira',
              'CVE Analysis',
              'Automation',
            ].map((skill) => (
              <span
                key={skill}
                style={{
                  padding: '0.4rem 0.8rem',
                  borderRadius: '999px',
                  background: 'rgba(255,255,255,0.08)',
                  fontSize: '0.8rem',
                  color: '#e5e7eb',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            onClick={() => navigate('/')}
            style={{
              padding: '0.75rem 1.6rem',
              borderRadius: '8px',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#9ca3af',
              cursor: 'pointer',
              fontSize: '0.9rem',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.border = '1px solid #fff';
              e.target.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.target.style.border = '1px solid rgba(255,255,255,0.2)';
              e.target.style.color = '#9ca3af';
            }}
          >
            ← Back
          </button>


          <a
            href="https://www.safe.com"
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
        </div>
      </div>
    </div>
  );
}