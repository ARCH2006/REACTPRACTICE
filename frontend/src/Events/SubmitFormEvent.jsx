import { useState } from "react";
function SubmitFormEvent() {

  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted: " + email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
export default SubmitFormEvent;