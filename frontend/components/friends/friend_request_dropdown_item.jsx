import React from "react";
import { connect } from "react-redux"
import { createFriend } from "../../actions/friend_actions";
import { deleteFriendRequest } from "../../actions/friend_request_actions";

const mSTP = (state) => {
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
        <div className="friend-request-sender">{this.props.friendRequest.first_name} {this.props.friendRequest.last_name}</div>
        <input type="submit" value={"Confirm"} onClick={this.handleConfirm}/>
        <input type="submit" value={"Delete"} onClick={this.handleDelete}/>
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(FriendRequestDropdownItem);