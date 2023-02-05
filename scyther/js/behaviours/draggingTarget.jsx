import React from "react";

import { useThree } from '@react-three/fiber'
import { useGesture } from "react-use-gesture"

function draggingTarget(Box) {
    const DraggingTarget = (props) => {
        // This is a stub. You can help by adding code to this function.

        const ref = React.useRef()

        return (
            <Box
                {...props}
                ref={ref}
            />
        )
    }

    return DraggingTarget;
}

export default draggingTarget;