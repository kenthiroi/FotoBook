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

class ProfileButton extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      onProfile: false,
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  componentDidMount(){
    this.handleState();
  }

  componentDidUpdate(){
    this.handleState();
  }

  handleState(){
    const currentProfile = parseInt(this.props.history.location.pathname.split('/')[2]);
    // console.log(currentProfile);
    if ((currentProfile === this.props.sessionId) && !this.state.onProfile){
      this.setState({onProfile: true})
    } else if (this.state.onProfile && (currentProfile !== this.props.sessionId)) {
      this.setState({onProfile: false})
    }
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
    console.log(this.props.history);
    return (
      <div>
        <button id={this.state.onProfile ? 'active-nav-button' : ''} onClick={this.handleClick} className="util-btn">
          {this.props.name}
        </button>
      </div>
    )
  }
}

export default connect(mSTP, null)(withRouter(ProfileButton));