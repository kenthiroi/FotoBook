import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

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
    openPhotoModal: () => dispatch(openModal({
      type: ''
    }))
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
    this.setState({editDropdown: true});
  };

  closeDropdown(){
    this.setState({editDropdown: false});
  }
  
  render(){
    let editButton;
    let onClickEvent;
    let bannerPhoto;
    let editDropdown;

    if (this.props.sessionId === parseInt(this.props.profileId)) {
      editButton = (<button className="banner-edit-button" onClick={this.state.displayDropdown ? this.closeDropdown : this.openDropdown}>{!!this.props.bannerImg ? 'Edit Cover Photo' : 'Add Cover Photo'}</button>)
    } else if (!this.props.bannerImg) {
      onClickEvent = null;
    } else {
      onClickEvent = (() => this.props.openModal({id: this.props.postId}));
    }
    
    if (!!this.props.bannerImg) {
      bannerPhoto = (<img className="profile-banner" src={this.props.bannerImg}/>);
      editDropdown = (<div className="banner-edit">
                        <div onClick={() => this.props.openModal({id: this.props.postId})}>Upload Photo</div>
                        <div onClick={() => this.deleteUserBanner(this.props.sessionId)}>Remove</div>
                      </div>)
    } else {
      bannerPhoto = (<div className="empty-profile-banner"/>)
      editDropdown = (<div className="banner-edit">
                        <div onClick={this.props.openModal}>Upload Photo</div>
                      </div>)
    }

    return (
      <div id='profile-banner-container' onClick={onClickEvent}>
        {bannerPhoto}
        {editButton}
        {this.state.displayDropdown ? editDropdown : <></>}
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(UserProfileBanner);