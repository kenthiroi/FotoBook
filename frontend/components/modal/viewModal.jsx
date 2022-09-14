import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NameHover from '../posts/nameHover';
import LikeAndCommentButton from "../like/likeAndCommentButton";
import CommentIndex from "../comment/commentIndex";
import CommentField from "../comment/commentField";
import PostProfilePicture from '../posts/postProfilePic';
import { closeModal, openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  let post = state.entities.posts[ownProps.postId];
  return {
    userInfo: state.entities.user[post.user_id],
    post,
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

  componentDidMount() {    
    document.body.style.overflow = 'hidden';
  }
  
  componentWillUnmount() {
    document.body.style.overflow = 'unset';
  }

  render(){
    return (this.props.post ? <div className="view-modal">
      <div className='photo-container'>
        <img src={this.props.post.photoUrl}/>
        <div id='photo-background' onClick={this.props.closeModal}></div>
      </div>
      <div className='info-container'>
        <div className='exit-button' onClick={this.props.closeModal}></div>
        <div className='post-main'>
          <PostProfilePicture user={this.props.userInfo}/>
          <NameHover user={this.props.userInfo}/>
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