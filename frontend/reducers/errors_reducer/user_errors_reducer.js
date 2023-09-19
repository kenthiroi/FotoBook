import { RECEIVE_USER_ERRORS, CLEAR_USER_ERRORS } from "../../actions/user_actions";


export const userErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    console.log(action);
    switch(action.type){
        case RECEIVE_USER_ERRORS:
            return action.errors;
        case CLEAR_USER_ERRORS:
            return [];
        default:
            return state;
    }
}