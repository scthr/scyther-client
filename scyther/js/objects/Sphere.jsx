import React from "react";
import draggable from "../behaviours/draggable";
import { useFrame } from '@react-three/fiber'

function Sphere(props) {
    const ref = React.useRef()
    const [hovered, hover] = React.useState(false)

    return (
        <mesh
            {...props}
            ref={ref}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <sphereGeometry args={[1, 32, 16]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export default draggable(Sphere);