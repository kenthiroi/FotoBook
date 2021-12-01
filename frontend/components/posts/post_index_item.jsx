import React from "react";

class PostItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="post-item-box">
        <div className="posts-username">{`User: ${this.props.post.user_id}`}</div>
        <div className="posts-body">{this.props.post.body}</div>
      </div>
    )
  }
}

export default PostItem;