import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function SearchResultBox(props) {
  const handleClick = (e) =>{
    console.log('fire');
    e.preventDefault();
    if (location.pathname !== `/profile/${props.user.id}`){
      props.onBlurFunc();
      props.history.push(`/profile/${props.user.id}`);
    }
  }

  return (
    <div className='search-result-box' onMouseDown={handleClick}>
      <img src={props.userImg}/>
      <div>{props.user.first_name} {props.user.last_name}</div>
    </div>
  );
}

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
    userInfo,
  }
}

const mDTP = (dispatch) => {
  return {

  }
}

export default connect(mSTP, mDTP)(withRouter(SearchResultBox));