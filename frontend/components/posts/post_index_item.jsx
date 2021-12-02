import React from "react";

class PostItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    // debugger
    return(
      <div className="post-item-box">
        <div className="posts-username">{`${this.props.post.first_name} ${this.props.post.last_name}`}</div>
        <div className="posts-body">{this.props.post.body}</div>
        <div className="posts-photo">
          <img src={this.props.post.photoUrl}/>
        </div>
      </div>
    )
  }
}

export default PostItem;