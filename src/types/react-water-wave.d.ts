declare module 'react-water-wave' {
  import React from 'react';
  
  interface ReactWaterWaveProps {
    imageUrl?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    dropRadius?: number;
    perturbance?: number;
    resolution?: number;
    interactive?: boolean;
    crossOrigin?: string;
  }
  
  const ReactWaterWave: React.FC<ReactWaterWaveProps>;
  export default ReactWaterWave;
}
