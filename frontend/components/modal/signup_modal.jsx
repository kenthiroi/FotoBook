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
        return (e) => {
          this.state.birthdate.setMonth(e.target.value)
        }
      case "day":
        return (e) => {
          this.state.birthdate.setDate(e.target.value)
        }
      case "year":
        return (e) => {
          this.state.birthdate.setYear(e.target.value)
        }
    }
  }

  handleClick(e){
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.signup(user)
    this.props.closeModal()
  }

  render(){

    const todaysDate = new Date();
    const yearValues = Array.from(new Array(117), (x, i) => i + 1905).reverse();
    const yearOptions = yearValues.map(year=>{
      return <option value={year} key={year}>{year}</option>
    }); 
    const dayValues = Array.from(new Array(31), (x, i) => i + 1);
    const dayOptions = dayValues.map(day=>{
        return <option value={day} key={day}>{day}</option>
    });

    return <div className="signup-modal">
      <span id="close-btn" onClick={this.props.closeModal}>&#x2715;</span>
      <div className="form-top">
        <h1>Sign Up</h1>
        <div>It's quick and easy.</div>
      </div>
      <form className="form-bottom">
        <div id="name-box">
          <input type="text" placeholder="First name" onChange={this.updateState("first_name")}/>
          <input type="text" placeholder="Last name" onChange={this.updateState("last_name")}/> 
        </div>
        <div id="email-box">
          <input type="text" placeholder="Email" onChange={this.updateState("email")}/>
        </div>
        <div id="password-box">
          <input type="password" placeholder="New password" onChange={this.updateState("password")}/>
        </div>
        <div className="select-label">Birthday</div>
        <div id="birthdate-box">
          <select onChange={this.updateDate('month')} defaultValue={`${todaysDate.getMonth()}`}>
          {/* <select onChange={this.updateDate('month')} value={`10`}> */}

            <option value="0" key="0">Jan</option>
            <option value="1" key="1">Feb</option>
            <option value="2" key="2">Mar</option>
            <option value="3" key="3">Apr</option>
            <option value="4" key="4">May</option>
            <option value="5" key="5">Jun</option>
            <option value="6" key="6">Jul</option>
            <option value="7" key="7">Aug</option>
            <option value="8" key="8">Sep</option>
            <option value="9" key="9">Oct</option>
            <option value="10" key="10">Nov</option>
            <option value="11" key="11">Dec</option>
          </select>
          <select onChange={this.updateDate('day')} defaultValue={`${todaysDate.getDate()}`}>
            {dayOptions}
          </select>
          <select onChange={this.updateDate('year')} defaultValue={`${todaysDate.getYear()}`}>
            {yearOptions}
          </select>
        </div>
        <div className="select-label">Gender</div>
        <div id="gender-box">
          <div>
            <label>Female
              <input type="radio" value="Female" checked={this.state.gender === "Female"} onChange={this.updateState("gender")}/>
            </label>
          </div>
          <div> 
            <label>Male
              <input type="radio" value="Male" checked={this.state.gender === "Male"} onChange={this.updateState("gender")}/>
            </label>
          </div>
          <div>
            <label>Custom
              <input type="radio" value="Custom" checked={this.state.gender === "Custom"} onChange={this.updateState("gender")}/>
            </label>
          </div>
        </div>
        <input id="submit-btn" type="submit" onClick={this.handleClick} value="Sign Up"/>
      </form>
    </div>
  }
}

export default SignUpModal