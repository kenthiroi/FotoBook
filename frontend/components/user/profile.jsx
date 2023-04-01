import React from 'react';
import { connect } from 'react-redux';
import { withRouter, useParams } from "react-router-dom";
import FriendRequestButton from '../friends/friendRequestButton';
import { fetchUser } from '../../actions/user_actions';
import UserProfileWall from './profileWall';
import UserProfileAbout from './profileAbout';
import UserProfilePicture from './profilePicture';
import UserProfileBanner from './profileBanner';
import { getPost } from '../../actions/post_actions';
import ProfileIntro from './profileIntro';
import ProfilePostsContainer from './profilePostsContainer';
import FriendIndex from '../friends/friendIndex';

const mSTP = (state, ownProps) => {
  let userInfo = state.entities.user[ownProps.match.params.userId];
  let userImg;
  let bannerImg;
  try {
    userImg = state.entities.posts[userInfo.profile_picture].photoUrl;
  } catch (e) {
    userImg = 'https://i.imgur.com/7x6fTDK.png';
  }
  try {
    bannerImg = state.entities.posts[userInfo.profile_banner].photoUrl;
  } catch (e) {
    bannerImg = null;
  }
  
  return {
    sessionId: state.session.id,
    profileId: parseInt(ownProps.match.params.userId),
    userInfo,
    // friends: userInfo.friends,
    userImg,
    bannerImg,
  }
}

const mDTP = dispatch => ({
  fetchUserInfo: (userId) => dispatch(fetchUser(userId)),
  getPost: (postId) => dispatch(getPost(postId)),
})


class UserProfile extends React.Component{

  constructor(props){
    super(props)
    
    this.state = {
      displayedInfo: 'posts',
    }
    
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  componentDidMount(){
    this.props.fetchUserInfo(this.props.profileId).then(res => {
      if (!!res.user.profile_picture){
        this.props.getPost(res.user.profile_picture);
      }
      if (!!res.user.profile_banner){
        this.props.getPost(res.user.profile_banner);
      }
    })
  }

  componentDidUpdate(prevProps){
    if(this.props.match.params.userId !== prevProps.match.params.userId){
      this.props.fetchUserInfo(this.props.profileId);
    }
  }

  componentWillUnmount(){
    console.log('unmount');
  }
  
  handleSwitch(tabName){
    this.setState({displayedInfo: tabName})
  }
  
  render(){
    let profileContent; 
    let isOwner;

    console.log('mounted');

    if (this.props.sessionId === this.props.profileId){
      isOwner = true;
    } else {
      isOwner = false;
    }

    console.log(isOwner);

    switch (this.state.displayedInfo){
      case 'posts':
        profileContent = <ProfilePostsContainer userInfo={this.props.userInfo} userImg={this.props.userImg} isOwner={isOwner} handleSwitch={() => this.handleSwitch('about')}/>;
        break;
      case 'about':
        profileContent = <UserProfileAbout userId={this.props.profileId} isOwner={isOwner}/>;
        break;
      case 'friends':
        profileContent = <FriendIndex profileId={this.props.userInfo.id} friendList={this.props.userInfo.friends} isOwner={isOwner}/>;
        console.log(this.props.userInfo);
        break;
      default:
        profileContent = <div></div>;
    }

    return (
      <div className="profile-container">
      {(!!this.props.userInfo) ?
        <div>
          <div className='profile-main'> 
            <UserProfileBanner profileId={this.props.profileId} bannerImg={this.props.bannerImg} isOwner={isOwner}/>
            <div className='profile-top-container'>
              {isOwner 
                ? 
                  <></> 
                : 
                  <FriendRequestButton profileId={this.props.profileId}/>
              }
              <div className='profile-top'>
                <UserProfilePicture profileId={this.props.profileId} userImg={this.props.userImg} isOwner={isOwner}/>
                <div className="profile-name">{this.props.userInfo.first_name} {this.props.userInfo.last_name}</div>
                {/* {!!this.props.friends[]} */}
              </div>
            </div>
            <div className='profile-tabs'>
              <div className={(this.state.displayedInfo === 'posts') ? 'active-profile-tab' : 'profile-tab'} onClick={() => this.handleSwitch('posts')}>Posts</div>
              <div className={(this.state.displayedInfo === 'about') ? 'active-profile-tab' : 'profile-tab'} onClick={() => this.handleSwitch('about')}>About</div>
              <div className={(this.state.displayedInfo === 'friends') ? 'active-profile-tab' : 'profile-tab'}  onClick={() => this.handleSwitch('friends')}>Friends</div>
            </div>
          </div>
          <div>
            {profileContent}
          </div>
        </div> : <></> }
          
        </div>
      )
    }
  }

export default connect(mSTP, mDTP)(withRouter(UserProfile));