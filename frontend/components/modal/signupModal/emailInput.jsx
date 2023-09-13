import React, { useState } from "react";
import ErrorBubble from "./errorBubble";

function EmailInput(props){
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [email, setEmail] = useState("");
  const [emailVerification, setEmailVerification] = useState("");
  const [emailComparison, setEmailComparison] = useState(false);

  const handleEmailInput = (e) => {
    props.updateEmail(e);
    setEmail(e.target.value);
  }

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
    setIsValidEmail(emailPattern.test(email));
  }

  const handleVerificationEmail = (e) => {
    setEmailVerification(e.target.value);
  }

  const compareEmails = () => {
    setEmailComparison(emailVerification === email);
  }

  return (
    <div id="email-box">
      <input 
        type="text" 
        placeholder="Email" 
        onChange={handleEmailInput}
        onBlur={validateEmail}
      />
      {!isValidEmail && <ErrorBubble error="You'll use this to log in."/>}
      {isValidEmail && email.substring(0, email.indexOf("@")).length > 0 ?
        <input
          type="text"
          placeholder="Re-enter Email"
          onChange={handleVerificationEmail}
          onBlur={compareEmails}
          /> : <></>}
        {!emailComparison && isValidEmail && emailVerification.length !== 0? <ErrorBubble error="Email does not match"/> : <></>}
    </div>
  )
}

export default EmailInput;