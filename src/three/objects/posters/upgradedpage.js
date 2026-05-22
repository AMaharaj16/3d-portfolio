import React, { Suspense } from 'react';
import { useTexture } from '@react-three/drei';
import PageLayout from '../../../components/PageLayout';
import ProjectCard from '../../../components/ProjectCard';
import Section from '../../../components/Section';

const ACCENT = '#ff8a5b';

function UpgradedHero() {
  const tex = useTexture('/models/upgraded.png');
  return (
    <Suspense fallback={null}>
      <group>
        <mesh position={[0, 0, -0.06]} castShadow>
          <boxGeometry args={[4.2, 3.2, 0.1]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.6} roughness={0.35} emissive={ACCENT} emissiveIntensity={0.4} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[4, 3]} />
          <meshStandardMaterial map={tex} emissiveMap={tex} emissive="#ffffff" emissiveIntensity={0.25} />
        </mesh>
        <mesh position={[0, 0, -0.12]}>
          <planeGeometry args={[5.4, 4.4]} />
          <meshBasicMaterial color={ACCENT} transparent opacity={0.35} depthWrite={false} />
        </mesh>
      </group>
    </Suspense>
  );
}

export default function UpgradedPage() {
  return (
    <PageLayout
      accent={ACCENT}
      eyebrow="Upgraded"
      title="Software Engineer Intern — AI Employee Platform."
      lead="Shipping features at Upgraded, a Vancouver-based AI Employee platform that
        deploys 24/7 AI teammates for sales, marketing, and operations. My work centers
        on the AI BDR side: keeping real-time chat reliable, lead workflows smooth, and
        the integrations underneath them stable."
      hero={<UpgradedHero />}
    >
      <div className="job-meta">
        <span>Upgraded</span>
        <span>AI Employee Platform</span>
        <span>Vancouver, BC</span>
        <span>May 2026 — Aug 2026</span>
      </div>

      <Section label="Highlights">
        <ProjectCard
          title="Software Engineer Intern"
          date="May 2026 — Aug 2026"
          tagline="Shipping reliability and integration work across an AI BDR platform built around 'AI Employees' that automate sales workflows end-to-end."
          bullets={[
            'Shipped features for an AI BDR platform, improving reliability of real-time messaging and lead workflows.',
            'Eliminated race conditions in chat by redesigning async handling, boosting UI consistency under concurrency.',
            'Reviewed and merged PRs (OAuth, connectivity), improving integration stability and reducing user friction.',
          ]}
          chips={[
            'Real-time messaging',
            'Async / concurrency',
            'OAuth',
            'Integrations',
            'Code review',
            'AI workflows',
          ]}
          link={{
            label: 'getupgraded.ai →',
            href: 'https://getupgraded.ai',
          }}
        />
      </Section>

      <Section label="What I took away">
        <div className="prose">
          <p>
            Working on a platform where AI agents drive customer conversations made the
            cost of subtle bugs really concrete — a single race condition in chat
            doesn't just look ugly, it can derail a lead's first impression of a
            company. Most of my time went into making the boring layers (async state,
            OAuth handshakes, third-party connectors) behave predictably so the
            AI-facing features on top of them could be trusted.
          </p>
        </div>
      </Section>
    </PageLayout>
  );
}
