import * as FriendAPIUtil from '../util/friends_api_util'
import { receiveUserErrors } from './user_actions'

export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS"
export const RECEIVE_FRIEND = "RECEIVE_FRIEND"
export const REMOVE_FRIEND = "REMOVE_FRIEND"

export const receiveAllFriends = friends => ({
  type: RECEIVE_FRIENDS,
  friends
})

export const receiveFriend = friend => ({
  type: RECEIVE_FRIEND,
  friend
})

export const removeFriend = friend => ({
  type: REMOVE_FRIEND,
  friend
})

export const createFriend = friend => dispatch => (
  FriendAPIUtil.createFriend(friend).then(friend => (
    dispatch(receiveFriend(friend))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
)

export const deleteFriend = friendId => dispatch => (
  FriendAPIUtil.deleteFriend(friendId).then(friend => (
    dispatch(removeFriend(friend))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
)