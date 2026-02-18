import { useState } from "react";
import { useFormInput } from "../Hooks/useFormInput";

import { useContext } from "react";
import { userContext } from "./UserProvider";


export default function SubscribeForm() {
  const [status, setStatus] = useState("");

  /*
  // similar state variables mapped to form inputs - REPLACED
  const [firstName, setFirstName] = useState("Mary");
  const [email, setEmail] = useState("mary@poppins.com");
  */

    //use this instead
    const {currentUser} = useContext(userContext);
    const [ firstNameProps, firstNameReset ]= useFormInput("Mary");
    const [ emailProps, emailReset ]= useFormInput("mary@poppins.com");


   /*
  // similar handler functions - REMOVE as already refactored in useFormInput
  const handleNameChange = (e) => setFirstName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  */

  /*
  function handleSubscribe() {
    setFirstName("");
    setEmail("");
    setStatus("Thanks for subscribing!");
  }
    */

  function handleSubscribe() {
    firstNameReset();
    emailReset();
    setStatus("Thanks for subscribing!");
  }

  return (
    <>
      {currentUser.user ? (
        <div className="SubscribeForm componentBox">
        <label>
          First name:
          <input {...firstNameProps} />
        </label>

        <label>
          Email:{/* form inputs with similar props */}
          {/*<input value={email} onChange={handleEmailChange} />*/}
          <input {...emailProps} />
        </label>

        <button onClick={handleSubscribe}>Subscribe</button>
        <div>{status}</div>
      </div>
      ) : (
        <></>
      )}
    </>
  );
}
