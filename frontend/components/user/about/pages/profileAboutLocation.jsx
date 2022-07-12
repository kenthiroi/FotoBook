import React from 'react';
import AboutItemContainer from '../profileAboutItemContainer';


function AboutLocation({userId}){
  
  return (
    <div>
      <AboutItemContainer formType='hometown' userId={userId}/>
    </div>
  )

}

export default AboutLocation;