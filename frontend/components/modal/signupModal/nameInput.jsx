import React from "react";

function NameInput (props){
  return (
    <div id="name-box">
      <input 
        type="text" 
        placeholder="First name" 
        onChange={props.updateFirstName}
      />
      <input 
        type="text" 
        placeholder="Last name" 
        onChange={props.updateLastName}
      /> 
    </div>
  )
}

export default NameInput;