import React, { useMemo, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import emailjs from '@emailjs/browser';
import PageLayout from '../../../components/PageLayout';
import Section from '../../../components/Section';

const ACCENT = '#7ce0a5';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

function DoorModel() {
  const { scene } = useGLTF('/models/door_with_frame.glb');
  const cloned = useMemo(() => scene.clone(true), [scene]);
  return (
    <primitive
      object={cloned}
      scale={0.027}
      position={[0, -3.2, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

const socials = [
  { label: 'GitHub', handle: 'AMaharaj16', href: 'https://github.com/AMaharaj16' },
  { label: 'LinkedIn', handle: 'aayush-maharaj', href: 'https://www.linkedin.com/in/aayush-maharaj/' },
  { label: 'Instagram', handle: '@aayush.maharaj16', href: 'https://www.instagram.com/aayush.maharaj16/' },
];

export default function DoorPage() {
  const formRef = useRef();
  const [status, setStatus] = useState({ kind: 'idle', message: '' });
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        kind: 'error',
        message: 'Email service not configured yet — see .env.local',
      });
      return;
    }

    setBusy(true);
    setStatus({ kind: 'idle', message: 'Sending…' });

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus({ kind: 'success', message: 'Message sent. Talk soon.' });
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus({
        kind: 'error',
        message: "Couldn't send — try again or DM me on LinkedIn.",
      });
    } finally {
      setBusy(false);
    }
  };

  return (
    <PageLayout
      accent={ACCENT}
      eyebrow="Contact"
      title="Let's talk."
      lead="Drop a message below — it goes straight to my inbox. Or find me on any of the
        platforms further down. I do my best to reply within a couple of days."
      hero={<DoorModel />}
    >
      <div className="contact-grid">
        <div>
          <Section label="Send a message">
            <form ref={formRef} onSubmit={onSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="from_name"
                  required
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="from_email"
                  required
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="What's up?"
                />
              </div>
              <button className="submit-btn" type="submit" disabled={busy}>
                {busy ? 'Sending…' : 'Send message'}
              </button>
              {status.message && (
                <div className={`form-status ${status.kind}`}>{status.message}</div>
              )}
            </form>
          </Section>
        </div>

        <div>
          <Section label="Or find me here">
            <div className="socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  className="social-row"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <div className="label">{s.label}</div>
                    <div className="handle">{s.handle}</div>
                  </div>
                  <div style={{ color: ACCENT, fontSize: 20 }}>↗</div>
                </a>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </PageLayout>
  );
}
