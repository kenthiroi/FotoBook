import React from 'react';
import { openModal } from "../../actions/modal_actions"
import { connect } from 'react-redux';

const mSTP = state => ({
  sessionId: state.session.id,
})

const mDTP = dispatch => ({
  openProfilePicModal: () => dispatch(openModal('picture')),
  openEditPicModal: () => dispatch(openModal('editProfilePic')),
})

class UserProfilePicture extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      displayDropdown: false,
    }

    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

    
  openDropdown(){
    if (!this.state.displayDropdown) {
      this.setState({
        displayDropdown: true,
      });
    } else {
      this.setState({
        displayDropdown: false,
      });
    }
  };
  
  closeDropdown(){
    this.setState({displayDropdown: false});
  }

  render(){
    let editButton;
    let onClickEvent;
    let profilePicture;
    let editDropdown;

    if (this.props.sessionId === parseInt(this.props.profileId)){
      editButton = (<button onClick={this.openEditPicModal}></button>)
      onClickEvent = this.openDropdown;
    } else if(!this.props.userImg) {
      onClickEvent = null;
    } else { 
      onClickEvent = this.props.openProfilePicModal;
    } 
    
    if (!!this.props.userImg) {
      profilePicture = (<img src={this.props.userImg}/>);
      editDropdown = (<div className="comment-edit-container">
                        <div onClick={this.props.openProfilePicModal}>View Profile Picture</div>
                        <div onClick={this.openEditPicModal}>Update Profile Picture</div>
                      </div>)
    } else {
      profilePicture = (<img src="https://i.imgur.com/7x6fTDK.png"/>)
      editDropdown = (<div className="comment-edit-container">
                        <div onClick={this.openEditPicModal}>Update Profile Picture</div>
                      </div>)
    }

    return (
      <div id='profile-picture' onClick={onClickEvent}>
        {profilePicture}
        {editButton}
        {this.state.displayDropdown ? 
          editDropdown : <></>}
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(UserProfilePicture);