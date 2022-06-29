import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const mSTP = state => {
  return {
    sessionId: state.session.id,
  }
}

const mDTP = dispatch => {
  return {
    openModal: () => dispatch(openModal('bannerPhoto'))
  }
}

class UserProfileBanner extends React.Component{

  constructor(props){
    super(props)
    
    this.state = {
      displayDropdown: false,
    }
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

    if (this.props.sessionId === parseInt(this.props.profileId)){
      editButton = (<button onClick={this.openEditPicModal}>{!!this.props.bannerImg ? 'Edit Cover Photo' : 'Add Cover Photo'}</button>)
      onClickEvent = this.openDropdown;
    } else if(!this.props.bannerImg) {
      onClickEvent = null;
    } else { 
      onClickEvent = this.props.openModal;
    } 
    
    if (!!this.props.bannerImg) {
      bannerPhoto = (<img src={this.props.bannerImg}/>);
      editDropdown = (<div className="comment-edit-container">
                        <div onClick={this.props.openModal}>Upload Photo</div>
                        <div onClick={this.delete}>Remove</div>
                      </div>)
    } else {
      bannerPhoto = (<div className="empty-profile-banner"/>)
      editDropdown = (<div className="comment-edit-container">
                        <div onClick={this.props.openModal}>Upload Photo</div>
                      </div>)
    }

    return (
      <div id='profile-picture' onClick={onClickEvent}>
        {bannerPhoto}
        {editButton}
        {this.state.displayDropdown ? 
          editDropdown : <></>}
      </div>
    )
  }
}

export default connect(mSTP, null)(UserProfileBanner);