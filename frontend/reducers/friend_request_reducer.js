import { 
  RECEIVE_FRIEND_REQUESTS,  
  RECEIVE_FRIEND_REQUEST,
  REMOVE_FRIEND_REQUEST,
} from '../actions/friend_request_actions';


const friendRequestsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_FRIEND_REQUESTS:
      if(!!action.friendRequests){
        Object.values(action.friendRequests).forEach(friendRequest => {
            nextState[friendRequest.id] = friendRequest;
        });
      }
      return nextState;
    case RECEIVE_FRIEND_REQUEST:
      debugger
      nextState[action.friendRequest.id] = action.friendRequest;
      return nextState;
    case REMOVE_FRIEND_REQUEST:
      delete nextState[action.friendRequest.id];
      return nextState;
    default:
      return state;
  }
};

export default friendRequestsReducer;