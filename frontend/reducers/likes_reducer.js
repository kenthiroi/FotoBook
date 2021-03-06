import {
  RECEIVE_LIKE,
  REMOVE_LIKE
} from "../action/like_actions";

const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_LIKE:
      nextState[action.like.id] = action.like;
      return nextState;
    case REMOVE_LIKE:
      delete nextState[action.likeId];
      return nextState;
  }
}

export default likesReducer