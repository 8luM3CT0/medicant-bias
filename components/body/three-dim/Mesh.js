import React from 'react'

function Mesh () {
  return (
    <mesh rotation={[0, 0, 0]}>
      <sphereGeometry attach='geometry' args={(1, 16, 16)} />
      <meshStandardMaterial attach='material' color='blue' />
    </mesh>
  )
}

export default Mesh
