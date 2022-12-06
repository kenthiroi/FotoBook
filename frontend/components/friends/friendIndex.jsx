import React from 'react';
import { connect } from "react-redux";
import FriendItem from './friendItem';
import { fetchUser } from '../../actions/user_actions';

const mSTP = (state) => {
  return {
    users: state.entities.user,
  }
}

const mDTP = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  }
}

function FriendIndex({profileId, isOwner, users, fetchUser, friendList}){


  return(
    <div className='friend-tab'>
      <h2>Friends</h2>
      <div className='friend-index'>
        {!friendList ? 
          <></>
          :
          Object.values(friendList).reverse().map(friend => {
            let friendId;

            if (friend.user_id === profileId) {
              friendId = friend.friend_id;
            } else {
              friendId = friend.user_id;
            }

            let userInfo = users[friendId];

            if (!!userInfo){
              return <FriendItem key={friend.id} friendNodeId={friend.id} user={userInfo} isOwner={isOwner}/>
            } else {
              fetchUser(friendId).then(res => {
                return <FriendItem key={friend.id} friendNodeId={friend.id} user={res.user} isOwner={isOwner}/>
              })
            }
          })
        }
      </div>
    </div>
  )
}

export default connect(mSTP, mDTP)(FriendIndex);