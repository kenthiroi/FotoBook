import React from 'react';
import { openModal } from "../../actions/modal_actions"
import { connect } from 'react-redux';

const mDTP = dispatch => ({
  openModal: (userId) => dispatch(openModal('profilePic'))
})

function UserProfilePicture(props){
  if (!props.userImg) {
    return (
      <div id='profile-picture'>
        <img src="https://i.imgur.com/7x6fTDK.png"/>
      </div>
    )
  } else {
    return (
      <div id='profile-picture' onClick={this.props.openModal}>
        {/* <img src=`${props.userImg}`/> */}
      </div>
    )
  }
}

export default connect(null, mDTP)(UserProfilePicture);