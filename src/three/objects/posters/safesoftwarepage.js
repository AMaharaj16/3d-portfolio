import React, { Suspense } from 'react';
import { useTexture } from '@react-three/drei';
import PageLayout from '../../../components/PageLayout';
import ProjectCard from '../../../components/ProjectCard';
import Section from '../../../components/Section';

const ACCENT = '#a586ff';

function SafeSoftwareHero() {
  const tex = useTexture('/models/safesoftware.jpg');
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

export default function SafeSoftwarePage() {
  return (
    <PageLayout
      accent={ACCENT}
      eyebrow="Safe Software"
      title="Software Developer Intern — Product Security."
      lead="Spent four months building Python automation tooling and CVE triage workflows
        for Safe Software's Product Security team. Worked closely with engineers and
        customers to assess and remediate open-source dependency risk in production."
      hero={<SafeSoftwareHero />}
    >
      <div className="job-meta">
        <span>Safe Software</span>
        <span>Product Security Team</span>
        <span>Surrey, BC</span>
        <span>Jan 2026 — Apr 2026</span>
      </div>

      <Section label="Highlights">
        <ProjectCard
          title="Internal vulnerability triage automation"
          date="Jan 2026 — Apr 2026"
          tagline="Built tooling to make CVE triage dramatically faster across large codebases."
          bullets={[
            'Built Python automation to triage vulnerabilities across large codebases, improving workflow efficiency.',
            'Owned CVE exploitability investigations, reducing time from 3 days to hours and enabling 2–3 investigations per day.',
            'Restructured vulnerability triage workflows to better identify high-impact security risks.',
            'Prioritized CVE investigations by customer impact, driving rapid analysis of customer-reported vulnerabilities.',
            'Collaborated with engineers to assess CVE impact and drive timely remediation in production systems.',
            'Communicated technical findings to customers, improving alignment on security risks and mitigation strategies.',
          ]}
          chips={[
            'Python',
            'Snyk',
            'Black Duck',
            'GitHub',
            'Jira',
            'CVE Analysis',
            'Automation',
          ]}
        />
      </Section>

      <Section label="What I took away">
        <div className="prose">
          <p>
            This role strengthened my understanding of software supply chain security
            and secure development practices in large-scale systems. It also taught me
            a lot about explaining technical risk to non-engineering stakeholders —
            translating "here's a CVSS 8.4" into "here's specifically what could
            happen to your data, and here's our timeline to fix it."
          </p>
        </div>
      </Section>
    </PageLayout>
  );
}
