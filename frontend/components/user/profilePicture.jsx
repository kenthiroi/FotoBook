import React from 'react';
import { openModal } from "../../actions/modal_actions"
import { connect } from 'react-redux';

const mSTP = (state, ownProps) => {
  return {
    sessionId: state.session.id,
    userImg: state.entities.posts[state.entities.user[ownProps.profileId].profile_picture].photoUrl
  }
}

const mDTP = dispatch => ({
  openProfilePicModal: () => dispatch(openModal({type: 'showPhoto'})),
  openEditPicModal: (userId) => dispatch(openModal({type: 'editProfilePic'}, userId)),
  updateUserPhoto: (user) => dispatch(updateUser(user)),
})

class UserProfilePicture extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      displayDropdown: false,
    }

    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.unlinkProfilePhoto = this.unlinkProfilePhoto.bind(this);
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

  unlinkProfilePhoto(){
    //Does not remove photo post from db, only the post_id from the user node.

    const userFormData = new FormData();
    userFormData.append('user[id]', this.props.sessionId);
    userFormData.append('user[profile_picture]', null);

    this.props.updateUserPhoto(userFormData);
  }

  render(){
    console.log(this.props.test);

    let editButton;
    let onClickEvent;
    let profilePicture;
    let editDropdown;

    if (this.props.sessionId === parseInt(this.props.profileId)){
      editButton = (<button onClick={() => this.props.openEditPicModal(this.props.userId)}></button>)
      onClickEvent = this.openDropdown;
    } else if(!this.props.userImg) {
      onClickEvent = null;
    } else { 
      onClickEvent = this.props.openProfilePicModal;
    } 
    
    if (!!this.props.userImg) {
      profilePicture = (<img src={this.props.userImg}/>);
      editDropdown = (<div className="propic-edit-container">
                        <div onClick={this.props.openProfilePicModal}>View Profile Picture</div>
                        <div onClick={() => this.props.openEditPicModal(this.props.userId)}>Update Profile Picture</div>
                        <div onClick={this.unlinkProfilePhoto}>Remove Profile Picture</div>
                      </div>)
    } else {
      profilePicture = (<img src="https://i.imgur.com/7x6fTDK.png"/>)
      editDropdown = (<div className="propic-edit-container">
                        <div onClick={() => this.props.openEditPicModal(this.props.userId)}>Update Profile Picture</div>
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