import React, { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import PageLayout from '../../../components/PageLayout';
import ProjectCard from '../../../components/ProjectCard';
import Section from '../../../components/Section';

const ACCENT = '#a586ff';

function ConsoleModel() {
  const { scene } = useGLTF('/models/ps5.glb');
  const cloned = useMemo(() => scene.clone(true), [scene]);
  return (
    <primitive
      object={cloned}
      scale={0.4}
      position={[0, -2, 0]}
    />
  );
}

export default function GameConsolePage() {
  return (
    <PageLayout
      accent={ACCENT}
      eyebrow="Game Development"
      title="Recreating classic games — and learning a lot doing it."
      lead="A handful of game projects built from scratch in Python — the kind where
        you have to think hard about state, collisions, and game loops. Plus the ML-y
        side: real-time pose estimation as a scoring engine for a dance game."
      hero={<ConsoleModel />}
    >
      <Section label="Games">
        <ProjectCard
          title="Pac-Man"
          date="Jun 2025 — Sep 2025"
          tagline="Object-oriented Python recreation of the classic arcade game."
          bullets={[
            'Implemented grid-based movement and a custom collision detection engine.',
            'Built enemy AI using BFS graph traversal for pathfinding.',
            'Structured game entities using encapsulated OOP design principles.',
            'Designed a modular game loop with state management.',
          ]}
          chips={['Python', 'OOP', 'Pathfinding', 'BFS']}
          link={{ href: 'https://github.com/AMaharaj16/Pac-Man-Game-Project' }}
        />

        <ProjectCard
          title="2048"
          date="May 2025"
          tagline="Matrix-driven 2048 clone exploring algorithmic game logic design."
          bullets={[
            'Implemented tile merging and shifting logic using 2D array transformations.',
            'Separated core game logic from the Pygame animation layer.',
            'Built a clean, modular object-oriented architecture.',
            'Focused on deterministic state transitions and edge-case testing.',
          ]}
          chips={['Python', 'Pygame', 'OOP']}
          link={{ href: 'https://github.com/AMaharaj16/2048-Game-Project' }}
        />

        <ProjectCard
          title="Must Dance"
          date="HackCamp 2025 · Nov 2025"
          tagline="Pose-estimation-powered dance scoring game built in 24 hours."
          bullets={[
            'Co-developed React frontend and Flask backend to process user-recorded dance videos.',
            'Integrated FFmpeg and OpenCV for frame extraction and preprocessing.',
            'Used Mediapipe pose estimation to compare user movement against reference choreography.',
            'Designed scoring logic to evaluate positional accuracy across body landmarks.',
            'Shipped a working MVP within 24 hours in a 3-person team.',
          ]}
          chips={['Mediapipe', 'OpenCV', 'React', 'Flask', 'Game design']}
          link={{ href: 'https://github.com/boydhamilton/mustdance' }}
        />
      </Section>
    </PageLayout>
  );
}
