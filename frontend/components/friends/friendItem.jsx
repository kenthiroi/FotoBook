import React from 'react';
import NameHover from '../posts/nameHover';

function FriendItem({user}){
  
  let photoUrl;
  let userDescription;

  if (!!user.photoUrl){
    photoUrl = user.photoUrl;
  } else {
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


  return(
    <div className='friend-item'>
      <img src={user.photoUrl}/>
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