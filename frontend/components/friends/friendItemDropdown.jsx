import React, { useState } from 'react';
import { connect } from "react-redux";
import { BsThreeDots } from 'react-icons/bs';
import { IoTrashOutline } from 'react-icons/io5';
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

  const 

  const removeFriend = () => {
    deleteFriend(friendId).then(() => {
      setOpenDropdown(false);
    })
  }

  return(
    <div className='friend-item-dropdown'>
      <button 
        className="friend-item-option" 
        onClick={openDropdown ? () => setOpenDropdown(false) : () => setOpenDropdown(true)} 
        onBlur={() => setOpenDropdown(false)}>
        <BsThreeDots/>
      </button>
      {openDropdown ? 
        <div className="edit-container">
          <button onMouseDown={() => removeFriend}><IoTrashOutline/>Delete Friend</button>
        </div> : <></>}
    </div>
  )
}

export default connect(mSTP, mDTP)(FriendItemDropdown);