import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { updateUser } from '../../actions/user_actions';


const mSTP = state => {
  return {
    sessionId: state.session.id,
    postId: state.entities.user[state.session.id].profile_banner
  }
}

const mDTP = dispatch => {
  return {
    openViewModal: (post) => dispatch(openModal({
      type: 'showPhoto',
      post
    })),
    openBannerModal: (userId) => dispatch(openModal({
      type: 'editUserPic',
      mode: 'banner',
    }, userId)),
    updateUserPhoto: (user) => dispatch(updateUser(user)),
  }
}

class UserProfileBanner extends React.Component{

  constructor(props){
    super(props)
    
    this.state = {
      displayDropdown: false,
    }

    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  openDropdown(){
    this.setState({displayDropdown: true});
  };

  closeDropdown(){
    this.setState({displayDropdown: false});
  }

  deleteUserBanner(){
    const userFormData = new FormData();
    userFormData.append('user[id]', this.props.sessionId);
    userFormData.append('user[profile_banner]', null);

    this.props.updateUserPhoto(userFormData);
  }
  
  render(){
    let editButton;
    let bannerPhoto;
    let editDropdown;

    if (this.props.sessionId === parseInt(this.props.profileId)) {
      editButton = (<button className="banner-edit-button" onClick={this.state.displayDropdown ? this.closeDropdown : this.openDropdown} onBlur={this.closeDropdown}>{!!this.props.bannerImg ? 'Edit Cover Photo' : 'Add Cover Photo'}</button>)
    }
    
    if (!!this.props.bannerImg) {
      bannerPhoto = (<div className='profile-banner'>
                      <img onClick={() => this.props.openViewModal({id: this.props.postId})} src={this.props.bannerImg}/>
                    </div>)
      editDropdown = (<div className="banner-edit">
                        <div onClick={() => this.props.openBannerModal(this.props.sessionId)}>Update Profile Banner</div>
                        <div onClick={() => this.deleteUserBanner(this.props.sessionId)}>Remove</div>
                      </div>)
    } else {
      bannerPhoto = (<div className="profile-banner empty-profile-banner"/>)
      editDropdown = (<div className="banner-edit">
                        <div onClick={() => this.props.openBannerModal(this.props.sessionId)}>Upload Photo</div>
                      </div>)
    }

    return (
      <div id='profile-banner-container'>
        {bannerPhoto}
        {editButton}
        {this.state.displayDropdown ? editDropdown : <></>}
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(UserProfileBanner);