import * as FriendRequestAPIUtil from '../util/friend_requests_api_util'
import { receiveUserErrors } from './user_actions'

export const RECEIVE_FRIEND_REQUESTS = "RECEIVE_FRIEND_REQUESTS"
export const RECEIVE_FRIEND_REQUEST = "RECEIVE_FRIEND_REQUEST"
export const REMOVE_FRIEND_REQUEST = "REMOVE_FRIEND_REQUEST"

export const receiveAllFriendRequests = friendRequests => ({
  type: RECEIVE_FRIEND_REQUESTS,
  friendRequests
})

export const receiveFriendRequest = friendRequest => ({
  type: RECEIVE_FRIEND_REQUEST,
  friendRequest
})

export const removeFriendRequest = friendRequest =>  ({
  type: REMOVE_FRIEND_REQUEST,
  friendRequest
})

export const getFriendRequests = userId => dispatch => (
  FriendRequestAPIUtil.getFriendRequests(userId).then(friendRequests =>
    dispatch(receiveAllFriendRequests(friendRequests))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  )
)

export const createFriendRequest = friendRequest => dispatch => (
  FriendRequestAPIUtil.createFriendRequest(friendRequest).then(friendRequest => (
    dispatch(receiveFriendRequest(friendRequest))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
)

export const deleteFriendRequest = friendRequestId => dispatch => (
  FriendRequestAPIUtil.deleteFriendRequest(friendRequestId).then(friendRequest => (
    dispatch(removeFriendRequest(friendRequest))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
)