import React from 'react';
import { connect } from 'react-redux';
import { deleteComment, editComment } from '../../actions/comment_actions';
import { getPost } from "../../actions/post_actions";
import CommentField from './comment_field';

const mSTP = state => {
  return {
    user_id: state.session.id,
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
      this.setState({editing: false});
    }
  }

  handleDelete(){
    this.props.deleteComment(this.props.comment.id).then(() => {
      this.props.fetchPost(this.props.comment.post_id);
    })
  }

  render(){
    if (this.state.editing) {
      return(
        <CommentField onKeyDown={this.handleKeyDown} comment={this.props.comment}></CommentField>
      )
    }
    else {
      return(
        <div className="comment-item">
          <div className="commenter-name">{this.props.comment.first_name} {this.props.comment.last_name}</div>
          <div className='comment-body'>{this.props.comment.body}</div>
          {this.props.comment.author_id === this.props.user_id ?
            <div className="comment-option" onClick={this.openDropdown} onBlur={this.closeDropdown}>&hellip;</div>
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
  }
}

export default connect(mSTP, mDTP)(CommentItem);