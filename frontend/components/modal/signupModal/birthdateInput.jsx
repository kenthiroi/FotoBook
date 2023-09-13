import React, { useState } from "react";
import ErrorBubble from "./errorBubble";

function BirthdateInput (props){
  const [isInvalidBirthdate, setIsInvalidBirthdate] = useState(false);

  const verifyAge = () => {
    const currentDate = new Date();
    const userBirthDate = props.birthdate;

    const ageInMilliseconds = currentDate - userBirthDate;
  
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
  
    const age = Math.floor(ageInYears);
    setIsInvalidBirthdate(age < 13);
  }

  const todaysDate = new Date();
  const yearValues = Array.from(new Array(117), (x, i) => i + 1905).reverse();
  const yearOptions = yearValues.map(year=>{
    return <option value={year} key={year}>{year}</option>
  }); 
  const dayValues = Array.from(new Array(31), (x, i) => i + 1);
  const dayOptions = dayValues.map(day=>{
      return <option value={day} key={day}>{day}</option>
  });

  return (
    <div id="birthdate-box">
      {props.isFirstNameInvalid && <ErrorBubble error="It looks like you entered the wrong info. Please be sure to use your real birthday."/>}
      <select 
        onChange={props.updateDate('month')} 
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
        onChange={props.updateDate('day')} 
        defaultValue={`${todaysDate.getDate()}`}
      >
        {dayOptions}
      </select>
      <select 
        onChange={props.updateDate('year')} 
        defaultValue={`${todaysDate.getYear()}`}
      >
        {yearOptions}
      </select>
    </div>
  )
}

export default BirthdateInput;