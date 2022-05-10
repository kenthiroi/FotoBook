import { 
  RECEIVE_FRIENDS,  
  RECEIVE_FRIEND,
  REMOVE_FRIEND,
} from '../actions/friend_actions';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_FRIENDS:
      if(!!action.friends){
        Object.values(action.friends).forEach(friend => {
            nextState[friend.id] = friend;
        });
      }
      return nextState;
    case RECEIVE_FRIEND:
      nextState[action.friend.id] = action.friend;
      return nextState;
    case REMOVE_FRIEND:
      delete nextState[action.friend.id];
      return nextState;
    default:
      return state;
  }
};

export default usersReducer;