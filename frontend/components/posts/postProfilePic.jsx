import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const mSTP = (state, ownProps) => {
  let userInfo = ownProps.user;
  let userImg;
  try {
    userImg = state.entities.posts[userInfo.profile_picture].photoUrl;
  } catch (e) {
    userImg = 'https://i.imgur.com/7x6fTDK.png';
  }
  
  return {
    userImg,
  }
}

function PostProfilePicture({user, userImg}){
  let history = useHistory();
  let location = useLocation();

  const handleClick = (e) =>{
    e.preventDefault();
    if (location.pathname !== `/profile/${user.id}`){
      history.push(`/profile/${user.id}`);
    }
  }

  
  return (
    <div>
      <img src={userImg} onClick={handleClick}/>
    </div>
  )
}

PostProfilePicture.propTypes = {
  user: PropTypes.object.isRequired,
  userImg: PropTypes.string.isRequired,
}

export default connect(mSTP, null)(PostProfilePicture);