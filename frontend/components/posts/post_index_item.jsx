import React from "react";
import { connect } from 'react-redux';
import LikeAndCommentButton from "../like/like_and_comment_button";
import CommentIndex from "../comment/comment_index";
import CommentField from "../comment/comment_field";
import { openModal } from '../../actions/modal_actions';
import { deletePost } from "../../actions/post_actions";
import UserInfoHover from "../user/userInfoHover";

const mSTP = state => {
  return {
    user_id: state.session.id,
  }
}

const mDTP = dispatch => ({
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

  // componentDidUpdate(){
  //   console.log("did update", this.props.post);
  // }
  
  openDropdown(){
    if (!this.state.editDropdown) {
      this.setState({
        editDropdown: true,
      });
    } else {
      this.setState({
        editDropdown: false,
      });
    }
  };
  
  closeDropdown(){
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
        {this.props.post.user_id === this.props.user_id ?
          <div className="posts-option" onClick={this.openDropdown} onBlur={this.closeDropdown}>&hellip;</div>
          :
          <></>
        }   
        {this.state.editDropdown ? 
        <div className="edit-container">
          <div onClick={() => this.props.openModal(this.props.post)}>Edit Post</div>
          <div onClick={() => this.props.deletePost(this.props.post.id)}>Delete Post</div>
        </div> : <></>}
        {/* <div className="posts-username">{`${this.props.post.first_name} ${this.props.post.last_name}`}</div> */}
        <UserInfoHover userId={this.props.post.user_id}/>
        <div className="posts-body">{this.props.post.body}</div>
        {photoContainer}
        <LikeAndCommentButton likes={this.props.post.likes} post_id={this.props.post.id}/>
        <CommentIndex comments={this.props.post.comments}/>
        <CommentField post_id={this.props.post.id}/>
      </div>)
  } 
}

export default connect(mSTP, mDTP)(PostItem)