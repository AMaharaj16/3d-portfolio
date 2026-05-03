import React, { useEffect, useState } from 'react';

/**
 * Minimal HUD overlay above the canvas.
 * - Top-left brand wordmark
 * - Bottom-center "drag to look around" hint that fades after a few seconds
 */
export default function HUD() {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    // Wait for the camera intro to finish before showing the hint.
    const showT = setTimeout(() => setShowHint(true), 3500);
    const hideT = setTimeout(() => setShowHint(false), 9000);
    return () => {
      clearTimeout(showT);
      clearTimeout(hideT);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10,
        pointerEvents: 'none',
        fontFamily: '"Inter", "Helvetica Neue", sans-serif',
        color: '#e8eaff',
      }}
    >
      {/* Wordmark */}
      <div
        style={{
          position: 'absolute',
          top: 28,
          left: 32,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            color: 'rgba(180,200,255,0.55)',
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 300,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            background:
              'linear-gradient(180deg, #ffffff 0%, #b8c4ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 20px rgba(120,160,255,0.25)',
          }}
        >
          Aayush · Room
        </div>
      </div>

      {/* Top-right cinematic letterboxing edges (faux) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 60,
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 90,
          background:
            'linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 100%)',
        }}
      />

      {/* Hint */}
      <div
        style={{
          position: 'absolute',
          bottom: 38,
          left: '50%',
          transform: `translateX(-50%) translateY(${showHint ? 0 : 10}px)`,
          opacity: showHint ? 1 : 0,
          transition: 'opacity 0.6s ease, transform 0.6s ease',
          padding: '10px 18px',
          background: 'rgba(15,18,30,0.55)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(180,200,255,0.18)',
          borderRadius: 999,
          fontSize: 12,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'rgba(220,230,255,0.85)',
          boxShadow:
            '0 8px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        Drag to look around · scroll to zoom · click an object
      </div>
    </div>
  );
}
