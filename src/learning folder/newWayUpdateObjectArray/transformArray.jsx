import { useState } from 'react';

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 5650 },
  { id: 1, type: 'square', x: 150, y: 5650 },
  { id: 2, type: 'circle', x: 250, y: 5650 },
];

export default function ShapeEditor() {
  const [shapes, setShapes] = useState(
    initialShapes
  );

  function handleClick() {
    const nextShapes = shapes.map(shape => {
      if (shape.type === 'square') {
        // No change
        return shape;
      } else {
        // Return a new circle 50px below
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });
    // Re-render with the new array
    setShapes(nextShapes);
  }

  function goUp() {
    const nextShapes = shapes.map(s => {
        if(s.type === 'square') {
            return s;
        } else {
            return {
                ...s,
                y: s.y - 50,
            }
        }
    });
    // Re-render with the new array
    setShapes(nextShapes);
  }

  return (
    <>  
      <br/>
      <br/>
      <h1>Shape Editor</h1>
      <button onClick={handleClick}>
        Move circles down!
      </button>
      <button onClick={goUp}>
        Move circles up!
      </button>
      {shapes.map(shape => (
        <div
          key={shape.id}
          style={{
          background: 'purple',
          position: 'absolute',
          left: shape.x,
          top: shape.y,
          borderRadius:
            shape.type === 'circle'
              ? '50%' : '',
          width: 20,
          height: 20,
        }} />
      ))}
    </>
  );
}
