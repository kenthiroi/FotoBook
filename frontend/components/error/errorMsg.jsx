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
    clearUserErrors: () => dispatch(clearUserErrors())
  }
}

function ErrorMsg(props){

  console.log(props.userErrors);
  
  if(props.userErrors.length !== 0){
    setTimeout(props.clearUserErrors, 5000);
    return(
      <div id='global-error-bubble'>
          <div>{props.userErrors}</div>
      </div>
    )
  } else {
    return(
      <></>
    )
  }

}

export default connect(mSTP, mDTP)(ErrorMsg);