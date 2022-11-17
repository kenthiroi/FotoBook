import React from 'react';
import NameHover from '../posts/nameHover';
import PropTypes from 'prop-types';


function FriendItem({user}){
  
  let photoUrl;
  let userDescription;

  try{
    photoUrl = user.photoUrl;
    if (!photoUrl){
      throw 'undefined photo url'
    }
  } catch {
    photoUrl = 'https://i.imgur.com/7x6fTDK.png';
  }

  switch (user){
    case !!user.work:
      userDescription = user.work;
      break;
    case !!user.school:
      userDescription = user.school;
      break;
    case !!user.hometown:
      userDescription = user.hometown;
      break;
    default:
      userDescription = '';
  }

  console.log(photoUrl);

  return(
    <div className='friend-item'>
      <div className='friend-item-profile-pic'>
        <img src={photoUrl}/>
      </div>
      <NameHover user={user}/>
      <div>
        {userDescription}
      </div>
    </div>
  )
}

FriendItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default FriendItem;