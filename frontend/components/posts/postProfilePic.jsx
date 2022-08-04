import React, { useState } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function PostProfilePicture({user}){
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <img src={user.photoUrl}
        onMouseEnter={() => setShowInfo(true)} 
        onMouseLeave={() => setShowInfo(false)}
      />
      {showInfo ? <div className="user-hover-container">
        <div className="user-hover-name">{user.first_name} {user.last_name}</div>
        <div className="user-hover-info">
          {/* <div className="user-hometown">{user.hometown}</div> */}
          <div className="user-mutual-friends">39</div>
        </div>
      </div> : <></>}
    </div>
  )
}

PostProfilePicture.propTypes = {
  user: PropTypes.object.isRequired,
}

export default PostProfilePicture;