import React from 'react';


function AboutItemNull({formType}){
  let itemContents;
  let itemIcon;

  switch (formType){
    case 'work':
      itemContents = 'No workplaces to show';
      break;
    case 'hometown':
      itemContents = 'No places to show';
      break;
    case 'school':
      itemContents = 'No schools to show';
      break;
    case 'relationship':
      itemContents = 'No relationship info to show';
  }
  
  return (
    <div className='empty-item'>
      <img className={itemIcon}/>
      <span>{itemContents}</span>
    </div>
  )

}

export default AboutItemNull;