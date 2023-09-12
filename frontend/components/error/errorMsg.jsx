import React from 'react';
import { connect } from 'react-redux';
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
    setTimeout(props.clearUserErrors, 5000);
    return(
      <div id='global-error-bubble'>
        {props.userErrors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
    )
  } else {
    return(
      <div id='global-error-bubble'></div>
    )
  }

}

export default connect(mSTP, mDTP)(ErrorMsg);