import React from "react";
import { connect } from "react-redux"
import { createFriend } from "../../actions/friend_actions";
import { deleteFriendRequest, getFriendRequests } from "../../actions/friend_request_actions";
import { selectAllFriendRequests, selectReceivingFriendRequests } from "../../reducers/selectors/friend_request_selector";
import FriendRequestDropdownItem from "./friend_request_dropdown_item";

const mSTP = (state) => {
  return {
    sessionId: state.session.id,
    friendReq: selectReceivingFriendRequests(state, state.session.id)
  }
}

const mDTP = (dispatch) => {
  return {
    fetchAllFriendRequests: (userId) => dispatch(getFriendRequests(userId)),
  }
}

class FriendRequestDropdown extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllFriendRequests(this.props.sessionId);
  }

  render(){
    return (
      <div>
        {this.props.friendReq.reverse().map(friendRequest => {
          return <FriendRequestDropdownItem key={friendRequest.id} friendRequest={friendRequest}/>
        })}
      </div>
    )
    
  }
}

export default connect(mSTP, mDTP)(FriendRequestDropdown);