import * as APIUtil from '../util/session_api_util';
import * as UserAPIUtil from '../util/users_api_util';

export const RECEIVE_NEW_USER = "RECEIVE_NEW_USER";
export const RECEIVE_USER_INFO = "RECEIVE_USER_INFO"
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

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

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveNewUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updateUser = user => dispatch => (
  UserAPIUtil.updateUser(user).then(user => (
    dispatch(receiveUserInfo(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchUser = userId => dispatch => (
  UserAPIUtil.getUser(userId).then(user => (
    dispatch(receiveUserInfo(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);