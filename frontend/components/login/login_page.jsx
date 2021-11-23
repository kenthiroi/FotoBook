import React from "react";

class LoginPage extends React.Component {

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    
  }

  render(){
    return <div className="login-container">
      <div className="login-left">
        <div className="login-logo">fotobook</div>
        <div className="logo-desc">Connect with friends and the world around you on Fotobook.</div>
      </div>
      <div className="login-right">
        <form onSubmit={this.handleClick}>
          <div>
            <input type="text" placeholder="Email"/>
          </div>
          <div>
            <input type="password" placeholder="Password"/>
          </div>
          <div>
            <input id="login-button" type="submit" onClick={this.handleClick} value="Log In"/>
          </div>
        </form>
        <div id="demo-login">Demo Login</div>
        <div className="divider"></div>
        <div id="sign-up-button" onClick={this.props.openModal}>Create new account</div>
      </div>
    </div>
  }
}

export default LoginPage