import React, { useState } from 'react';
import { connect } from "react-redux";
import { deleteFriend } from '../../actions/friend_actions';

const mSTP = (state) => {
  return {
    sessionId: state.session.id,
  }
}

const mDTP = (dispatch) => {
  return {
    deleteFriend: (friendId) => dispatch(deleteFriend(friendId)),
  }
}

function FriendItemDropdown({friendId, deleteFriend}){
  const [openDropdown, setOpenDropdown] = useState(false);

  const removeFriend = () => {
    deleteFriend(friendId).then(() => {
      setOpenDropdown(false);
    })
  }

  

  return(
    <div className='friend-item-dropdown'>
    </div>
  )
}

export default connect(mSTP, mDTP)(FriendItemDropdown);