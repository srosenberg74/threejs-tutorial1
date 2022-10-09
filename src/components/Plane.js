import React from 'react'
import { DoubleSide } from 'three'

function Plane() {
  return (
    <mesh position={[0,.5,.4]}  rotation={[90, 90, 0]} scale={[22,22,22]}>
    <planeBufferGeometry />
    <meshBasicMaterial color="yellow" side={DoubleSide} />
    </mesh>
  )
}

export default Plane