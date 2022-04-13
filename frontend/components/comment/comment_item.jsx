import React from 'react';
import { connect } from 'react-redux';
import { deleteComment, editComment } from '../../actions/comment_actions';
import { getPost } from "../../actions/post_actions";

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
      editComment: false,
    }

    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  handleDelete(){
    this.props.deleteComment(this.props.comment.id).then(() => {
      this.props.fetchPost(this.props.comment.post_id);
    })
  }

  render(){
    console.log(this.props.comment.author_id === this.props.user_id);
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
          <div >Edit Comment</div>
          <div onClick={this.handleDelete}>Delete Comment</div>
        </div> : <></>}
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(CommentItem);