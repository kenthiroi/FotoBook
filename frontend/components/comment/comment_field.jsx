import React from "react";
import { createComment, editComment } from "../../actions/comment_actions";
import { connect } from "react-redux";

const mSTP = state => ({
  user_id: state.session.id,
})

const mDTP = dispatch => ({
  uploadComment: (comment) => dispatch(createComment(comment)),
  editComment: (comment) => dispatch(editComment(comment))
})

class CommentField extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: "",
      user_id: this.props.user_id,

    }

    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateState(){
    
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('comment[body]', this.state.body);
    formData.append('comment[user_id]', this.state.user_id);
    

  }

  render(){

  }
}

export default connect(mSTP, mDTP)(CommentField);