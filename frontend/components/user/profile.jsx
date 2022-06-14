import React from 'react';
import { connect } from 'react-redux';
import { withRouter, useParams } from "react-router-dom";
import FriendRequestButton from '../friends/friendRequestButton';
import { fetchUser } from '../../actions/user_actions';
import UserProfileWall from './profileWall';

const mSTP = (state, ownProps) => ({
  sessionId: state.session.id,
  profileId: ownProps.match.params.userId,
  userInfo: state.entities.user[ownProps.match.params.userId]
})

const mDTP = dispatch => ({
  fetchUserInfo: (userId) => dispatch(fetchUser(userId))
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
    this.props.fetchUserInfo(this.props.profileId);
  }

  componentDidUpdate(prevProps){
    if(this.props.match.params.userId !== prevProps.match.params.userId){
      this.props.fetchUserInfo(this.props.profileId)
    }
  }
  
  handleSwitch(type){
    this.setState({displayedInfo: type})
  }
  
  render(){
    
    return (
      <div className="profile-container">
      {(!!this.props.userInfo) ?
        <div>
          <div className='profile-tabs'>
            <div id='posts-tab' onClick={() => this.handleSwitch('posts')}>Posts</div>
            <div id='about-tab' onClick={() => this.handleSwitch('about')}>About</div>
            <div id='friends-tab' onClick={() => this.handleSwitch('friends')}>Friends</div>
          </div>
          <div className='profile-main'> 
            <div className='profile-picture'>
              {/* <img src=`${}` alt="" /> */}
            </div>
            <div className="profile-name">{this.props.userInfo.first_name} {this.props.userInfo.last_name}</div>
            {(this.props.sessionId !== this.props.profileId) ? 
            <FriendRequestButton profileId={this.props.profileId}/> : <></>}
          </div>
          <div className='profile-intro'>
            <div className='profile-description'>

            </div>
          </div>
          <div>
            <UserProfileWall userId={this.props.profileId}/>
          </div>
        </div> : <></> }
          
        </div>
      )
    }
  }

export default connect(mSTP, mDTP)(withRouter(UserProfile));