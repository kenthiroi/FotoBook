import React from 'react';
import AboutItemContainer from '../profileAboutItemContainer';


function AboutContacts({userId}){
  
  return (
    <div>
      <AboutItemContainer formType='email' userId={userId}/>
    </div>
  )

}

export default AboutContacts;