import React from 'react';


function AboutItemLabel({aboutData, formType}){
  let itemContents;
  let itemIcon;

  switch (formType){
    case 'work':
      itemIcon = 'No workplaces to show';
      break;
    case 'hometown':
      itemIcon = 'No places to show';
      break;
    case 'school':
      itemIcon = 'No schools to show';
      break;
    case 'relationship':
      itemIcon = 'No relationship info to show';
      break;
    case 'email':
      
  }
  
  return (
    <div className='about-item'>
      <img className={itemIcon}/>
      <span>{aboutData}</span>
    </div>
  )

}

export default AboutItemLabel;