import React, { useState } from "react";
import ErrorBubble from "./errorBubble";

function EmailInput(props){
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [emailVerification, setEmailVerification] = useState("");

  const handleEmailInput = (e) => {
    props.updateEmail(e);
    validateEmail(e);
  }

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
    setIsValidEmail(emailPattern.test(email));
  }

  return (
    <div id="email-box">
      <input 
        type="text" 
        placeholder="Email" 
        onChange={handleEmailInput}
      />
      {!isValidEmail && <ErrorBubble error="You'll use this to log in."/>}
      {isValidEmail &&
        <input
          type="text"
          placeholder="Re-enter Email"
          onChange={setEmailVerification}
        />}
      {emailVerification !== email && isValidEmail ? <ErrorBubble error="Email does not match"/> : <></>}
    </div>
  )
}

export default EmailInput;