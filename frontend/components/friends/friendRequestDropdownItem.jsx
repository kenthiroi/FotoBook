import React from "react";
import { connect } from "react-redux"
import { createFriend } from "../../actions/friend_actions";
import { deleteFriendRequest } from "../../actions/friend_request_actions";

const mSTP = (state, ownProps) => {
  let user = state.entities.user[ownProps.friendRequest.sender_id];
  let userImg;

  console.log(ownProps.friendRequest);

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
    user_id: state.session.id,
  }
}

const mDTP = (dispatch) => {
  return {
    createFriend: (friend) => dispatch(createFriend(friend)),
    deleteFriendRequest: (friendRequestId) => dispatch(deleteFriendRequest(friendRequestId))
  }
}

class FriendRequestDropdownItem extends React.Component{
  constructor(props){
    super(props);

    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleConfirm(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('friend[user_id]', this.props.friendRequest.receiver_id);
    formData.append('friend[friend_id]', this.props.friendRequest.sender_id);

    this.props.createFriend(formData);
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteFriendRequest(this.props.friendRequest.id);
  }

  render(){
    return (
      <div className="friend-request-box">
        <img src={this.props.userImg}/>
        <div className="friend-request-sender">{this.props.friendRequest.sender_first_name} {this.props.friendRequest.sender_last_name}</div>
        <button type="submit" value={"Confirm"} onMouseDown={this.handleConfirm}/>
        <button type="submit" value={"Delete"} onMouseDown={this.handleDelete}/>
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(FriendRequestDropdownItem);