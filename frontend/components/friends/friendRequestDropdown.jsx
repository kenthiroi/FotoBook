import React from "react";
import { connect } from "react-redux"
import { createFriend } from "../../actions/friend_actions";
import { deleteFriendRequest, getFriendRequests } from "../../actions/friend_request_actions";
import { selectAllFriendRequests, selectReceivingFriendRequests } from "../../reducers/selectors/friend_request_selector";
import FriendRequestDropdownItem from "./friendRequestDropdownItem";

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

    this.state = {
      openDropdown: false,
    }

    this.handleOpenDropdown = this.handleOpenDropdown.bind(this);
    this.handleCloseDropdown = this.handleCloseDropdown.bind(this);
  }

  componentDidMount(){
    this.props.fetchAllFriendRequests(this.props.sessionId);
  }

  handleOpenDropdown(){
    this.setState({openDropdown: true});
    console.log('open');
  }

    
  handleCloseDropdown(){
    this.setState({openDropdown: false});
    console.log('close');
  }

  render(){
    return (
      <div id={this.state.logoutDropdown ? 'active-nav-button' : ''} className="friend-request-dropdown-button" onClick={this.handleOpenDropdown} onBlur={this.handleCloseDropdown}>
        Friend Icon
        {!!this.state.openDropdown ?
          <div className="friend-request-dropdown-window">
            {this.props.friendReq.reverse().map(friendRequest => {
              return <FriendRequestDropdownItem key={friendRequest.id} friendRequest={friendRequest}/>
            })}
          </div> : <></>
        }
      </div>
    )
    
  }
}

export default connect(mSTP, mDTP)(FriendRequestDropdown);