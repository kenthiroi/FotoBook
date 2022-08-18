import React from "react";
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
  return {
    sessionId: state.session.id,
    userInfo: state.entities.user[state.session.id],
  }
}

// const mDTP = (dispatch) => {
//   return {
    
//   }
// }

class ProfileSideButton extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    if (this.props.history.location.pathname !== `/profile/${this.props.sessionId}`){
      this.props.history.push(`/profile/${this.props.sessionId}`);
      this.setState({onProfile: true});
    } else {
      this.setState({onProfile: false});
    }
  }

  render(){

    return (
        <div onClick={this.handleClick} className="sidenav-btn">
          <img src={this.props.userInfo.photoUrl}/>
          {this.props.userInfo.first_name} {this.props.userInfo.last_name}
        </div>
    )
  }
}

export default connect(mSTP, null)(withRouter(ProfileSideButton));