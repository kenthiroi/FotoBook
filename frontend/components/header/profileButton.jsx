import React from "react";
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom';


const mSTP = (state, ownProps) => {
  return {
    sessionId: state.session.id,
    profileId: ownProps,
    name: state.entities.user[state.session.id].first_name,
  }
}

// const mDTP = (dispatch) => {
//   return {
    
//   }
// }

class ProfileButton extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      onProfile: false,
    }

    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  openDropdown(e){
    e.preventDefault();
    this.setState({openDropdown: true});
  }
  
  closeDropdown(){
    this.setState({openDropdown: false});
  }

  render(){
    return (
      <div>
        <button id={this.state.onProfilePage ? 'active-nav-button profile-button' : 'profile-button'} onClick={() => this.props.history.push(`/profile/${this.props.sessionId}`)} className="util-btn">
          {this.props.name}
        </button>
      </div>
    )
  }
}

export default connect(mSTP, null)(withRouter(ProfileButton));