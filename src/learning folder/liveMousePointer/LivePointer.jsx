import { useState } from "react";

function LivePointer() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    return (
        <div
            onPointerMove={(e) => {
                setPosition({
                    x: e.clientX,
                    y: e.clientY
                })
            }}

            style={{
                position: "relative",
                width: '100vw',
                height: '100vh',
                backgroundColor: '#23272F'
            }}
        >
            <div 
                style={{
                  
                    backgroundColor: "red",
                    borderRadius: "50%",
                    transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
                    width: 20,
                    height: 20
                }}
            ></div>
        </div>
    )
}

export default LivePointer;