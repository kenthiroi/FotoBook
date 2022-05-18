import React from 'react';
import { connect } from 'react-redux';
import { withRouter, useParams } from "react-router-dom";
import FriendRequestButton from '../friends/friend_request_button';
import { fetchUser } from '../../actions/user_actions';

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

  componentWillMount(){
    this.props.fetchUserInfo(this.props.profileId);
  }

  handleSwitch(type){
    this.setState({displayedInfo: type})
  }
  
  render(){
    
    return (
      <div className="profile-container">
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
          {(this.props.user_id === this.state.profileId) ? 
          <FriendRequestButton profileId={this.state.profileId}/> : <></>}
        </div>
        <div className='profile-info'>
          
        </div>
        
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(withRouter(UserProfile));