import React from "react";

class PostItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li className="post-item-box">
        <span>{`User: ${this.props.post.user_id}`}</span>
        <span>{this.props.post.body}</span>
      </li>
    )
  }
}

export default PostItem;