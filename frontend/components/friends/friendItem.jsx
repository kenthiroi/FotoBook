import React from 'react';
import NameHover from '../posts/nameHover';

function FriendItem({user}){
  
  let photoUrl;

  if (!!user.photoUrl){
    photoUrl = user.photoUrl;
  } else {
    photoUrl = 'https://i.imgur.com/7x6fTDK.png';
  }

  return(
    <div className='friend-item'>
      <img src={user.photoUrl}/>
      <NameHover user={user}/>
    </div>
  )
}

FriendItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default FriendItem;