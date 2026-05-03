import React, { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import PageLayout from '../../../components/PageLayout';
import ProjectCard from '../../../components/ProjectCard';
import Section from '../../../components/Section';

const ACCENT = '#ffb964';

function DeskModel() {
  const { scene } = useGLTF('/models/desk_set.glb');
  const cloned = useMemo(() => scene.clone(true), [scene]);
  return (
    <primitive
      object={cloned}
      scale={0.018}
      position={[0, -1.2, 0]}
      rotation={[0, Math.PI, 0]}
    />
  );
}

export default function DeskPage() {
  return (
    <PageLayout
      accent={ACCENT}
      eyebrow="Full Stack"
      title="Building things end-to-end."
      lead={
        <>
          Currently a Software Developer Intern at{' '}
          <a href="https://getupgraded.ai" target="_blank" rel="noopener noreferrer">
            getupgraded.ai
          </a>
          , working in TypeScript on AI agent integrations across the product, plus
          ongoing optimization work — error handling, load times, caching, and the
          unglamorous stuff that keeps a product feeling fast.
        </>
      }
      hero={<DeskModel />}
    >
      <Section label="Selected Projects">
        <ProjectCard
          title="CodeBuddy"
          date="Oct 2025 — Jan 2026"
          tagline="Full-stack empirical performance analysis platform for JavaScript programs."
          bullets={[
            'Architected a React + Vite frontend with a Node.js / Express backend to safely execute and profile user-submitted JavaScript.',
            'Implemented runtime measurement using high-resolution timers and memory profiling across dynamically scaled input sizes.',
            'Applied least-squares regression to fit empirical data to asymptotic complexity classes (O(n), O(n²), O(log n), etc.).',
            'Designed dynamic data visualizations to illustrate time and space growth trends.',
            'Focused on secure execution boundaries and performance isolation.',
          ]}
          chips={['React', 'Vite', 'Node.js', 'Express', 'Regression analysis']}
          link={{ href: 'https://github.com/AMaharaj16/CodeBuddy' }}
        />

        <ProjectCard
          title="Huddle"
          date="nwHacks 2026 · Jan 2026"
          tagline="Private family-oriented social platform with real-time interactivity."
          bullets={[
            'Built full-stack application using Next.js (TypeScript) and Supabase with PostgreSQL.',
            'Implemented authentication, media posting, and real-time presence tracking.',
            'Developed a daily memory game with persistent leaderboard functionality.',
            'Designed an accessible, mobile-friendly UI to promote engagement.',
          ]}
          chips={['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Realtime']}
          link={{ href: 'https://github.com/jeffh11/NwHacks' }}
        />

        <ProjectCard
          title="Must Dance"
          date="HackCamp 2025 · Nov 2025"
          tagline="Machine learning–powered dance scoring web app built in 24 hours."
          bullets={[
            'Co-developed React frontend and Flask backend to process user-recorded dance videos.',
            'Integrated FFmpeg and OpenCV for robust frame extraction and preprocessing.',
            'Built an ML-based pose estimation pipeline using Mediapipe to compare user movement against reference choreography.',
            'Designed scoring logic to evaluate positional accuracy across key body landmarks.',
            'Shipped a working MVP within 24 hours in a 3-person team.',
          ]}
          chips={['React', 'Flask', 'OpenCV', 'Mediapipe', 'FFmpeg']}
          link={{ href: 'https://github.com/boydhamilton/mustdance' }}
        />

        <ProjectCard
          title="2D Developer Portfolio"
          date="Feb 2026"
          tagline="Responsive personal portfolio website showcasing projects and experience."
          bullets={[
            'Built with Next.js and TypeScript.',
            'Implemented dynamic routing and reusable component architecture.',
            'Designed responsive layouts for desktop and mobile.',
            'Focused on clean typography and minimal UI.',
          ]}
          chips={['Next.js', 'TypeScript', 'Responsive design']}
          link={{ href: 'https://github.com/AMaharaj16/2d-portfolio' }}
        />

        <ProjectCard
          title="3D Developer Portfolio"
          date="Feb 2026 — Present"
          tagline="Interactive 3D portfolio built with immersive scene rendering. (You're inside it right now.)"
          bullets={[
            'Built with React and Three.js for real-time 3D rendering.',
            'Implemented custom camera controls and scene transitions.',
            'Optimized rendering performance and asset loading.',
            'Designed an interactive 3D experience while maintaining responsiveness.',
          ]}
          chips={['React', 'Three.js', 'react-three-fiber', 'Post-processing']}
          link={{ href: 'https://github.com/AMaharaj16/3d-portfolio' }}
        />
      </Section>
    </PageLayout>
  );
}
