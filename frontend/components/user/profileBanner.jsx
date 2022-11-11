import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { updateUser } from '../../actions/user_actions';
import { BsFillCameraFill, BsCamera, BsTrash } from "react-icons/bs";
import { MdPhotoLibrary } from "react-icons/md";


const mSTP = (state, ownProps) => {
  return {
    sessionId: state.session.id,
    postId: state.entities.user[ownProps.profileId].profile_banner
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
    userFormData.append('user[profile_banner]', '');

    this.props.updateUserPhoto(userFormData);
  }
  
  render(){
    let editButton;
    let bannerPhoto;
    let editDropdown;

    if (this.props.isOwner) {
        editButton = (<button className="banner-edit-button" onClick={this.state.displayDropdown ? this.closeDropdown : this.openDropdown} onBlur={this.closeDropdown}><BsFillCameraFill/> {!!this.props.bannerImg ? ' Edit Cover Photo' : ' Add Cover Photo'}</button>)
    }
    
    if (!!this.props.bannerImg) {
      editDropdown = (<div className="banner-edit">
                        <button onMouseDown={() => this.props.openBannerModal(this.props.sessionId)}>
                          <MdPhotoLibrary/> Update Profile Banner
                        </button>
                        <button onMouseDown={() => this.deleteUserBanner(this.props.sessionId)}>
                          <BsTrash/> Remove
                        </button>
                      </div>)
      bannerPhoto = (<div className='profile-banner'>
                      <div className='img-container'>
                        <img onClick={() => this.props.openViewModal({id: this.props.postId})} src={this.props.bannerImg}/>
                      </div>
                      {editButton}
                      {this.state.displayDropdown ? editDropdown : <></>}
                    </div>)
    } else {
      editDropdown = (<div className="banner-edit">
                        <button onMouseDown={() => this.props.openBannerModal(this.props.sessionId)}>
                          <MdPhotoLibrary/> Upload Photo
                        </button>
                      </div>)
      bannerPhoto = (<div className="profile-banner">
                      <div className='img-container'>
                        <div className='empty-profile-banner'></div>  
                      </div>                      
                      {editButton}
                      {this.state.displayDropdown ? editDropdown : <></>}
                    </div>)
    }

    return (
      <div className='profile-banner-container'>
        {bannerPhoto}
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(UserProfileBanner);