import React from 'react';
import AboutItemContainer from '../profileAboutItemContainer';


function AboutCareer({userId}){
  
  return (
    <div>
      <AboutItemContainer formType='work' userId={userId}/>
      <AboutItemContainer formType='school' userId={userId}/>
    </div>
  )

}

export default AboutCareer;