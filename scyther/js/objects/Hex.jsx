import React from "react";
import * as THREE from "three";
import { useGesture } from "react-use-gesture"
import { Extrude } from "@react-three/drei";
import draggingTarget from "../behaviours/draggingTarget";

const Hex = (props) => {
    // Draw a hexagon
    const ref = React.useRef()
    const SIDE = 1;
    const extrudeSettings = { steps: 2, depth: 1, bevelEnabled: false };

    const shape = React.useMemo(() => {
        const _shape = new THREE.Shape();
    
        _shape.moveTo(0, SIDE);
        _shape.lineTo(SIDE * Math.cos(Math.PI / 6), SIDE * Math.sin(Math.PI / 6));
        _shape.lineTo(SIDE * Math.cos(Math.PI / 6), -SIDE * Math.sin(Math.PI / 6));
        _shape.lineTo(0, -SIDE);
        _shape.lineTo(-SIDE * Math.cos(Math.PI / 6), -SIDE * Math.sin(Math.PI / 6));
        _shape.lineTo(-SIDE * Math.cos(Math.PI / 6), SIDE * Math.sin(Math.PI / 6));
        _shape.lineTo(0, SIDE);
    
        return _shape;
      }, []);
    
    return (
        <>
        <Extrude args={[shape, extrudeSettings]} {...props}>
          <meshPhysicalMaterial
            flatShading
            color={props.color}
          />
        </Extrude>
      </>
    )
}

export default draggingTarget(Hex);