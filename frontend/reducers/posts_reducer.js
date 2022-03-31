import { 
  RECEIVE_POST, 
  RECEIVE_POSTS, 
  REMOVE_POST,
} from "../actions/post_actions";
import {
  RECEIVE_LIKE,
  REMOVE_LIKE,
} from "../actions/like_actions";

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_POSTS:
      if(!!action.posts){
        Object.values(action.posts).forEach(post => {
            newState[post.id] = post;
        });
      }
      return newState
    case RECEIVE_POST:
      newState[action.post.id] = action.post;
      return newState;
    case REMOVE_POST:
      delete newState[action.postId];
      console.log(newState);
      return newState;
    case RECEIVE_LIKE:
      if (!newState[action.like.post_id].likes){
        newState[action.like.post_id]['likes'] = {}
      }
      newState[action.like.post_id].likes[action.like.id] = action.like;
      return newState;
    case REMOVE_LIKE:
      delete newState[action.like.post_id].likes[action.like.id];
      return newState;
    default:
      return state;
  }
}

export default postsReducer;