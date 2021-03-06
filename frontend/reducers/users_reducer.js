import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER_INFO } from '../actions/user_actions';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
      // return { currentUser: action.currentUser }
      // return action.user
    case RECEIVE_USER_INFO:
      return Object.assign({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
};

export default usersReducer;