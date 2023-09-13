import React, { useState } from "react";

function EmailInput(props){
  const [isValidEmail, setIsValidEmail] = useState(false);

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
    setIsValidEmail(emailPattern.test(email));
  }

  const handleEmailInput = (e) => {
    props.updateEmail(e);
    validateEmail(props.email);
  }

  return (
    <div id="email-box">
      <input 
        type="text" 
        placeholder="Email" 
        onChange={handleEmailInput}
      />
      {isValidEmail &&
        <input
          type="text"
          placeholder="Re-enter Email"
          onChange={props.updateVerifyEmail}
        />}
    </div>
  )
}

export default EmailInput;