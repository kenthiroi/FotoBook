import React from "react";
import LikeButton from "../like/like_button";

class PostItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editDropdown: false,
    }

    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  openDropdown(){
    this.setState({editDropdown: true})
  };

  closeDropdown(){
    this.setState({editDropdown: false})
  }

  

  render(){
    // debugger
    let photoContainer;
    if (this.props.post.photoUrl) {
      photoContainer = <div className="posts-photo">
          <img src={this.props.post.photoUrl}/>
        </div>;
    }

    return(
      <div className="post-item-box">
        <div className="posts-option" onClick={this.openDropdown} onBlur={this.closeDropdown}>&hellip;</div>
        {this.state.editDropdown ? 
        <div className="edit-container">
          <div>Edit Post</div>
        </div> : <></>}
        <div className="posts-username">{`${this.props.post.first_name} ${this.props.post.last_name}`}</div>
        <div className="posts-body">{this.props.post.body}</div>
        {photoContainer}
        <LikeButton likes={this.props.post.likes}></LikeButton>
      </div>

    )
  }
}

export default PostItem;