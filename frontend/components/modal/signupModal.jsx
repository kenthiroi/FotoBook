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
      first_name_error: false,
      last_name: "",
      last_name_error: false,
      email: "",
      email_error: false,
      email_verification: "",
      email_verification_error: false,
      password: "",
      password_error: false,
      birthdate: new Date(),
      birthdate_error: false,
      gender: "",
      gender_error: false,
      custom_gender: "",
      pronouns: "",
    }

    this.clearError = this.clearError.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.firstNameCheck = this.firstNameCheck.bind(this);
    this.lastNameCheck = this.lastNameCheck.bind(this);
    this.alphabetCheck = this.alphabetCheck.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.verifyAge = this.verifyAge.bind(this);
    this.passwordCheck = this.passwordCheck.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  clearError(type){
    let errName = type + "_error";
    this.setState({ [errName]: false});
  }

  updateState(type){
    return (e) => {
      this.setState({ [type]: e.target.value });
      this.clearError(type);
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

  firstNameCheck(){
    let firstNameError = !this.alphabetCheck(this.state.first_name)
    this.setState({first_name_error: firstNameError});
    return firstNameError;
  }

  lastNameCheck(){
    let lastNameError = !this.alphabetCheck(this.state.last_name)
    this.setState({last_name_error: lastNameError});
    return lastNameError;
  }
  
  alphabetCheck(name){
    //Checks  to see if there are only letters in the string
    const alphabetPattern = /^[A-Za-z]+$/;
    return alphabetPattern.test(name);
  }

  validateEmail(){
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
    let emailError = !emailPattern.test(this.state.email);
    this.setState({email_error: emailError});
    return emailError;
  }

  compareEmails(){
    let emailMatches = (emailVerification === email);
    this.setState({email_verification_error: emailMatches});
    return emailMatches;
  }

  verifyAge(){
    const currentDate = new Date();
    const userBirthDate = this.state.birthdate;

    const ageInMilliseconds = currentDate - userBirthDate;
  
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
  
    const ageCheck = Math.floor(ageInYears) <= 13; 
    this.setState({birthdate_error: ageCheck});
    return ageCheck;
  }

  passwordCheck(){
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/;
    let passwordCheck = (!passwordPattern.test(this.state.password) || this.state.password.length < 6)
    this.setState({password_error: passwordCheck});
  }

  genderCheck(){
    let genderCheck = this.state.gender === "" || (this.state.gender === "Custom" && this.state.pronouns === "");
    this.setState({gender_error: genderCheck});
    return genderCheck;
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

    // Final check
    let firstNameCheck = this.firstNameCheck();
    let lastNameCheck = this.lastNameCheck();
    let emailCheck = this.validateEmail();
    let ageCheck = this.verifyAge();
    let passwordCheck = this.passwordCheck();
    let genderCheck = this.genderCheck();

    let errorArr = [
      firstNameCheck,
      lastNameCheck,
      emailCheck,
      ageCheck,
      passwordCheck,
      genderCheck
    ]

    if(errorArr.every(e => e === false)){
      const user = Object.assign({}, this.state);
      this.props.signup(user);
      this.props.closeModal();
    }
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

    return <div className="modal-child">
      <div className="signup-modal">
        <span id="close-btn" onClick={this.props.closeModal}>&#x2715;</span>
        <div className="form-top">
          <h1>Sign Up</h1>
          <div>It's quick and easy.</div>
        </div>
        <form className="form-bottom">
          {/* <NameInput 
            updateFirstName={this.updateState("first_name")} 
            updateLastName={this.updateState("last_name")} 
          /> */}
          <div id="name-box">
            <div className={this.state.first_name_error ? 'input-error' : ''}>  
              <input 
                type="text"
                placeholder="First name"
                onChange={this.updateState("first_name")}
                onBlur={this.firstNameCheck}
              />
              {this.state.first_name_error && <ErrorBubble error="What's your name?" showError={this.state.first_name_error}/>}
            </div>
            <div className={this.state.last_name_error ? 'input-error' : ''}>
              <input 
                type="text"
                placeholder="Last name" 
                onChange={this.updateState("last_name")}
                onBlur={this.lastNameCheck}
              />
              {this.state.last_name_error && <ErrorBubble error="What's your name?" showError={this.state.last_name_error}/>}
            </div>
          </div>
          {/* <EmailInput 
            updateEmail={this.updateState("email")} 
            updateVerifyEmail={this.updateState("verify_email")}
          /> */}
          <div id="email-box">
            <div className={this.state.email_error ? 'input-error' : ''}>
              <input 
                type="text" 
                placeholder="Email"
                onChange={this.updateState("email")}
                onBlur={this.validateEmail}
              />
              {this.state.email_error && <ErrorBubble error="You'll use this to log in." showError={this.state.email_error}/>}
            </div>
            <div className={this.state.email_verification_error ? 'input-error' : ''}>
            {!this.state.email_error && this.state.email.substring(0, this.state.email.indexOf("@")).length > 0 ?
                <input
                  type="text"
                  placeholder="Re-enter Email"
                  onChange={this.updateState("email_verification")}
                  onBlur={this.compareEmails}
                  /> 
                  : <></>}
            {!this.state.email_verification_error && !this.state.email_error && this.state.email_verification.length !== 0
              ? <ErrorBubble error="Email does not match" showError={this.state.email_verification_error}/> : <></>}
            </div>
          </div>
          {/* <PasswordInput 
            updatePassword={this.updateState("password")}
          /> */}
          <div id="password-box" className={this.state.password_error ? 'input-error' : ''}>
            <input 
              type="password"
              placeholder="New password"
              onChange={this.updateState("password")}
              onBlur={this.passwordCheck}
            />
            {this.state.password_error && <ErrorBubble error="Enter a combination of at least six numbers, letters, and punctuation marks (like ! and &)." showError={this.state.password_error}/>}
          </div>
          <div className="select-label">Birthday</div>
          {/* <BirthdateInput
            updateDate={this.updateDate}
            birthdate={this.state.birthdate}
          /> */}
          <div id="birthdate-box" className={this.state.birthdate_error ? 'input-error' : ''}>
            {this.state.birthdate_error && <ErrorBubble error="It looks like you entered the wrong info. Please be sure to use your real birthday." showError={this.state.birthdate_error}/>}
            <select 
              onChange={this.updateDate('month')} 
              defaultValue={`${todaysDate.getMonth()}`}
              onBlur={this.verifyAge}
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
              className={this.state.birthdate_error ? 'input-error' : ''}
              defaultValue={`${todaysDate.getDate()}`}
              onBlur={this.verifyAge}
            >
              {dayOptions}
            </select>
            <select 
              onChange={this.updateDate('year')} 
              className={this.state.birthdate_error ? 'input-error' : ''}
              defaultValue={`${todaysDate.getYear()}`}
              onBlur={this.verifyAge}
            >
              {yearOptions}
            </select>
          </div>
          <div className="select-label">Gender</div>
          <div id="gender-box">
            <div className={this.state.gender_error ? 'input-error' : ''}>
              <label>Female
                <input 
                  type="radio"
                  value="Female"
                  checked={this.state.gender === "Female"}
                  onChange={this.updateState("gender")}
                />
              </label>
            </div>
            <div> 
              <label>Male
                <input 
                  type="radio"
                  value="Male"
                  checked={this.state.gender === "Male"}
                  onChange={this.updateState("gender")}
                />
              </label>
            </div>
            <div>
              <label>Custom
                <input 
                  type="radio"
                  value="Custom"
                  checked={this.state.gender === "Custom"}
                  onChange={this.updateState("gender")}
                />
              </label>
            </div>
            {this.state.gender_error && <ErrorBubble error={"Please choose a gender."} showError={this.state.gender_error}/>}
          </div>
          {this.state.gender === "Custom" && 
            <div id="pronoun-section">
              <select onChange={this.updateState("custom_gender")} className={this.state.gender_error ? 'input-error' : ''}>
                <option value="" disabled selected>Select your pronoun</option>
                <option value="She">She: "Wish her a happy birthday!"</option>
                <option value="He">He: "Wish him a happy birthday!"</option>
                <option value="They">They: "Wish them a happy birthday!"</option>
              </select>
              <div>Your pronoun is visible to everyone.</div>
              <input 
                id="gender-input" 
                type="text"
                className={this.state.gender_error ? 'input-error' : ''}
                onChange={this.updateState("custom_gender")}
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