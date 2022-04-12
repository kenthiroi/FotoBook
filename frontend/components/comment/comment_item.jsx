import React from 'react';
import { connect } from 'react-redux';
import { deleteComment, editComment } from '../../actions/comment_actions';


const mDTP = dispatch => {
  return {
    editComment: (comment) => dispatch(editComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  }
}

class CommentItem extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="comment-item">
        <div className="commenter-name">{this.props.comment.first_name} {this.props.comment.last_name}</div>
        <div className='comment-body'>{this.props.comment.body}</div>
      </div>
    )
  }
}

export default connect(null, mDTP)(CommentItem);