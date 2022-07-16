import React from 'react';
import { IoLocationSharp, IoSchoolSharp } from 'react-icons/io5';
import { FaBriefcase } from 'react-icons/fa';
import { RiHeartsFill } from 'react-icons/ri';

function AboutItemNull({formType}){
  let itemIcon;
  let itemContents;

  switch (formType){
    case 'work':
      itemIcon = <FaBriefcase/>;
      itemContents = 'No workplaces to show';
      break;
    case 'hometown':
      itemIcon = <IoLocationSharp/>;
      itemContents = 'No places to show';
      break;
    case 'school':
      itemIcon = <IoSchoolSharp/>;
      itemContents = 'No schools to show';
      break;
    case 'relationship':
      itemIcon = <RiHeartsFill/>;
      itemContents = 'No relationship info to show';
  }
  
  return (
    <div className='empty-item'>
      {itemIcon}
      <span>{itemContents}</span>
    </div>
  )

}

export default AboutItemNull;