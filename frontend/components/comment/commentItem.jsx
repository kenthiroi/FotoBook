import React from 'react';
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import { deleteComment, editComment } from '../../actions/comment_actions';
import { getPost } from "../../actions/post_actions";
import CommentField from './commentField';
import UserInfoHover from '../user/userInfoHover';

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
  }
}

class CommentItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      editDropdown: false,
      editing: false,
    }

    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  componentDidMount(){
    if(!this.props.user){
      
    }
  }

    
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

  handleMouseEnter(){
    this.setState({
      showInfo: true
    })
  }

  handleMouseLeave(){
    this.setState({
      showInfo: false
    })
  }

  render(){
    if(!!this.props.userInfo){
      if (this.state.editing) {
        return(
          <div className="comment-item" onKeyDown={this.handleKeyDown}>
            <CommentField comment={this.props.comment}/>
          </div>
        )
      }
      else {
        return(
          <div className="comment-item">
            <div className="user-info">
              <img src={this.props.photoUrl}
              onMouseEnter={this.handleMouseEnter} 
              onMouseLeave={this.handleMouseLeave}
              />
              <Link to={`/profile/${this.props.user.id}`} 
                className="user-name" 
                onMouseEnter={this.handleMouseEnter} 
                onMouseLeave={this.handleMouseLeave}>
                  {this.props.user.first_name} {this.props.user.last_name}
              </Link>
            </div>
            <div className='comment-body'>{this.props.comment.body}</div>
            {this.props.comment.author_id === this.props.sessionId ?
              <div className="comment-option" onClick={this.state.openDropdown ? this.closeDropdown : this.openDropdown} onBlur={this.closeDropdown}>&hellip;</div>
              :
              <></>
            }
            
            {this.state.editDropdown ? 
            <div className="comment-edit-container">
              <div onClick={this.toggleEdit}>Edit Comment</div>
              <div onClick={this.handleDelete}>Delete Comment</div>
            </div> : <></>}
          </div>
        )
      }
    } else {
      return <div></div>
    }
  }
}

export default connect(mSTP, mDTP)(CommentItem);