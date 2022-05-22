import React, { useRef, Suspense } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import Mesh from './Mesh'
import Box from './Box'
import PointLight from './PointLight'
import Controls from './Controls'
import Drag from './Drag'

function ThreeDim () {
  return (
    <div>
      <Canvas
        shadows={true}
        className='bg-gray-800'
        camera={{
          position: [-6, 7, 7]
        }}
      >
        <ambientLight color={'white'} intensity={0.3} />
        <PointLight position={[0, 3, 0]} />
        <Drag>
          <Suspense fallback={null}>
            <Box rotateX={3} rotateY={0.2} />
          </Suspense>
        </Drag>
        <Controls />
        <Mesh position={[0, -1, 0]} />
      </Canvas>
    </div>
  )
}

export default ThreeDim
