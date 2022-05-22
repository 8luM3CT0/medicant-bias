import React, { useRef } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { oc as OrbitControls } from 'three-orbit-controls'
import Mesh from './Mesh'

function ThreeDim () {
  return (
    <div
      style={{
        height: innerHeight
      }}
    >
      <Canvas>
        <OrbitControls />
        <directionalLight intensity={0.5} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.9} />
        <Mesh />
      </Canvas>
    </div>
  )
}

export default ThreeDim
