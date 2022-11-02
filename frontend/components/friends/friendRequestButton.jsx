import React from "react";
import { connect } from "react-redux"
import { createFriendRequest, getFriendRequests, deleteFriendRequest } from "../../actions/friend_request_actions";
import { MdPersonAddAlt1, MdPersonRemoveAlt1 } from "react-icons/md"

const mSTP = (state) => {
  return {
    userId: state.session.id,
    friendReqs: state.entities.friendRequests
  }
}

const mDTP = (dispatch) => {
  return {
    createFriendRequest: (friendReq) => dispatch(createFriendRequest(friendReq)),
    deleteFriendRequest: (friendReqId) => dispatch(deleteFriendRequest(friendReqId)),
    fetchFriendRequests: (userId) => dispatch(getFriendRequests(userId)),
  }
}

class FriendRequestButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      requestMade: false,
      request: undefined,
    }

    this.handleFriendRequest = this.handleFriendRequest.bind(this);
  }

  componentDidMount(){
    this.props.fetchFriendRequests(this.props.userId);
  }

  componentDidUpdate(){
    let friendRequest = Object.values(this.props.friendReqs);
    let friendRequestResult = friendRequest.find(fr => fr.user_id === this.props.profileId) || friendRequest.find(fr => fr.receiver_id === parseInt(this.props.profileId));
    if (!!friendRequestResult && !this.state.requestMade) {
      this.setState({requestMade: true, request: friendRequestResult})
    }
  }

  handleFriendRequest(params){
    // e.preventDefault();
    switch(params) {
      case 'add':
        const formData = new FormData();
        formData.append('friend_request[sender_id]', this.props.userId);
        formData.append('friend_request[receiver_id]', parseInt(this.props.profileId)); 
        this.props.createFriendRequest(formData);
        break;
      case 'delete':
        this.props.deleteFriendRequest(this.state.request.id).then(() => {
          this.setState({requestMade: false, request: undefined});
        })
        break;
    }
  }

  render(){
    return (
      <div className="friend-request-button">
      {!this.state.requestMade ? 
        <button type="submit" onMouseDown={() => this.handleFriendRequest('add')}>
          <MdPersonAddAlt1/> Add Friend
        </button>
       : <button type="submit" onMouseDown={() => this.handleFriendRequest('delete')}>
          <MdPersonRemoveAlt1/> Remove Friend
       </button>
      }
      </div>
    )
    
  }
}

export default connect(mSTP, mDTP)(FriendRequestButton);