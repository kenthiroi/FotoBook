import {
  RECEIVE_LIKE,
  REMOVE_LIKE
} from "../action/like_actions";

const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_LIKE:
      newState[action.like.id] = action.like;
      console.log(newState);
      return newState;
    case REMOVE_LIKE:
      delete newState[action.likeId];
      return newState;
  }
}

export default likesReducer