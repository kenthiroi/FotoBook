import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER_INFO, RECEIVE_USER_SEARCH_RESULTS } from '../actions/user_actions';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
      // return { currentUser: action.currentUser }
      // return action.user
    case RECEIVE_USER_INFO:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_USER_SEARCH_RESULTS:
      if(!!action.users){
        Object.values(action.users).forEach(user => {
          nextState[user.id] = user
        });
      }
      return nextState;
    default:
      return state;
  }
};

export default usersReducer;