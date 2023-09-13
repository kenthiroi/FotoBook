import React from "react";
import NameInput from "./signupModal/nameInput";
import EmailInput from "./signupModal/emailInput";
import PasswordInput from "./signupModal/passwordInput";
import BirthdateInput from "./signupModal/birthdateInput";
import ErrorBubble from "./signupModal/errorBubble";

class SignUpModal extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthdate: new Date(),
      gender: "",
      custom_gender: "",
    }

    this.updateState = this.updateState.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updateState(type){
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  updateDate(type){
    switch(type){
      case "month":
        return (e) => {
          this.state.birthdate.setMonth(e.target.value);
        }
      case "day":
        return (e) => {
          this.state.birthdate.setDate(e.target.value);
        }
      case "year":
        return (e) => {
          this.state.birthdate.setYear(e.target.value);
        }
    }
  }

  handleClick(e){
    e.preventDefault();
    // Check if birthdate and email is valid
    // Check if all of the form is filled
    // Check name if it has numbers or signs

    // this.setState({first_name_error: !this.alphabetCheck(this.state.first_name)});
    // this.setState({last_name_error: !this.alphabetCheck(this.state.last_name)});
    // this.verifyAge();
    // this.setState({gender_error: this.state.gender !== ""});

    if(errorArr.every(e => e === false)){
      const user = Object.assign({}, this.state);
      this.props.signup(user);
      this.props.closeModal();
    }
  }

  render(){
    // const todaysDate = new Date();
    // const yearValues = Array.from(new Array(117), (x, i) => i + 1905).reverse();
    // const yearOptions = yearValues.map(year=>{
    //   return <option value={year} key={year}>{year}</option>
    // }); 
    // const dayValues = Array.from(new Array(31), (x, i) => i + 1);
    // const dayOptions = dayValues.map(day=>{
    //     return <option value={day} key={day}>{day}</option>
    // });

    return <div className="modal-child">
      <div className="signup-modal">
        <span id="close-btn" onClick={this.props.closeModal}>&#x2715;</span>
        <div className="form-top">
          <h1>Sign Up</h1>
          <div>It's quick and easy.</div>
        </div>
        <form className="form-bottom">
          <NameInput 
            updateFirstName={this.updateState("first_name")} 
            updateLastName={this.updateState("last_name")} 
          />
          {/* <div id="name-box">
            <input 
              type="text" 
              placeholder="First name" 
              onChange={this.updateState("first_name")}
            />
            <input 
              type="text" 
              placeholder="Last name" 
              onChange={this.updateState("last_name")}
            /> 
          </div> */}
          <EmailInput 
            updateEmail={this.updateState("email")} 
            updateVerifyEmail={this.updateState("verify_email")}
          />
          {/* <div id="email-box">
            <input 
              type="text" 
              placeholder="Email" 
              onChange={this.updateState("email")}
            />
          </div> */}
          <PasswordInput 
            updatePassword={this.updateState("password")}
          />
          {/* <div id="password-box">
            <input 
              type="password"
              placeholder="New password"
              onChange={this.updateState("password")}
            />
          </div> */}
          <div className="select-label">Birthday</div>
          <BirthdateInput
            updateDate={this.updateDate}
            birthdate={this.state.birthdate}
          />
          {/* <div id="birthdate-box">
            <select 
              onChange={this.updateDate('month')} 
              defaultValue={`${todaysDate.getMonth()}`}
            >
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
            <select 
              onChange={this.updateDate('day')} 
              defaultValue={`${todaysDate.getDate()}`}
            >
              {dayOptions}
            </select>
            <select 
              onChange={this.updateDate('year')} 
              defaultValue={`${todaysDate.getYear()}`}
            >
              {yearOptions}
            </select>
          </div> */}
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
          {this.state.gender_error && <ErrorBubble error={"Please choose a gender."}/>}
          { this.state.gender === "Custom" && 
            <div id="pronoun-section">
              <select onChange={this.updateState("custom_gender")}>
                <option value="" disabled selected>Select your pronoun</option>
                <option value="She">She: "Wish her a happy birthday!"</option>
                <option value="He">He: "Wish him a happy birthday!"</option>
                <option value="They">They: "Wish them a happy birthday!"</option>
              </select>
              <div>Your pronoun is visible to everyone.</div>
              <input 
                id="gender-input" 
                type="text" 
                placeholder="Gender (Optional)"/>
            </div>
          }
          <input id="submit-btn" type="submit" onClick={this.handleClick} value="Sign Up"/>
        </form>
      </div>
    </div>
  }
}

export default SignUpModal