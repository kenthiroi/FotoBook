import React from "react";
import { connect } from "react-redux";
import FriendRequestDropdownItem from "../friends/friendRequestDropdownItem";
import { IoNotifications } from "react-icons/io5";

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

  openDropdown(e){
    e.preventDefault();
    this.setState({openDropdown: true});
  }
  
  closeDropdown(){
    this.setState({openDropdown: false});
  }

  render(){
    let friendRequests = Object.values(this.props.friendRequests);
    console.log(friendRequests.length);

    return (
      <div>
        <button id={this.state.openDropdown ? 'active-nav-button' : ''} onClick={this.state.openDropdown ? this.closeDropdown : this.openDropdown} onBlur={this.closeDropdown} className="util-btn">
          <div className="dropdown"><IoNotifications/></div>
        </button>
        {this.state.openDropdown ? 
        <div className="util-container">
          <h1>Notification</h1>
          {/* renders all notifications */}
          {friendRequests.length !== 0 ? friendRequests.reverse().map(friendRequest => {
            let userInfo;
            if (this.props.sessionId === friendRequest.sender_id){
              userInfo = this.props.users[friendRequest.receiver_id];
            } else {
              userInfo = this.props.users[friendRequest.sender_id];
            }
            if (!!userInfo){
              return <FriendRequestDropdownItem friendRequest={friendRequest}/>
            } else {
              this.props.fetchUser(post.user_id).then(res => {
                return <FriendRequestDropdownItem friendRequest={friendRequest}/>
              })
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