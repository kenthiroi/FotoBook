import { 
  RECEIVE_POST, 
  RECEIVE_POSTS, 
  REMOVE_POST,
} from "../actions/post_actions";

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
      delete newState[action.post.id];
      return newState;
    default:
      return state;
  }
}

export default postsReducer;