import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Runs when the form is submitted
  function handleSubmit(event) {
    event.preventDefault(); // stop page reload

    alert(`Email: ${email}\nPassword: ${password}`);
  }

  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>

      <br></br>

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
