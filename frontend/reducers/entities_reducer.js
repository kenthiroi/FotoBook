import { combineReducers } from 'redux';

import user from './users_reducer'
import posts from './posts_reducer';
import friends from './friends_reducer';
import friendRequests from './friend_request_reducer';

export default combineReducers({
  user, posts, friends, friendRequests,
});
