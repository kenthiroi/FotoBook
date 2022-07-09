import React from "react";
import { connect } from "react-redux";
import { updateUser } from '../../actions/user_actions';

const mSTP = state => ({
  userId: state.session.id,
})

const mDTP = dispatch => ({
  updateUserAbout: (user) => dispatch(updateUser(user)),
})

class CommentField extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      body: "",
      userId: this.props.userId,
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
    formData.append('user[id]', this.state.userId);
    formData.append(`user[${this.props.aboutText.type}]`, this.state.body);

    this.props.updateUserAbout(formData);
  }

  render(){
    return <div>
        <form action="">
          <input ref={this.props.inputRef} onChange={this.updateState} onKeyDown={this.handleKeyDown} value={this.state.body}/>
          <input type="submit" />
        </form>
      </div>
  }
}

export default connect(mSTP, mDTP)(CommentField);