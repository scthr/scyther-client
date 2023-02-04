import React from "react";

import { useThree } from '@react-three/fiber'
import { useGesture } from "react-use-gesture"

function useDragging(Box) {
    const DraggableBox = (props) => {
        const ref = React.useRef()
        const [active, setActive] = React.useState(false)
        const [position, setPosition] = React.useState(props.position || [0, 0, 0])
        const { size, viewport } = useThree();
        const aspect = size.width / viewport.width;

        const bind = useGesture({
            onDrag: ({ offset: [x, y] }) => {
                setPosition([x / aspect, -y / aspect, 0])
            },
            onDragStart: () => {
                setActive(true)
            },
            onDragEnd: () => {
                setActive(false)
            }
        })

        return (
            <Box
                {...props}
                {...bind()}
                ref={ref}
                position={position}
                scale={active ? 1.5 : 1}
            />
        )
    }

    return DraggableBox;
}

export default useDragging;