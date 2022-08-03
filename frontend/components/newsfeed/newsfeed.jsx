import React from "react";
import PostIndexContainer from "../posts/postIndexContainer";

class Newsfeed extends React.Component {
  render(){
    return <div className="newsfeed-container">
      <div className="create-post-container">
        <img src={this.props.userImg}/>
        <div onClick={this.props.openModal}>Whats on your mind, {this.props.userInfo.first_name}?</div>
      </div>
        <PostIndexContainer/>
      </div>
  }
}

export default Newsfeed