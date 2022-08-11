import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';

const mDTP = dispatch => ({
  updateUserAbout: (user) => dispatch(updateUser(user)),
})


class UserProfileIntro extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      body: "",
      showForm: false
    }

    this.updateState = this.updateState.bind(this);
    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateState(e){
    this.setState({ body: e.target.value });
  }

  openForm(){
    this.setState({
      showForm: true
    })
  }

  closeForm(){
    this.setState({
      showForm: false
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[id]', this.props.userId);
    formData.append(`user[intro_bio]`, this.state.body);

    this.props.updateUserAbout(formData).then(() => {
      this.props.closeForm();
    });
  }

  render(){
    
    let introBio;

    if (!!this.props.userInfo.intro_bio && this.props.isOwner){
      introBio = (<div>
        <div className='bio-body'>{this.props.userInfo.introBio}</div>
        <button onClick={this.openForm}>Edit Bio</button>
      </div>)
    } else if (!this.props.userInfo.intro_bio && this.props.isOwner){
      introBio = (<div>
        <button onClick={this.openForm}>Add Bio</button>
      </div>)
    } else if (!!this.props.userInfo.intro_bio){
      introBio = (<div>
        <div className='bio-body'>{this.props.userInfo.introBio}</div>
      </div>)
    } else {
      introBio = <div></div>
    }

    return (
      <div className='intro-container'>
        Intro
        {this.state.showForm ? 
          <div className="intro-form">
            <form>
              <textarea onChange={this.updateState}></textarea>
              <button className="intro-save" onClick={this.handleSubmit}>Save</button>
              <button className="intro-cancel" onClick={this.closeForm}>Cancel</button>
            </form>
          </div>
          : introBio}
      </div>
    )
  }
}

export default connect(null, mDTP)(UserProfileIntro);