// LoginForm.jsx
import { useState, useContext } from "react";
import { useFormInput } from "../Hooks/useFormInput";
import { userContext } from "./UserProvider";



function LoginForm() {
  const [result, setResult] = useState("");
  const [emailInputProps, resetEmail] = useFormInput("");
  const [passwordInputProps, resetPassword] = useFormInput("");
  const { currentUser, handleUpdateUser } = useContext(userContext);
 

  const logoutJSX = (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );

  const loginJSX = (
    <>
      <div>
        <label>
          Email Address:
          <input type="text" name="email" {...emailInputProps} />
        </label>
      </div>

      <div>
        <label>
          Password:
          <input type="password" name="password" {...passwordInputProps} />
        </label>
      </div>

      <div>
        <button onClick={() => formSubmitted()}>Submit</button>
      </div>


      <div>
        {result}
      </div>
    </>
  );

  function formSubmitted() {
    if (emailInputProps.value.length < 5) {
      setResult("Email cannot be less than 5 characters");
    } else if (passwordInputProps.value.length < 4) {
      setResult("Password cannot be less than 4 characters");
    } else {
      // Store user as an object
      handleUpdateUser({ user: emailInputProps.value });
      resetEmail();
      resetPassword();
      setResult("User logged in successfully");
    }
  }

  function logout() {
    handleUpdateUser({});
    setResult("Logged out successfully");
  }

  // Conditional rendering based on user login
  return <>{currentUser?.user ? logoutJSX : loginJSX}</>;
}

export default LoginForm;
