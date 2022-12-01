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

function FriendItemDropdown({friendNodeId, deleteFriend}){
  const [dropdownState, setDropdownState] = useState(false);

  const openDropdown = () => {
    setDropdownState(true);
  }

  const closeDropdown = () => {
    setDropdownState(false);
  }

  const removeFriend = () => {
    deleteFriend(friendNodeId).then(() => {
      setDropdownState(false);
    })
  }

  return(
    <>
      <button 
        className="friend-item-option" 
        onClick={dropdownState ? closeDropdown : openDropdown} 
        onBlur={closeDropdown}>
        <BsThreeDots/>
      </button>
      {dropdownState ? 
        <div className="friend-edit-container">
          <button onMouseDown={removeFriend}><IoTrashOutline/>Delete Friend</button>
        </div> : <></>}
    </>
  )
}

export default connect(mSTP, mDTP)(FriendItemDropdown);