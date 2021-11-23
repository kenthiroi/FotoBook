import { combineReducers } from 'redux';

import entities from './entities_reducer';
import session from './session_reducer';
import modal from './modal_reducer';

const rootReducer = combineReducers({
  entities,
  session,
  modal,
});

export default rootReducer;
