import { combineReducers } from 'redux';

import user from './users_reducer'
import posts from './posts_reducer';

export default combineReducers({
  user, posts,
});
