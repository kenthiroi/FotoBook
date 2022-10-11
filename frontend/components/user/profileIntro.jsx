import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import AboutItemContainer from './about/profileAboutItemContainer';


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
    formData.append('user[id]', this.props.userInfo.id);
    formData.append(`user[intro_bio]`, this.state.body);

    this.props.updateUserAbout(formData).then(() => {
      this.closeForm();
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

    //hometown, work, school and relationship
    let hometown;
    let work;
    let school;
    let relationship;

    if (!!this.props.userInfo.hometown){
      hometown = (
        <AboutItemContainer formType='hometown' userId={this.props.userInfo.id} onProfilePage={true}/>
      )
    }
    if (!!this.props.userInfo.work){
      work = (
        <AboutItemContainer formType='work' userId={this.props.userInfo.id} onProfilePage={true}/>
      )
    }
    if (!!this.props.userInfo.school){
      school = (
        <AboutItemContainer formType='school' userId={this.props.userInfo.id} onProfilePage={true}/>
      )
    }
    if (!!this.props.userInfo.relationship){
      relationship = (
        <AboutItemContainer formType='relationship' userId={this.props.userInfo.id} onProfilePage={true}/>
      )
    }


    return (
      <div className='intro-container'>
        <h2>Intro</h2>
        {this.state.showForm ? 
          <div className="intro-form">
            <form>
              <textarea onChange={this.updateState} placeholder="Describe who you are"></textarea>
              <button className="intro-save" onClick={this.handleSubmit}>Save</button>
              <button className="intro-cancel" onClick={this.closeForm}>Cancel</button>
            </form>
          </div>
          : introBio}
        {hometown}
        {work}
        {school}
        {relationship}
        {!!this.props.isOwner ? 
        <div>
          <button onClick={this.props.handleSwitch}>Edit Details</button>
        </div>
        : <></>}
      </div>
    )
  }
}

export default connect(null, mDTP)(UserProfileIntro);