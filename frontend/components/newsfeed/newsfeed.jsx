import React from "react";
import PostIndexContainer from "../posts/post_index_container";

class Newsfeed extends React.Component {
  render(){
    return <div className="newsfeed-box">
        <div onClick={this.props.openModal}>Click Me to post</div>
        <PostIndexContainer/>
      </div>
  }
}

export default Newsfeed