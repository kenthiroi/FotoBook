import React from 'react';

const mSTP = (state) => {
  return {
    errors: state.errors.user,
  }
}

const mDTP = (dispatch) => {
  return {

  }
}

function ErrorMsg({errorMsg}){
  
  return(
    <div></div>
  )
}

export default connect(mSTP, mDTP)(withRouter(SideNav));