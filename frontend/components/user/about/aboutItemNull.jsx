import React from 'react';


function AboutItemNull({formType}){
  let itemContents;
  let itemIcon;

  switch (formType){
    case 'work':
      itemContents = 'No workplaces to show';
    case 'hometown':
      itemContents = 'No places to show';
    case 'school':
      itemContents = 'No schools to show';
    case 'relationship':
      itemContents = 'No relationship info to show';
    default:
      break;
  }
  
  return (
    <div className='empty-item'>
      <img className={itemIcon}/>
      <span>{itemContents}</span>
    </div>
  )

}

export default AboutItemNull;