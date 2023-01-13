import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from "../../actions/session_actions";


export const loginErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}