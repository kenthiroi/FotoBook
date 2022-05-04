import React from "react";
import { connect } from "react-redux"
import { createFriendRequest } from "../../actions/friend_request_actions";

const mSTP = (state) => {
  return {
    user_id: state.session.id
  }
}

const mDTP = (dispatch) => {
  return {
    createFriendRequest: (friendReq) => dispatch(createFriendRequest(friendReq))
  }
}

class FriendRequestButton extends React.Component{
  constructor(props){
    super(props);

    this.handleFriendRequest = this.handleFriendRequest.bind(this);
  }

  handleFriendRequest(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('friend_request[sender_id]', this.props.user_id);
    formData.append('friend_request[receiver_id]', this.props.profile_id);

    this.props.createFriendRequest(formData);
  }

  render(){
    return (
      <div className="friend-request-box">
        <input type="submit" onClick={this.handleFriendRequest}/>
      </div>
    )
    
  }
}

export default connect(mSTP, mDTP)(FriendRequestButton);