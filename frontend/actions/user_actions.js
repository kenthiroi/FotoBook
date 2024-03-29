import * as APIUtil from '../util/session_api_util';
import * as UserAPIUtil from '../util/users_api_util';

export const RECEIVE_NEW_USER = "RECEIVE_NEW_USER";
export const RECEIVE_USER_INFO = "RECEIVE_USER_INFO"
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const RECEIVE_USER_SEARCH_RESULTS = 'RECEIVE_USER_SEARCH_RESULTS';
export const CLEAR_USER_ERRORS = 'CLEAR_USER_ERRORS';

export const receiveNewUser = user => {
  return {
    type: RECEIVE_NEW_USER,
    user
  }
}

export const receiveUserInfo = user => {
  return {
    type: RECEIVE_USER_INFO,
    user
  }
}

export const receiveUserSearchResults = users => {
  return {
    type: RECEIVE_USER_SEARCH_RESULTS,
    users
  }
}

export const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const clearUserErrors = () => ({
  type: CLEAR_USER_ERRORS,
})

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveNewUser(user))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
);

export const updateUser = user => dispatch => (
  UserAPIUtil.updateUser(user).then(user => (
    dispatch(receiveUserInfo(user))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
);

export const fetchUser = userId => dispatch => (
  UserAPIUtil.getUser(userId).then(user => (
    dispatch(receiveUserInfo(user))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
);

export const fetchSearchResults = formData => dispatch => (
  UserAPIUtil.searchUsers(formData).then(users => (
    dispatch(receiveUserSearchResults(users))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
);