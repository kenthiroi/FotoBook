import React from 'react';
import { connect } from 'react-redux';
import { withRouter, useParams } from "react-router-dom";
import FriendRequestButton from '../friends/friendRequestButton';
import { fetchUser } from '../../actions/user_actions';
import UserProfileWall from './profileWall';
import UserProfileAbout from './profileAbout';
import UserProfilePicture from './profilePicture';
import { getPost } from '../../actions/post_actions';

const mSTP = (state, ownProps) => ({
  sessionId: state.session.id,
  profileId: ownProps.match.params.userId,
  userInfo: state.entities.user[ownProps.match.params.userId]
})

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
      this.props.getPost(res.user.profile_picture);
    })
  }

  componentDidUpdate(prevProps){
    if(this.props.match.params.userId !== prevProps.match.params.userId){
      console.log('updated')
      this.props.fetchUserInfo(this.props.profileId)
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

    console.log('mounted');
    // console.log(this.props.userInfo);

    switch (this.state.displayedInfo){
      case 'posts':
        profileContent = <UserProfileWall userId={this.props.profileId}/>;
        break;
      case 'about':
        profileContent = <UserProfileAbout userId={this.props.profileId}/>;
        break;
      case 'friends':
        profileContent = <div></div>;
        break;
      default:
        profileContent = <div></div>;
        break;
    }

    return (
      <div className="profile-container">
      {(!!this.props.userInfo) ?
        <div>
          <div className='profile-main'> 
            <UserProfilePicture profileId={this.props.profileId} userInfo={this.props.userInfo}/>
            <div className="profile-name">{this.props.userInfo.first_name} {this.props.userInfo.last_name}</div>
            {(this.props.sessionId !== this.props.profileId) ? 
            <FriendRequestButton profileId={this.props.profileId}/> : <></>}
            <div className='profile-tabs'>
              <div className={(this.state.displayedInfo === 'posts') ? 'active-profile-tab' : 'profile-tab'} onClick={() => this.handleSwitch('posts')}>Posts</div>
              <div className={(this.state.displayedInfo === 'about') ? 'active-profile-tab' : 'profile-tab'} onClick={() => this.handleSwitch('about')}>About</div>
              <div className={(this.state.displayedInfo === 'friends') ? 'active-profile-tab' : 'profile-tab'}  onClick={() => this.handleSwitch('friends')}>Friends</div>
            </div>
          </div>
          <div className='profile-intro'>
            <div className='profile-description'></div>
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