import React from 'react'

function Mesh (props) {
  return (
    <mesh {...props} receiveShadow={true}>
      <boxBufferGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial color='white' />
    </mesh>
  )
}

export default Mesh
