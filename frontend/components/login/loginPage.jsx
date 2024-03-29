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

    //Redirect user w/ a session to newsfeed
    if (this.props.session.currentUser) {
      return <Redirect to="/newsfeed"></Redirect>;
    }

    //Handle errors
    console.log(this.props.errors);

    const errorArrayMsg =
      !!this.props.errors.login
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
            <input 
              type="text" 
              className={errorArrayMsg.length ? 'error-input' : ''}
              placeholder="Email" 
              onChange={this.updateState("email")} 
              value={this.state.email}
            />
          </div>
          <div>
            <input 
              type="password"
              className={errorArrayMsg.length ? 'error-input' : ''}
              placeholder="Password" 
              onChange={this.updateState("password")} 
              value={this.state.password}
            />
          </div>
          <div className="error-text">
            {errorArrayMsg}
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