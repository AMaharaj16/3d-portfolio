import React from 'react';

export default function Section({ label, children }) {
  return (
    <>
      <div className="section-header">
        <h2>{label}</h2>
        <div className="line" />
      </div>
      {children}
    </>
  );
}
