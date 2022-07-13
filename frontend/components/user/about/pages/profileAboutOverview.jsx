import React from 'react';
import AboutItemContainer from '../profileAboutItemContainer';


function AboutOverview({userId}){
  
  return (
    <div>
      <AboutItemContainer formType='school' userId={userId}/>
      <AboutItemContainer formType='hometown' userId={userId}/>
      <AboutItemContainer formType='work' userId={userId}/>
      <AboutItemContainer formType='relationship' userId={userId}/>
    </div>
  )

}

export default AboutOverview;