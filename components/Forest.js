import React from 'react';
import {
  View,
  Cylinder,
} from 'react-vr';

export default ({trees, perimeter, colors}) => {
  const DEG2RAD = Math.PI / 180;
		
  return (
    <View>
      {Array.apply(null, {length: trees}).map((obj, index) => {
          const theta = DEG2RAD * (index / trees) * 360;
          const randomSeed = Math.random();
          const treeDistance = randomSeed * 5 + perimeter;
          const treeColor = Math.floor(randomSeed * 3);
          const x = Math.cos(theta) * treeDistance;
          const z = Math.sin(theta) * treeDistance;

          return (
            <Cylinder
              key={index}
              radiusTop={0.3}
              radiusBottom={0.3}
              dimHeight={10}
              segments={10}
              style={{
                color: colors[treeColor],
                opacity: randomSeed,
                transform: [{scaleY : 2 + Math.random()}, {translate: [x, 3, z]},],
              }}
            />
          );
      })}
    </View>
  );
}