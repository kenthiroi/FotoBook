import React from "react";
import { connect } from 'react-redux';
import LikeAndCommentButton from "../like/likeAndCommentButton";
import CommentIndex from "../comment/commentIndex";
import CommentField from "../comment/commentField";
import { openModal } from '../../actions/modal_actions';
import { deletePost } from "../../actions/post_actions";
import { fetchUser } from '../../actions/user_actions';
import { BsThreeDots } from 'react-icons/bs';
import { MdOutlineEdit } from 'react-icons/md';
import { IoTrashOutline } from 'react-icons/io';
import NameHover from "./nameHover";
import PostProfilePicture from "./postProfilePic";

const mSTP = (state, ownProps) => {
  let userInfo = state.entities.user[ownProps.post.user_id];
  let userImg;

  try {
    userImg = state.entities.posts[userInfo.profile_picture].photoUrl;
  } catch (e) {
    userImg = 'https://i.imgur.com/7x6fTDK.png';
  }

  return {
    user_id: state.session.id,
    userInfo,
    userImg,
  }
}

const mDTP = dispatch => ({
  fetchUserInfo: (userId) => dispatch(fetchUser(userId)),
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
    let sideMessage;

    if (this.props.post.photoUrl) {
      photoContainer = <div className="posts-photo">
          <img onClick={() => this.props.openViewModal(this.props.post)} src={this.props.post.photoUrl}/>
        </div>;
    }

    if (!!this.props.post){
      if (this.props.post.profile_pic_update) {
        sideMessage = <span className='light-text-description'> updated their profile picture.</span>
      } else if (this.props.post.profile_banner_update){
        sideMessage = <span className='light-text-description'> updated their cover photo.</span>
      }
    }

    if (!!this.props.userInfo){
      return(
        <div className="post-item-box">
          {this.state.editDropdown ? 
          <div className="edit-container">
            <button onMouseDown={() => this.props.openEditModal(this.props.post)}><MdOutlineEdit/>Edit Post</button>
            <button onMouseDown={() => this.props.deletePost(this.props.post.id)}><IoTrashOutline/>Delete Post</button>
          </div> : <></>}
          {/* <div className="posts-username">{`${this.props.post.first_name} ${this.props.post.last_name}`}</div> */}
          <div className="user-and-post-container">
            {this.props.post.user_id === this.props.user_id ?
              <button className="posts-option" onClick={this.state.editDropdown ? this.closeDropdown : this.openDropdown} onBlur={this.closeDropdown}><BsThreeDots/></button>
              :
              <></>
            }   
              {/* <UserInfoHover userId={this.props.userInfo.id} post={this.props.post}/> */}
              <div>
                <PostProfilePicture user={this.props.userInfo}/>
                <NameHover user={this.props.userInfo}/>
                {sideMessage}
              </div>
            <div className="post-body">{this.props.post.body}</div>
          </div>
          {photoContainer}
          <div className="likes-and-comment-container">
            <LikeAndCommentButton likes={this.props.post.likes} post_id={this.props.post.id}/>
            <CommentIndex comments={this.props.post.comments}/>
            <CommentField post_id={this.props.post.id}/>
          </div>
        </div>)
    } else {
      console.log('testing')
      return <div></div>
    }
  } 
}

export default connect(mSTP, mDTP)(PostItem)