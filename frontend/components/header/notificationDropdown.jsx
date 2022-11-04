import React from "react";
import { connect } from "react-redux";
import FriendRequestDropdownItem from "../friends/friendRequestDropdownItem";
import { IoNotifications } from "react-icons/io5";
import { fetchUser } from "../../actions/user_actions";
import { getFriendRequests } from "../../actions/friend_request_actions";

const mSTP = (state) => {
  return {
    sessionId: state.session.id,
    friendRequests: state.entities.friendRequests,
    users: state.entities.user,
  }
}

const mDTP = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchFriendRequests: (userId) => dispatch(getFriendRequests(userId)),
  }
}

class NotificationsDropdown extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      openDropdown: false,
    }

    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  openDropdown(){
    this.props.fetchFriendRequests(this.props.sessionId);
    this.setState({openDropdown: true});
  }
  
  closeDropdown(){
    this.setState({openDropdown: false});
  }

  render(){
    let friendRequests = Object.values(this.props.friendRequests).filter((friendRequest) => friendRequest.receiver_id === this.props.sessionId);

    return (
      <div>
        <button 
          id={this.state.openDropdown ? 'active-nav-button' : ''} 
          onClick={this.state.openDropdown ? this.closeDropdown : this.openDropdown} 
          onBlur={this.closeDropdown} 
          className="util-btn"
        >
        <div className="dropdown"><IoNotifications/></div>
        </button>
        {this.state.openDropdown ? 
        <div className="notification-dropdown">
          <h1>Notification</h1>
          {/* renders all notifications */}
          {friendRequests.length !== 0 ? friendRequests.reverse().map(friendRequest => {
            let userInfo;
            if (this.props.sessionId === friendRequest.receiver_id){
              userInfo = this.props.users[friendRequest.receiver_id];
              //Checks if User info is in local state
              if (!!userInfo){
                return <FriendRequestDropdownItem key={friendRequest.id} friendRequest={friendRequest} closeDropdown={this.closeDropdown}/>
              } else {
                this.props.fetchUser(post.user_id).then(res => {
                  return <FriendRequestDropdownItem key={friendRequest.id} friendRequest={friendRequest} closeDropdown={this.closeDropdown}/>
                })
              }
            }
          })
          : <div className="empty-dropdown">
              <div>You have no notifications</div>
            </div>}
        </div> : <></>}
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(NotificationsDropdown);