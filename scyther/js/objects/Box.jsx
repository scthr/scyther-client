import React from "react";
import draggable from "../behaviours/draggable";
import { useFrame } from '@react-three/fiber'

function Box(props) {
    const ref = React.useRef()
    const [hovered, hover] = React.useState(false)

    return (
        <mesh
            {...props}
            ref={ref}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export default draggable(Box);