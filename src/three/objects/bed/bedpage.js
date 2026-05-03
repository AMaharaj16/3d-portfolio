import React, { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import PageLayout from '../../../components/PageLayout';
import Section from '../../../components/Section';

const ACCENT = '#ff9b6e';

function BedModel() {
  const { scene } = useGLTF('/models/bed.glb');
  // Clone so we don't mutate the cached scene used in the room view.
  const cloned = useMemo(() => scene.clone(true), [scene]);
  return (
    <primitive
      object={cloned}
      scale={3.6}
      position={[0, -2, 0]}
      rotation={[0, -Math.PI / 2.3, 0]}
    />
  );
}

const skillGroups = [
  {
    label: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'C++', 'R', 'HTML', 'CSS'],
  },
  {
    label: 'Frameworks',
    items: ['React', 'Next.js', 'Node.js', 'Express', 'Flask', 'Supabase', 'PostgreSQL'],
  },
  {
    label: 'Tools',
    items: ['Git', 'Docker', 'VS Code', 'Black Duck', 'Jira', 'Sourcetree'],
  },
];

const goals = [
  {
    eyebrow: 'Strength',
    text: 'Bench 215 lb today → 240 lb by August.',
  },
  {
    eyebrow: 'Endurance',
    text: 'Run a full marathon — Sept / Oct 2026.',
  },
  {
    eyebrow: 'Career',
    text: 'Land a big-tech SWE internship for the Jan–Apr 2027 term.',
  },
  {
    eyebrow: 'Long term',
    text: 'Build a startup near the end of undergrad — or just after graduating.',
  },
];

export default function BedPage() {
  return (
    <PageLayout
      accent={ACCENT}
      eyebrow="About me"
      title="Hi, I'm Aayush."
      lead="Second-year Computer Science major with a Math minor at UBC. I like building
        things that are both practical and thoughtfully designed — full-stack web apps,
        backend services, small machine learning experiments. The mix of logic and
        creativity is what keeps pulling me back to software."
      hero={<BedModel />}
    >
      <Section label="The story">
        <div className="prose">
          <p>
            Lately I've been especially interested in full-stack development, security,
            and machine learning. I like thinking about how systems fit together, how
            data flows through them, and how to make them more efficient and reliable.
          </p>
          <p>
            I came to UBC from Calgary without a clear plan. Math and physics had always
            been strengths, but I'd barely coded in high school. My older sister studied
            CS at UBC and encouraged me to try it through a Bachelor of Science. It felt
            like a bit of a gamble at the time, especially since it meant stepping away
            from traditional engineering paths.
          </p>
          <p>
            Pretty quickly though, I realized I genuinely enjoyed it. Courses in computer
            architecture, object-oriented programming, and data structures showed me how
            much I liked the structure and depth of the field. Problems had clear logic
            behind them, but also room for creativity in how you solved them.
          </p>
          <p>
            Outside of class, working with collaborative technical environments like UBC
            Sailbot has taught me a lot about communication, iteration, and writing code
            other people can actually work with. Good software is rarely built alone.
          </p>
          <p>
            When I'm not coding, I'm at the gym, going for a run, hiking when I can, and
            following cars and hockey way too closely. Staying active helps me reset and
            come back to technical problems with a clearer head.
          </p>
        </div>
      </Section>

      <Section label="Currently chasing">
        <div className="goals">
          {goals.map((g) => (
            <div className="goal" key={g.eyebrow}>
              <div className="goal-eyebrow">{g.eyebrow}</div>
              <div className="goal-text">{g.text}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Tooling">
        <div className="skills-stack">
          {skillGroups.map((g) => (
            <div className="skills-stack-block" key={g.label}>
              <h3>{g.label}</h3>
              <div className="chips">
                {g.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
