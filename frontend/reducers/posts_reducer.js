import { 
  RECEIVE_POST, 
  RECEIVE_POSTS, 
  REMOVE_POST,
} from "../actions/post_actions";
import {
  RECEIVE_LIKE,
  REMOVE_LIKE,
} from "../actions/like_actions";
import { 
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT, 
  REMOVE_COMMENT 
} from "../actions/comment_actions";

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
      return newState;
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
    case RECEIVE_COMMENTS:
      if (!!action.comments){
        Object.values(action.comments).forEach(comment => {
          newState[comment.id] = comment;
        })
      }
      return newState;
    case RECEIVE_COMMENT:
      if (!newState[action.comment.post_id].comments){
        newState[action.comment.post_id]['comments'] = {}
      }
      newState[action.comment.post_id].comments[action.comment.id] = action.comment;
      return newState;
    case REMOVE_COMMENT:
      delete newState[action.comment.post_id].comments[action.comment.id];
      return newState;
    default:
      return state;
  }
}

export default postsReducer;