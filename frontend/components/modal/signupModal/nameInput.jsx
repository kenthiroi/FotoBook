import React, { useState } from "react";
import ErrorBubble from "./errorBubble";

function NameInput (props){
  
  const [validFirstName, setValidFirstName] = useState(true);
  const [validLastName, setValidLastName] = useState(true);

  const checkFirstName = (e) => {
    setValidFirstName(alphabetCheck(e.target.value));
  }

  const checkLastName = (e) => {
    setValidLastName(alphabetCheck(e.target.value));
  }

  const alphabetCheck = (name) => {
    //Checks  to see if there are only letters in the string
    const alphabetPattern = /^[A-Za-z]+$/;
    return alphabetPattern.test(name);
  }

  return (
    <div id="name-box">
      <input 
        type="text" 
        placeholder="First name" 
        onChange={props.updateFirstName}
        onBlur={checkFirstName}
      />
      {!validFirstName && <ErrorBubble error="What's your name?"/>}
      <input 
        type="text" 
        placeholder="Last name" 
        onChange={props.updateLastName}
        onBlur={checkLastName}
      />
      {!validLastName && <ErrorBubble error="What's your name?"/>}
    </div>
  )
}

export default NameInput;