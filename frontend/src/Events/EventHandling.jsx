import { useState } from "react";

function EventHandlingExample() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const showAlert = () => {
    alert("Button clicked!");
  };

  const logMessage = () => {
    console.log("Button clicked");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted: " + email);
  };

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Event Handling Practice</h2>

      <button onClick={showAlert}>Show Alert</button>

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />

      <p>Name: {name}</p>

      <br />

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Submit Form</button>
      </form>

      <br />

      <div
        onMouseMove={handleMouseMove}
        style={{
          height: "150px",
          border: "2px solid black",
          marginTop: "20px",
        }}
      >
        <p>Move mouse here</p>
        <p>X: {position.x}</p>
        <p>Y: {position.y}</p>
      </div>

      <br />

      <button onClick={logMessage}>Console Log Button</button>
    </div>
  );
}

export default EventHandlingExample;
