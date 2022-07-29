import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';

// const mSTP = (state, ownProps) => ({
// })

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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
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

    return (
      <div className='intro-container'>
        {this.state.showForm ? introBio : 
          <div className="intro-form">
            <form>
              <textarea onChange={this.updateState}/>
              <button id="intro-save" onClick={this.handleSubmit}>Save</button>
              <button id="intro-cancel" onClick={this.props.closeForm}>Cancel</button>
            </form>
          </div>}
      </div>
    )
  }
}

export default connect(null, mDTP)(UserProfileIntro);