import React from "react";

function PasswordInput (props){
  return (
    <div id="password-box">
      <input 
        type="text" 
        placeholder="New password" 
        onChange={props.updatePassword}
      />
    </div>
  )
}

export default PasswordInput;