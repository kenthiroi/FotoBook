import React from "react";

class SignUpModal extends React.Component{
  render(){
    return <div className="signup-modal">
      <form>
        <input type="text" placeholder="First name"/>
        <input type="text" placeholder="Last name"/>
        <input type="text" placeholder="Email"/>
        <input type="password" placeholder="New password"/>
        <input type="date"/>
        <input type="radio" value="Male"/>
        <input type="radio" value="Female"/>
        <input type="radio" value="Custom"/>
      </form>
    </div>
  }
}

export default SignUpModal