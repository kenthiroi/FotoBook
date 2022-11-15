import React from "react";
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
  let user = state.entities.user[state.session.id];
  let userImg;
  try {
    // userImg = state.entities.posts[state.entities.user[state.session.id].profile_picture];
    if (typeof user.photoUrl === 'undefined'){
      console.log('undefined');
      userImg = 'https://i.imgur.com/7x6fTDK.png';
    } else {
      userImg = user.photoUrl;
    }
  } catch (e) {
    userImg = 'https://i.imgur.com/7x6fTDK.png';
  }
  return {
    sessionId: state.session.id,
    userInfo: user,
    userImg,
  }
}

// const mDTP = (dispatch) => {
//   return {
    
//   }
// }

class ProfileSideButton extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    if (this.props.history.location.pathname !== `/profile/${this.props.sessionId}`){
      this.props.history.push(`/profile/${this.props.sessionId}`);
    }
  }

  render(){

    return (
      <div onClick={this.handleClick} className="sidenav-btn" id="sidenav-profile-button">
        <span className={this.props.onProfile ? "active-sidenav-btn" : ""}></span>
        <div id="profile-button-pic-container">
          <img src={this.props.userImg}/>
        </div>
          {this.props.onHomepage ? this.props.userInfo.first_name + " " + this.props.userInfo.last_name : ""}
      </div>
    )
  }
}

export default connect(mSTP, null)(withRouter(ProfileSideButton));