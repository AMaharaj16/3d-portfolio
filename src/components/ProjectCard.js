import React from 'react';

/**
 * Reusable card for projects, jobs, etc.
 *
 * Props:
 *   - title (required)
 *   - date (string)
 *   - tagline (one-line description)
 *   - bullets (array of strings)
 *   - chips (array of strings - tech tags)
 *   - link (object: { label, href })
 */
export default function ProjectCard({
  title,
  date,
  tagline,
  bullets = [],
  chips = [],
  link,
}) {
  return (
    <article className="card">
      <header className="card-header">
        <h3 className="card-title">{title}</h3>
        {date && <span className="card-date">{date}</span>}
      </header>
      {tagline && <p className="card-tagline">{tagline}</p>}
      {bullets.length > 0 && (
        <ul>
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
      {chips.length > 0 && (
        <div className="chips">
          {chips.map((c, i) => (
            <span className="chip" key={i}>
              {c}
            </span>
          ))}
        </div>
      )}
      {link && (
        <a className="card-link" href={link.href} target="_blank" rel="noopener noreferrer">
          {link.label || 'View on GitHub →'}
        </a>
      )}
    </article>
  );
}
