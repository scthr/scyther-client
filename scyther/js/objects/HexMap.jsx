import React from "react";
import * as THREE from "three";
import { useGesture } from "react-use-gesture"
import { Extrude } from "@react-three/drei";
import draggingTarget from "../behaviours/draggingTarget";
import Hex from "./Hex";

const HexMap = (props) => {
    // https://www.redblobgames.com/grids/hexagons/
    const MAP_Z = -1;
    const MAP_WIDTH = 6;
    const MAP_HEIGHT = 4;

    const COLORS = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd'];
    

    const ref = React.useRef()

    function centerOf(c, r) {
        return [
            c * Math.sqrt(3) + Math.cos(Math.PI / 6) * (r%2) - MAP_WIDTH/2,
            1.5 * r - MAP_HEIGHT/2,
            MAP_Z
        ];
    }

    var hexGrid = [];

    for (var r = 0; r < MAP_HEIGHT; r++) {
        for (var c = 0; c < MAP_WIDTH; c++) {
            var color = COLORS[Math.floor(Math.random() * COLORS.length)];
            var hex = <Hex position={centerOf(c, r)} color={color} />;
            hexGrid.push(hex);
        }
    }

    console.log(hexGrid);

    return (
        <>{hexGrid}</>
    )
}

export default HexMap;