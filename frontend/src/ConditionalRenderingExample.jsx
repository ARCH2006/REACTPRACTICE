import { useState, useEffect } from "react";

function ConditionalRenderingExample() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(true);

  const items = [];

  const score = 75;

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 2000);

  }, []);

  return (

    <div style={{ padding: "20px" }}>

      <h2>Conditional Rendering Practice</h2>

      {
        isLoggedIn
        ? <h3>Welcome User</h3>
        : <button onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
      }

      <br /><br />

      {
        items.length === 0
        ? <p>No items available</p>
        : items.map((item, index) =>
            <p key={index}>{item}</p>
          )
      }

      <br />

      <div
        style={{
          backgroundColor:
            score > 80
            ? "green"
            : score > 50
            ? "orange"
            : "red",

          color: "white",
          padding: "10px"
        }}
      >      Score: {score}

      </div>

      <br />

    
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
      />

      <button
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? "Hide" : "Show"}
      </button>

      <br /><br />
      {
        loading
        ? <p>Loading...</p>
        : <h3>Data Loaded Successfully</h3>
      }

    </div>

  );
}

export default ConditionalRenderingExample;