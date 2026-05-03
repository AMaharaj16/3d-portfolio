import React, { Suspense } from 'react';
import { useTexture } from '@react-three/drei';
import PageLayout from '../../../components/PageLayout';
import ProjectCard from '../../../components/ProjectCard';
import Section from '../../../components/Section';

const ACCENT = '#7bd0ff';

function SailbotHero() {
  const tex = useTexture('/models/sailbot.jpg');
  return (
    <Suspense fallback={null}>
      <group position={[0, 0, 0]}>
        {/* Frame */}
        <mesh position={[0, 0, -0.06]} castShadow>
          <boxGeometry args={[3.2, 4.2, 0.1]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.6} roughness={0.35} emissive={ACCENT} emissiveIntensity={0.4} />
        </mesh>
        {/* Image */}
        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[3, 4]} />
          <meshStandardMaterial map={tex} emissiveMap={tex} emissive="#ffffff" emissiveIntensity={0.25} />
        </mesh>
        {/* Glow */}
        <mesh position={[0, 0, -0.12]}>
          <planeGeometry args={[4.4, 5.4]} />
          <meshBasicMaterial color={ACCENT} transparent opacity={0.35} depthWrite={false} />
        </mesh>
      </group>
    </Suspense>
  );
}

export default function SailbotPage() {
  return (
    <PageLayout
      accent={ACCENT}
      eyebrow="UBC Sailbot"
      title="Software Lead — Pathfinding."
      lead="Leading the pathfinding subsystem of UBC Sailbot's autonomous navigation
        stack — a six-person navigation team inside an 80-person multidisciplinary
        design team. We're building software that can take a sailboat across an ocean
        on its own."
      hero={<SailbotHero />}
    >
      <div className="job-meta">
        <span>UBC Sailbot</span>
        <span>Pathfinding · ROS</span>
        <span>Vancouver, BC</span>
        <span>Sep 2025 — Present</span>
      </div>

      <Section label="Highlights">
        <ProjectCard
          title="Software Pathfinding Lead"
          date="Feb 2026 — Present"
          tagline="Promoted to lead after six months of development work on the team."
          bullets={[
            'Guide algorithm development and coordinate a six-member navigation team within an 80-person multidisciplinary design team.',
            'Review code, define tasks, and enforce accountability to ensure consistent progress and code quality.',
            'Coordinate cross-team integration of pathfinding within a distributed robotics system.',
            'Independently deliver core features while leading development efforts across the pathfinding subsystem.',
          ]}
          chips={['Python', 'ROS', 'Technical leadership', 'Code review']}
        />

        <ProjectCard
          title="Software Pathfinding Developer"
          date="Sep 2025 — Feb 2026"
          tagline="Started here as a developer before moving into the lead role."
          bullets={[
            'Designed and implemented Python pathfinding algorithms in a ROS-based autonomous navigation stack.',
            'Processed real-time AIS and sensor data for dynamic obstacle avoidance in simulation and on-water testing.',
            'Containerized navigation modules with Docker for reproducible deployment across environments.',
            'Integrated modules into a distributed robotics architecture with 20+ software contributors.',
            'Applied strong ROS knowledge to enable communication across navigation, perception, and control modules.',
          ]}
          chips={['Python', 'ROS', 'Docker', 'AIS', 'Sensor fusion']}
          link={{
            label: 'UBC Sailbot →',
            href: 'https://www.linkedin.com/company/6382586/',
          }}
        />
      </Section>
    </PageLayout>
  );
}
