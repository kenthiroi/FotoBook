import React from 'react';
import { clearUserErrors } from '../../actions/user_actions';

const mSTP = (state) => {
  return {
    userErrors: state.errors.user,
  }
}

const mDTP = (dispatch) => {
  return {
    clearUserErrors: () => dispatch(clearUserErrors)
  }
}

function ErrorMsg(props){
  
  if(!!props.userErrors){
    return(
      <div id='global-error-bubble'>
        {props.userErrors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
    )
  }
  
}

export default connect(mSTP, mDTP)(withRouter(ErrorMsg));