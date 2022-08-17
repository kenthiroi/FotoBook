import React from "react";
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
  return {
    sessionId: state.session.id,
    name: state.entities.user[state.session.id].first_name,
  }
}

// const mDTP = (dispatch) => {
//   return {
    
//   }
// }

function SidenavProfileButton ({userInfo}){

  handleClick(e){
    e.preventDefault();
    if (this.props.history.location.pathname !== `/profile/${sessionId}`){
      this.props.history.push(`/profile/${sessionId}`);
    }
  }

  return (
    <div>
      <button onClick={this.handleClick} className="util-btn">
        <img src={userInfo.photoUrl}/>
        {userInfo.first_name} {userInfo.last_name}
      </button>
    </div>
  )
}

export default connect(mSTP, null)(withRouter(SidenavProfileButton));