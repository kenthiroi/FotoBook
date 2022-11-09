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
    <div className='friend-index'>
      {Object.values(friendList).reverse().map(friend => {
        let userInfo;
        let friendId;

        if (friend.user_id === sessionId) {
          friendId = friend.friend_id;
        } else {
          friendId = friend.user_id;
        }

        userInfo = users[friendId];

        if (!!userInfo){
          return <FriendItem key={friend.id} friend={userInfo}/>
        } else {
          fetchUser(friendId).then(res => {
            return <FriendItem key={friend.id} userInfo={res.user}/>
          })
        }
      })
      }
    </div>
  )
}

