import React from 'react';
import { connect } from "react-redux";
import FriendItem from './friendItem';
import { fetchUser } from '../../actions/user_actions';

const mSTP = (state) => {
  return {
    sessionId: state.session.id,
    users: state.entities.user,
  }
}

const mDTP = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  }
}

function FriendIndex({sessionId, users, fetchUser, friendList}){

  return(
    <div className='friend-tab'>
      <h2>Friends</h2>
      <div className='friend-index'>
        {!friendList ? 
          <></>
          :
          Object.values(friendList).reverse().map(friend => {
          let friendId;

          if (friend.user_id === sessionId) {
            friendId = friend.friend_id;
          } else {
            friendId = friend.user_id;
          }

          let userInfo = users[friendId];

          if (!!userInfo){
            return <FriendItem key={friend.id} user={userInfo}/>
          } else {
            fetchUser(friendId).then(res => {
              return <FriendItem key={friend.id} user={res.user}/>
            })
          }
        })
        }
      </div>
    </div>
  )
}

export default connect(mSTP, mDTP)(FriendIndex);