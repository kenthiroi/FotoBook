import { combineReducers } from 'redux';
import { loginErrorsReducer } from './login_errors_reducer';
import { userErrorsReducer } from './user_errors_reducer';

const errorsReducer = combineReducers({
    login: loginErrorsReducer,
    user: userErrorsReducer,
})

export default errorsReducer