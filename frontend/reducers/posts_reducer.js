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
  const nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_POSTS:
      if(!!action.posts){
        Object.values(action.posts).forEach(post => {
            nextState[post.id] = post;
        });
      }
      return nextState;
    case RECEIVE_POST:
      nextState[action.post.id] = action.post;
      return nextState;
    case REMOVE_POST:
      delete nextState[action.postId];
      return nextState;
    case RECEIVE_LIKE:
      if (!nextState[action.like.post_id].likes){
        nextState[action.like.post_id]['likes'] = {}
      }
      nextState[action.like.post_id].likes[action.like.id] = action.like;
      return nextState;
    case REMOVE_LIKE:
      delete nextState[action.like.post_id].likes[action.like.id];
      return nextState;
    // case RECEIVE_COMMENTS:
    //   if (!!action.comments){
    //     Object.values(action.comments).forEach(comment => {
    //       nextState[comment.id] = comment;
    //     })
    //   }
    //   return nextState;
    case RECEIVE_COMMENT:
      if (!nextState[action.comment.post_id].comments){
        nextState[action.comment.post_id]['comments'] = {}
      }
      console.log(state);
      nextState[action.comment.post_id].comments[action.comment.id] = action.comment;
      return nextState;
    case REMOVE_COMMENT:
      delete nextState[action.comment.post_id].comments[action.comment.id];
      return nextState;
    default:
      return state;
  }
}

export default postsReducer;