import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
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
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <img src={userImg}
        onMouseEnter={() => setShowInfo(true)} 
        onMouseLeave={() => setShowInfo(false)}
      />
      {showInfo ? <div className="user-hover-container">
        <div className="user-hover-name">{user.first_name} {user.last_name}</div>
        <div className="user-hover-info">
          {/* <div className="user-hometown">{user.hometown}</div> */}
          <div className="user-mutual-friends"></div>
        </div>
      </div> : <></>}
    </div>
  )
}

PostProfilePicture.propTypes = {
  user: PropTypes.object.isRequired,
  userImg: PropTypes.string.isRequired,
}

export default connect(mSTP, null)(PostProfilePicture);