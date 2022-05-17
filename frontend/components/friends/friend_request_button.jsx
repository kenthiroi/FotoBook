import React from "react";
import { connect } from "react-redux"
import { createFriendRequest } from "../../actions/friend_request_actions";

const mSTP = (state) => {
  return {
    user_id: state.session.id,
    friend_reqs: state.entities.friendRequests
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
    let friendRequest = this.props.friend_reqs.find(fr => fr.user_id === this.props.profile_id) || this.props.friend_reqs.find(fr => fr.receiver_id === this.props.profile_id);
    if (!!friendRequest) {
      this.state = {
        requestMade: true,
      }
    } else {
      this.state = {
        requestMade: false,
      }
    }

    console.log(friendRequest);

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
      {this.state.requestMade ? 
        <input type="submit" value="Add Friend" onClick={this.handleFriendRequest}/>
       : <></>
      //  Add button here to handle removing friend
      }
      </div>
    )
    
  }
}

export default connect(mSTP, mDTP)(FriendRequestButton);