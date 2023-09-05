import React from "react";
import PostIndexContainer from "../posts/postIndexContainer";

function Newsfeed(){
  return <div className="newsfeed-container">
    <div className="create-post-container">
      <div className="create-post-profile-pic">
        <img src={this.props.userImg}/>
      </div>
      <div onClick={this.props.openModal}>Whats on your mind, {this.props.userInfo.first_name}?</div>
    </div>
      <PostIndexContainer/>
    </div>
}

export default Newsfeed