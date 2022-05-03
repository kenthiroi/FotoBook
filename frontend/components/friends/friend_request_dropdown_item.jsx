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
  }

  render(){
    return (
      <div>
        
      </div>
    )
    
  }
}

export default connect(mSTP, mDTP)(FriendRequestDropdownItem);