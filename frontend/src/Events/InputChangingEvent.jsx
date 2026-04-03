import { useState } from "react";

function InputChangingEvent() {

  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input 
        type="text"
        placeholder="Enter name"
        onChange={handleChange}
      />

      <p>You typed: {name}</p>
    </div>
  );
}
export default InputChangingEvent;