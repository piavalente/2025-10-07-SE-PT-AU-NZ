import { useState } from "react";
import ActivityFinder from "../../../../Module7/myreactapp/src/MyComponents/ActivityFinder";

function LoginForm() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Result, setResult] = useState("");
  const [showActivityFinder, setShowActivityFinder] = useState(true);

  function FormSubmitted() {
    if (Email.length < 5) {
      setResult("Email cannot be less than 5 characters");
      setShowActivityFinder(true);
    } else if (Password.length < 4) {
      setResult("Password cannot be less than 4 characters");
      setShowActivityFinder(true);
    } else {
      setResult("Form is submitted successfully");
      alert(`Email submitted: ${Email}`);
      alert(`Password submitted: ${Password}`);

      // clear inputs AFTER successful submit
      setEmail("");
      setPassword("");

      setShowActivityFinder(true);
    }
  }

  return (
    <div className="LoginForm componentBox">
      <div className="formRow">
        <label>
          Email Address:
          <input
            type="text"
            name="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>

      <div className="formRow">
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>

      <div>
        <button onClick={FormSubmitted}>Submit</button>
      </div>

      <div>
        <label>{Result}</label>
      </div>

      {showActivityFinder && <ActivityFinder />}

    </div>
  );
}

export default LoginForm;
