import React from "react";
import PostIndexContainer from "../posts/postIndexContainer";

function Newsfeed(props){
  return <div className="newsfeed-container">
    <div className="create-post-container">
      <div className="create-post-profile-pic">
        <img src={props.userImg}/>
      </div>
      <div onClick={props.openModal}>Whats on your mind, {props.userInfo.first_name}?</div>
    </div>
      <PostIndexContainer/>
    </div>
}

export default Newsfeed