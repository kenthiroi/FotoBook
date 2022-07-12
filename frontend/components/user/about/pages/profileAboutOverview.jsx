import React from 'react';
import AboutItem from '../profileAboutItem';


function AboutOverview({userId}){

  console.log(userId);
  
  return (
    <div>
      <AboutItem formType='work' userId={userId}/>
      <AboutItem formType='hometown' userId={userId}/>
      <AboutItem formType='work' userId={userId}/>
      <AboutItem formType='relationship' userId={userId}/>
    </div>
  )

}

export default AboutOverview;