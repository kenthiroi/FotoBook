import React from 'react';
import { IoLocationSharp, IoSchoolSharp } from 'react-icons/io5';
import { FaBriefcase } from 'react-icons/fa';
import { RiHeartsFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';

function AboutItemLabel({aboutData, formType}){
  let itemContents;
  let itemIcon;

  switch (formType){
    case 'work':
      itemIcon = <FaBriefcase/>;
      break;
    case 'hometown':
      itemIcon = <IoLocationSharp/>;
      break;
    case 'school':
      itemIcon = <IoSchoolSharp/>;
      break;
    case 'relationship':
      itemIcon = <RiHeartsFill/>;
      break;
    case 'email':
      itemIcon = <MdEmail/>;
  }
  
  return (
    <div className='about-item'>
      {itemIcon}
      <span>{aboutData}</span>
    </div>
  )

}

export default AboutItemLabel;