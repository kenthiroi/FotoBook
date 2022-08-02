import React from "react";
import { createComment, editComment } from "../../actions/comment_actions";
import { connect } from "react-redux";
import { getPost } from "../../actions/post_actions";

const mSTP = state => {
  let userInfo = state.entities.user[state.session.id];
  let userImg;

  try {
    userImg = state.entities.posts[userInfo.profile_picture].photoUrl;
  } catch (e) {
    userImg = 'https://i.imgur.com/7x6fTDK.png';
  }

  return {
    user_id: state.session.id,
    userImg,
  }
}

const mDTP = dispatch => ({
  fetchPost: (postId) => dispatch(getPost(postId)),
  uploadComment: (comment) => dispatch(createComment(comment)),
  editComment: (comment) => dispatch(editComment(comment))
})

class CommentField extends React.Component {
  constructor(props){
    super(props);
    if (this.props.comment){
      this.state = {
        body: this.props.comment.body,
        user_id: this.props.comment.author_id,
        post_id: this.props.comment.post_id,
      }
    }
    else {
      this.state = {
        body: "",
        user_id: this.props.user_id,
        post_id: this.props.post_id,
      }
    }

    this.updateState = this.updateState.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateState(){
    return (e) =>{
      this.setState({ ['body']: e.target.value })
    }
  }

  handleKeyDown(e){
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  }

  handleSubmit(){
    const formData = new FormData();
    formData.append('comment[body]', this.state.body);
    formData.append('comment[author_id]', this.state.user_id);
    formData.append('comment[post_id]', this.state.post_id);

    if (this.props.comment){
      formData.append('comment[id]', this.props.comment.id);
      this.props.editComment(formData).then(() => {
        this.props.fetchPost(this.state.post_id);
      });
    } else {
      this.props.uploadComment(formData).then(() => {
        this.props.fetchPost(this.state.post_id);
        this.setState({ ['body']: "" });
      })
    }
  }

  render(){
    return <div className="comment-field">
        <img src={this.props.userImg} />
        <form action="">
          <input ref={this.props.inputRef} onChange={this.updateState('body')} onKeyDown={this.handleKeyDown} value={this.state.body} placeholder='Write a comment...'/>
          <div>Press Enter to post.</div>
        </form>
      </div>
  }
}

export default connect(mSTP, mDTP)(CommentField);