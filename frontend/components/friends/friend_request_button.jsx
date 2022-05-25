import React from "react";
import { connect } from "react-redux"
import { createFriendRequest, getFriendRequests, deleteFriendRequest } from "../../actions/friend_request_actions";

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
        console.log('delete');
        this.props.deleteFriendRequest(this.state.request.id).then(() => {
          this.setState({requestMade: false, request: undefined});
        })
        break;
    }
  }

  render(){
    return (
      <div className="friend-request-box">
      {!this.state.requestMade ? 
        <input type="submit" value="Add Friend" onClick={() => this.handleFriendRequest('add')}/>
       : <input type="submit" value="Delete Request" onClick={() => this.handleFriendRequest('delete')}/>
      //  Add button here to handle removing friend
      }
      </div>
    )
    
  }
}

export default connect(mSTP, mDTP)(FriendRequestButton);