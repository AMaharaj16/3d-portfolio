import React, { useLayoutEffect, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import PageLayout from '../../../components/PageLayout';
import ProjectCard from '../../../components/ProjectCard';
import Section from '../../../components/Section';

const ACCENT = '#7be0ff';

function TarsModel() {
  const { scene } = useGLTF('/models/tars.glb');
  // Clone so we don't mutate the cached scene used in the room view.
  const cloned = useMemo(() => scene.clone(true), [scene]);

  useLayoutEffect(() => {
    cloned.traverse((c) => {
      if (c.isMesh) {
        c.material = new THREE.MeshStandardMaterial({
          color: 0xb8bcc4,
          roughness: 0.3,
          metalness: 0.7,
          emissive: new THREE.Color(0x0a3340),
          emissiveIntensity: 0.5,
          map: c.material?.map,
        });
        c.castShadow = false;
        c.receiveShadow = false;
      }
    });
  }, [cloned]);

  return (
    <primitive
      object={cloned}
      scale={2.4}
      position={[0, -2, 0]}
      rotation={[0, Math.PI / 2, 0]}
    />
  );
}

export default function TarsPage() {
  return (
    <PageLayout
      accent={ACCENT}
      eyebrow="Machine Learning"
      title="Teaching machines to see, score, and predict."
      lead="A small but growing collection of ML work — from real-time pose
        estimation built in 24 hours, to classical supervised learning experiments
        on user behavior. I'm interested in pipelines that take messy real-world
        signal and turn it into something useful."
      hero={<TarsModel />}
    >
      <Section label="Projects">
        <ProjectCard
          title="Must Dance"
          date="HackCamp 2025 · Nov 2025"
          tagline="Machine learning–powered dance scoring web app built in a 24-hour hackathon."
          bullets={[
            'Co-developed React frontend and Flask backend to process user-recorded dance videos.',
            'Integrated FFmpeg and OpenCV for robust frame extraction and preprocessing.',
            'Built ML-based pose estimation pipeline using Mediapipe to compare user movement against reference choreography.',
            'Designed scoring logic to evaluate positional accuracy across key body landmarks.',
            'Shipped a working MVP within 24 hours in a 3-person team.',
          ]}
          chips={['Mediapipe', 'OpenCV', 'FFmpeg', 'Pose estimation', 'Flask']}
          link={{ href: 'https://github.com/boydhamilton/mustdance' }}
        />

        <ProjectCard
          title="Predicting Newsletter Subscriptions with KNN"
          date="Apr 2025"
          tagline="Supervised machine learning project evaluating predictive power of user behavior features."
          bullets={[
            'Built a KNN classifier using tidymodels in R.',
            'Performed data cleaning, upsampling, and 5-fold cross-validation.',
            'Evaluated accuracy, precision, and recall metrics.',
            'Analyzed weak predictive signal across selected behavioral features.',
          ]}
          chips={['R', 'tidymodels', 'KNN', 'Cross-validation']}
          link={{ href: 'https://github.com/kathleenramsey/dsci100_group23' }}
        />
      </Section>
    </PageLayout>
  );
}
