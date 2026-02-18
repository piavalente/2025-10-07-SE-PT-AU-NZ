import { useContext, useState } from "react";
import { useFormInput } from "../Hooks/useFormInput";
import { UserContext } from "../Context/UserProvider";


function LoginForm() {
  const [result, setResult] = useState("");

  const [emailInputProps, resetEmail] = useFormInput("");
  const [passInputProps, resetPassword] = useFormInput("");
  const {currentUser, handleUpdateUser} = useContext(UserContext);

  const logoutJSX = (
    <>
      <button onClick = {logout}>Logout</button>
    </>
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
          <input type="password" name="password" {...passInputProps} />
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
    if (emailInputProps.value.length < 5) 
      setResult("Email cannot be less than 5 characters");
    else if (passInputProps.value.length < 4)
      setResult("Password cannot be less than 4 characters");
    else {
      // Store user as an object
      resetEmail();
      resetPassword();
      handleUpdateUser({ user: emailInputProps.value });
      setResult("User logged in successfully");
    }
  }

  function logout() {
    handleUpdateUser({});
    setResult("Logged out successfully");
  }

  // Conditional rendering based on user login
  return <>{currentUser.user ? logoutJSX : loginJSX}</>;
}

export default LoginForm;
