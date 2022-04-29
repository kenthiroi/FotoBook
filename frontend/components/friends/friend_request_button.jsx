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
  }

  render(){
    return (
      <div>
        
      </div>
    )
    
  }
}

export default connect(mSTP, mDTP)(FriendRequestButton);