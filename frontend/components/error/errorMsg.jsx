import React from 'react';

const mSTP = (state) => {
  return {
    errors: state.errors.user,
  }
}

function ErrorMsg(errors){
  
  return(
    <div id='global-error-bubble'>
      {errors.map((error) => (
        <div>{error}</div>
      ))}
    </div>
  )
}

export default connect(mSTP, null)(withRouter(ErrorMsg));