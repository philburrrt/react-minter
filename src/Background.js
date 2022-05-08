import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Sky } from '@react-three/drei';
import * as styles from './styles';

function Background() {
return(
  <styles.Screen>
    <Canvas>
      <Sky 
      sunPosition={[100, 20, 1000]}
      distance={3000}
      turbidity={0}
      rayleigh={10}
      />
    </Canvas>
  </styles.Screen>
);
}

export default Background;