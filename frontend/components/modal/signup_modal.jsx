import React from "react";

class SignUpModal extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthdate: new Date(),
      gender: ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updateDate = this.updateDate.bind(this);
  }

  updateState(type){
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  updateDate(type){
    switch(type){
      case "month":
      case "day":
      case "year":
    }
  }

  handleClick(e){
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.closeModal()
    this.props.signup(user)
  }

  render(){
    return <div className="signup-modal">
      <h2>Sign Up</h2>
      <span id="close-btn" onClick={this.props.closeModal}>&#x2715;</span>
      <div>It's quick and easy</div>
      <div className="divider"></div>
      <form>
        <div>
          <input type="text" placeholder="First name" onChange={this.updateState("first_name")}/>
          <input type="text" placeholder="Last name" onChange={this.updateState("last_name")}/> 
        </div>
        <div>
          <input type="text" placeholder="Email" onChange={this.updateState("email")}/>
        </div>
        <div>
          <input type="password" placeholder="New password" onChange={this.updateState("password")}/>
        </div>
        <div className="select-label">Birthday</div>
        <div>
          <select onChange={this.updateDate('month')} value={this.state.birthdate.getMonth}>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
          <select onChange={this.updateDate('day')} value={this.state.birthdate.getDate}>
            
          </select>
          <select onChange={this.updateDate('year')} value={this.state.birthdate.getFullYear}>

          </select>
        </div>
        <div className="select-label">Gender</div>
        <div>
          <input type="radio" value="Female" checked={this.state.gender === "Female"} onChange={this.updateState("gender")}/>
          <input type="radio" value="Male" checked={this.state.gender === "Male"} onChange={this.updateState("gender")}/>
          <input type="radio" value="Custom" checked={this.state.gender === "Custom"} onChange={this.updateState("gender")}/>
        </div>
        <input type="submit" onClick={this.handleClick} value="Sign Up"/>
      </form>
    </div>
  }
}

export default SignUpModal