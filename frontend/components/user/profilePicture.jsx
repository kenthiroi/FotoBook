import React from 'react';
import { openModal } from "../../actions/modal_actions"
import { connect } from 'react-redux';
import { getPost } from '../../actions/post_actions';
import { updateUser } from '../../actions/user_actions';

const mSTP = (state, ownProps) => {
  return {
    sessionId: state.session.id,
    postId: state.entities.user[state.session.id].profile_picture
  }
}

const mDTP = dispatch => ({
  openViewModal: (post) => dispatch(openModal({
    type: 'showPhoto',
    post
  })),
  openEditPicModal: (userId) => dispatch(openModal({
    type: 'editUserPic',
    mode: 'profile',
  }, userId)),
  updateUserPhoto: (user) => dispatch(updateUser(user)),
  getPost: (postId) => dispatch(getPost(postId)),
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
    let editButton;
    let onClickEvent;
    let profilePicture = (<img src={this.props.userImg}/>);
    let editDropdown;
    let defaultImgUrl = 'https://i.imgur.com/7x6fTDK.png';

    if (this.props.sessionId === parseInt(this.props.profileId)){
      editButton = (<button onClick={() => this.props.openEditPicModal(this.props.userId)}></button>)
      onClickEvent = this.openDropdown;
    } else if(this.props.userImg === defaultImgUrl) {
      onClickEvent = null;
    } else { 
      onClickEvent = (() => this.props.openViewModal({id: this.props.postId}));
    } 
    
    if (this.props.userImg !== defaultImgUrl) {
      editDropdown = (<div className="propic-edit-container">
                        <div onClick={() => this.props.openViewModal({id: this.props.postId})}>View Profile Picture</div>
                        <div onClick={() => this.props.openEditPicModal(this.props.userId)}>Update Profile Picture</div>
                        <div onClick={this.unlinkProfilePhoto}>Remove Profile Picture</div>
                      </div>)
    } else {
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