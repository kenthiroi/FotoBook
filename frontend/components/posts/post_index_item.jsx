import React from "react";

class PostItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="post-item-box">
        <div className="posts-username">{`${this.props.post.first_name} ${this.props.post.last_name}`}</div>
        <div className="posts-body">{this.props.post.body}</div>
        <div className="posts-photo"></div>
      </div>
    )
  }
}

export default PostItem;