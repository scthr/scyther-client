import React from "react";
import { Canvas } from '@react-three/fiber'
import Box from "./objects/Box";
import Sphere from "./objects/Sphere";
import Hex from "./objects/Hex";

const ScytherApp = () => {

    return (
        <Canvas orthographic camera={{ zoom: 50, position: [0, 0, 100] }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]} />
            <Sphere position={[1.2, 0, 0]} />
            <Hex position={[0, 0, -1]} />
        </Canvas>
    )
}

export default ScytherApp;