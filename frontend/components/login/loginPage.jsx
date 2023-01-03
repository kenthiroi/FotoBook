import React from "react";

class LoginPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {email: "", password: ""};
    this.handleClick = this.handleClick.bind(this);
    this.updateState = this.updateState.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  updateState(type){
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  demoLogin(){
    const user = {
      email: "kentokento@kento.com",
      password: "ajtedjsgea"
    }
    this.props.login(user);
  }

  render(){
    if (this.props.session.currentUser) {
      return <Redirect to="/newsfeed"></Redirect>;
    }
    //handle errors

    const errorArr =
      this.props.errors.login.length && !this.props.modal
        ? this.props.errors.login.map((error) => {
            return <li>{error}</li>;
          })
        : [];

    return <div className="login-container">
      <div className="login-left">
        <div className="login-logo">fotobook</div>
        <div className="logo-desc">Connect with friends and the world around you on Fotobook.</div>
      </div>
      <div className="login-right">
        <form>
          <div>
            <input type="text" placeholder="Email" onChange={this.updateState("email")} value={this.state.email}/>
          </div>
          <div>
            <input type="password" placeholder="Password" onChange={this.updateState("password")} value={this.state.password}/>
          </div>
          <div>
            <input id="login-button" type="submit" onClick={this.handleClick} value="Log In"/>
          </div>
        </form>
        <div id="demo-login" onClick={this.demoLogin}>Demo Login</div>
        <div className="divider"></div>
        <div id="sign-up-button" onClick={this.props.openModal}>Create new account</div>
      </div>
    </div>
  }
}

export default LoginPage