import React from "react";
import useDragging from "../behaviours/useDragging";
import { useFrame } from '@react-three/fiber'

function Box(props) {
    const ref = React.useRef()
    const [hovered, hover] = React.useState(false)

    useFrame((state, delta) => (ref.current.rotation.x += delta))

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

export default useDragging(Box);