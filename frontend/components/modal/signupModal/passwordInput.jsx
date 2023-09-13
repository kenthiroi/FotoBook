import React from "react";
import ErrorBubble from "./errorBubble";
import { useState } from "react";

function PasswordInput (props){
  const [isValid, setIsValid] = useState(true);

  const passwordCheck = (e) => {
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/;
    // console.log(e.target.value)
    const isItValid = passwordPattern.test(e.target.value) && e.target.value.length >= 6;
    // console.log(isItValid);
    setIsValid(isItValid);
  }

  console.log(isValid);

  return (
    <div id="password-box">
      <input 
        type="password" 
        placeholder="New password" 
        onChange={props.updatePassword}
        onBlur={passwordCheck}
      />
      {!isValid && <ErrorBubble error="Enter a combination of at least six numbers, letters, and punctuation marks (like ! and &)."/>}
    </div>
  )
}

export default PasswordInput;