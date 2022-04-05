import React from "react";
import { connect } from 'react-redux';
import LikeAndCommentButton from "../like/like_button";
import { openModal } from '../../actions/modal_actions';
import { deletePost } from "../../actions/post_actions";

const mapDispatchToProps = dispatch => ({
  fetchAllPosts: () => dispatch(getAllPosts()),
  deletePost: (postId) => dispatch(deletePost(postId)),
  openModal: (post) => dispatch(openModal({
    type: 'editPost', 
    post
  }
  )),
})

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
    if (!this.state.editDropdown) {
      this.setState({
        editDropdown: true,
      });
      console.log("open");
    } else {
      this.setState({
        editDropdown: false,
      });
      console.log("close");
    }
  };
  
  closeDropdown(){
    console.log("close");
    this.setState({editDropdown: false});
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
          <div onClick={() => this.props.openModal(this.props.post)}>Edit Post</div>
          <div onClick={() => this.props.deletePost(this.props.post.id)}>Delete Post</div>
        </div> : <></>}
        <div className="posts-username">{`${this.props.post.first_name} ${this.props.post.last_name}`}</div>
        <div className="posts-body">{this.props.post.body}</div>
        {photoContainer}
        <LikeAndCommentButton likes={this.props.post.likes} post_id={this.props.post.id}></LikeAndCommentButton>
      </div>)
  } 
}

export default connect(null, mapDispatchToProps)(PostItem)