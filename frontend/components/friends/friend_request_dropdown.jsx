import React from "react";
import { connect } from "react-redux"
import { createFriend } from "../../actions/friend_actions";
import { deleteFriendRequest, getFriendRequests } from "../../actions/friend_request_actions";
import { selectAllFriendRequests } from "../../reducers/selectors/friend_request_selector";
import FriendRequestDropdownItem from "./friend_request_dropdown_item";

const mSTP = (state) => {
  return {
    user_id: state.session.id,
    friendReq: selectAllFriendRequests(state)
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
    this.props.fetchAllFriendRequests(this.props.user_id);
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