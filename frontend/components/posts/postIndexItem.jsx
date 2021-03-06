import React from "react";
import { connect } from 'react-redux';
import LikeAndCommentButton from "../like/likeAndCommentButton";
import CommentIndex from "../comment/commentIndex";
import CommentField from "../comment/commentField";
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
  openEditModal: (post) => dispatch(openModal({
    type: 'editPost', 
    post
  })),
  openViewModal: (post) => dispatch(openModal({
    type: 'showPhoto',
    post
  }))

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
          <img onClick={() => this.props.openViewModal(this.props.post)} src={this.props.post.photoUrl}/>
        </div>;
    }
    
    return(
      <div className="post-item-box">
        {this.props.post.user_id === this.props.user_id ?
          <button className="posts-option" onClick={this.state.editDropdown ? this.closeDropdown : this.openDropdown} onBlur={this.closeDropdown}>&hellip;</button>
          :
          <></>
        }   
        {this.state.editDropdown ? 
        <div className="edit-container">
          <button onMouseDown={() => this.props.openEditModal(this.props.post)}>Edit Post</button>
          <button onMouseDown={() => this.props.deletePost(this.props.post.id)}>Delete Post</button>
        </div> : <></>}
        {/* <div className="posts-username">{`${this.props.post.first_name} ${this.props.post.last_name}`}</div> */}
        <UserInfoHover userId={this.props.post.user_id} post={this.props.post}/>
        <div className="posts-body">{this.props.post.body}</div>
        {photoContainer}
        <LikeAndCommentButton likes={this.props.post.likes} post_id={this.props.post.id}/>
        <CommentIndex comments={this.props.post.comments}/>
        <CommentField post_id={this.props.post.id}/>
      </div>)
  } 
}

export default connect(mSTP, mDTP)(PostItem)