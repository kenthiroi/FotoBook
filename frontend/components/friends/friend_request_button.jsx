import React from "react";
import { connect } from "react-redux"
import { createFriendRequest, getFriendRequests } from "../../actions/friend_request_actions";

const mSTP = (state) => {
  return {
    userId: state.session.id,
    friendReqs: state.entities.friendRequests
  }
}

const mDTP = (dispatch) => {
  return {
    createFriendRequest: (friendReq) => dispatch(createFriendRequest(friendReq)),
    fetchFriendRequests: (userId) => dispatch(getFriendRequests(userId)),
  }
}

class FriendRequestButton extends React.Component{
  constructor(props){
    super(props);
    // console.log(this.props.friendReqs);
    // let friendRequest = this.props.friendReqs.find(fr => fr.user_id === this.props.profileId) || this.props.friendReqs.find(fr => fr.receiver_id === this.props.profileId);
    // if (!!friendRequest) {
    //   this.state = {
    //     requestMade: true,
    //     request: friendRequest,
    //   }
    // } else {
      this.state = {
        requestMade: false,
        request: undefined,
      }
    // }

    // console.log(friendRequest);

    this.handleFriendRequest = this.handleFriendRequest.bind(this);
  }

  componentDidMount(){
    this.props.fetchFriendRequests(this.props.userId);
  }

  componentDidUpdate(){
    let friendRequest = Object.values(this.props.friendReqs);
    let searchFR = friendRequest.find(fr => fr.receiver_id === this.props.profileId);
    console.log(searchFR);
  }

  handleFriendRequest(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('friend_request[sender_id]', this.props.userId);
    formData.append('friend_request[receiver_id]', parseInt(this.props.profileId));

    this.props.createFriendRequest(formData);
  }

  render(){
    return (
      <div className="friend-request-box">
      {!this.state.requestMade ? 
        <input type="submit" value="Add Friend" onClick={this.handleFriendRequest}/>
       : <></>
      //  Add button here to handle removing friend
      }
      </div>
    )
    
  }
}

export default connect(mSTP, mDTP)(FriendRequestButton);