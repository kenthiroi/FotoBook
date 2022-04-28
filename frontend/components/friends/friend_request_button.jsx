import React from "react";
import { connect } from "react-redux"

const mSTP = (state) => {
  return {
    user_id: state.session.id
  }
}

const mDTP = (dispatch) => {
  return {

  }
}

class FriendRequestButton extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>

      </div>
    )
    
  }
}

export default connect(mSTP, mDTP)(FriendRequestButton);