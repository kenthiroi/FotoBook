import React from 'react';
import { connect } from 'react-redux';
import { deleteComment, editComment } from '../../actions/comment_actions';
import { getPost } from "../../actions/post_actions";
import CommentField from './commentField';
import { fetchUser } from '../../actions/user_actions';
import { BsThreeDots } from 'react-icons/bs';
import { MdOutlineEdit } from 'react-icons/md';
import { IoTrashOutline } from 'react-icons/io5';
import NameHover from '../posts/nameHover';
import PostProfilePicture from '../posts/postProfilePic';

const mSTP = (state, ownProps) => {
  let userInfo = state.entities.user[ownProps.comment.author_id];
  let userImg;

  try {
    userImg = state.entities.posts[userInfo.profile_picture].photoUrl;
  } catch (e) {
    userImg = 'https://i.imgur.com/7x6fTDK.png';
  }

  return {
    sessionId: state.session.id,
    user: userInfo,
    userImg
  }
}

const mDTP = dispatch => {
  return {
    fetchPost: (postId) => dispatch(getPost(postId)),
    editComment: (comment) => dispatch(editComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    fetchUserInfo: (userId) => dispatch(fetchUser(userId)),
  }
}

class CommentItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      editDropdown: false,
      editing: false,
      displayEdit: false,
    }

    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleHoverIn = this.handleHoverIn.bind(this);
    this.handleHoverOut = this.handleHoverOut.bind(this);
  }
    
  openDropdown(e){
    e.preventDefault();
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

  toggleEdit(){
    if (!this.state.editing) {
      this.setState({
        editing: true,
      });
    } else {
      this.setState({
        editing: false,
      });
    }
  }

  handleKeyDown(e){
    if (e.key === 'Enter' || e.key === 'Escape') {
      this.setState({editing: false, editDropdown: false});
    }
  }

  handleDelete(){
    this.props.deleteComment(this.props.comment.id).then(() => {
      this.props.fetchPost(this.props.comment.post_id);
    })
  }

  handleHoverIn(){
    this.setState({displayEdit: true});
  }

  handleHoverOut(){
    this.setState({displayEdit: false});
  }

  render(){
    let isOwner = this.props.comment.author_id === this.props.sessionId;

    if (this.state.editing) {
      return(
        <div className="comment-item" onKeyDown={this.handleKeyDown}>
          <CommentField comment={this.props.comment}/>
        </div>
      )
    } else if (!this.props.user){
      this.props.fetchUserInfo(this.props.comment.author_id);
      return <div></div>
    } else {
      return(
        <div className="comment-item" onMouseOver={this.handleHoverIn} onMouseOut={this.handleHoverOut}>
          <PostProfilePicture user={this.props.user}/>
          <div className='comment-body-container'>
            <NameHover user={this.props.user}/>
            <div className='comment-body'>{this.props.comment.body}</div>
          </div>
          <div>
            {isOwner ? 
            <button 
            className={
            this.state.displayEdit || this.state.editDropdown ?
            "comment-option" : "comment-option hidden-object"} 
            onClick={
              this.state.openDropdown ? 
              this.closeDropdown : this.openDropdown}
            onBlur={this.closeDropdown}
              >
              <BsThreeDots/>
            </button>
            : <></>}
            {this.state.editDropdown ? 
            <div className="comment-edit-container">
              <button onClick={this.toggleEdit}><MdOutlineEdit/> Edit Comment</button>
              <button onClick={this.handleDelete}><IoTrashOutline/> Delete Comment</button>
            </div> : <></>}
          </div>
        </div>
      )
    }
  }
}

export default connect(mSTP, mDTP)(CommentItem);