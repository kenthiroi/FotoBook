import React from "react";
import { connect } from "react-redux"
import { createFriend } from "../../actions/friend_actions";
import { deleteFriendRequest } from "../../actions/friend_request_actions";
import { fetchUser } from "../../actions/user_actions";
import NameHover from "../posts/nameHover";

const mSTP = (state, ownProps) => {
  let user = state.entities.user[ownProps.friendRequest.sender_id];
  let userImg;

  try {
    // userImg = state.entities.posts[state.entities.user[state.session.id].profile_picture];
    if (typeof user.photoUrl === 'undefined'){
      userImg = 'https://i.imgur.com/7x6fTDK.png';
    } else {
      userImg = user.photoUrl;
    }
  } catch (e) {
    userImg = 'https://i.imgur.com/7x6fTDK.png';
  }
  return {
    userImg,
    user,
    sessionId: state.session.id,
  }
}

const mDTP = (dispatch) => {
  return {
    createFriend: (formData) => dispatch(createFriend(formData)),
    deleteFriendRequest: (friendRequestId) => dispatch(deleteFriendRequest(friendRequestId)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
  }
}

class FriendRequestDropdownItem extends React.Component{
  constructor(props){
    super(props);

    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    if (!this.props.user){
      this.props.fetchUser(this.props.friendRequest.sender_id);
    }
  }

  handleConfirm(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('friend[user_id]', this.props.friendRequest.receiver_id);
    formData.append('friend[friend_id]', this.props.friendRequest.sender_id);

    this.props.createFriend(formData).then(() => {
      this.props.deleteFriendRequest(this.props.friendRequest.id);
    })
    
    this.props.closeDropdown();
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteFriendRequest(this.props.friendRequest.id).then(()=> {
      this.props.closeDropdown();
    });
  }

  render(){

    
    return (
      <>
      { !!this.props.user ?
        <div className="friend-request-box">
          <img src={this.props.userImg}/>
          <div className="friend-request-sender">
            <span>
              {/* {this.props.friendRequest.sender_first_name + " " + this.props.friendRequest.sender_last_name} */}
              <NameHover user={this.props.user}/>
            </span> sent you a friend request.
          </div>
          <button onMouseDown={this.handleConfirm}>Confirm</button>
          <button onMouseDown={this.handleDelete}>Delete</button>
        </div> : <></>
      }
      </>
    )
  }
}

export default connect(mSTP, mDTP)(FriendRequestDropdownItem);