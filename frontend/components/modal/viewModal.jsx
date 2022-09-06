import React from 'react';
import { connect } from 'react-redux';
import UserInfoHover from "../user/userInfoHover";
import LikeAndCommentButton from "../like/likeAndCommentButton";
import CommentIndex from "../comment/commentIndex";
import CommentField from "../comment/commentField";
import { closeModal, openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.entities.posts[ownProps.postId],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  }
}

class ViewModal extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (this.props.post ? <div className="view-modal">
      <div className='photo-container'>
        <img src={this.props.post.photoUrl}/>
      </div>
      <div className='info-container'>
        <div className='exit-button' onClick={this.props.closeModal}></div>
        <div className='post-main'>
          <UserInfoHover userId={this.props.post.user_id} post={this.props.post}/>
          <div className="posts-body">{this.props.post.body}</div>
        </div>
        <div className='post-comments'>
          <LikeAndCommentButton likes={this.props.post.likes} post_id={this.props.post.id}/>
          <CommentIndex comments={this.props.post.comments}/>
          <CommentField post_id={this.props.post.id}/>
        </div>
      </div>
    </div> : <></>
  )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(ViewModal);