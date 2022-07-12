import React from 'react';
import AboutItemContainer from '../profileAboutItemContainer';


function AboutCareer({userId}){
  
  return (
    <div>
      <AboutItemContainer formType='work' userId={userId}/>
    </div>
  )

}

export default AboutCareer;