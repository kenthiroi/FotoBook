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
      post_id: this.props.post_id,
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
    // debugger
    console.log(formData);
    this.props.uploadComment(formData).then(() => {
      this.setState({ ['body']: "" })

    })
  }

  render(){
    return <div>
        <form action="">
          <input ref={this.props.inputRef} onChange={this.updateState('body')} onKeyDown={this.handleKeyDown} value={this.state.body}/>
        </form>
      </div>
  }
}

export default connect(mSTP, mDTP)(CommentField);