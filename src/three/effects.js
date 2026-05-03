import React from 'react';
import {
  EffectComposer,
  Bloom,
  Vignette,
  ToneMapping,
  BrightnessContrast,
  HueSaturation,
  SMAA,
} from '@react-three/postprocessing';
import { ToneMappingMode } from 'postprocessing';

/**
 * Lean cinematic post stack.
 * - SMAA gives crisp edges without canvas-level MSAA
 * - Bloom is small-radius and selective
 * - Dropped chromatic aberration + grain (cumulative cost wasn't worth it)
 */
export default function Effects() {
  return (
    <EffectComposer multisampling={0} disableNormalPass>
      <SMAA />
      <Bloom
        intensity={0.32}
        luminanceThreshold={0.85}
        luminanceSmoothing={0.2}
        mipmapBlur
        radius={0.55}
      />
      <BrightnessContrast brightness={0.0} contrast={0.05} />
      <HueSaturation saturation={0.06} hue={0.0} />
      <Vignette eskil={false} offset={0.32} darkness={0.5} />
      <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
    </EffectComposer>
  );
}
