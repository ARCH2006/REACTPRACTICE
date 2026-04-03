import { useState } from "react";
function DisplayEvent() {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ height: "200px", border: "1px solid black" }}
    >
      <p>Mouse X: {position.x}</p>
      <p>Mouse Y: {position.y}</p>
    </div>
  );
}
export default DisplayEvent;