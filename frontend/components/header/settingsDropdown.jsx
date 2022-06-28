import React from "react";
import { connect } from "react-redux"

const mSTP = (state) => {
  return {
    sessionId: state.session.id,
    profilePicture: state.entities.user[state.session.id]
  }
}

const mDTP = (dispatch) => {
  return {
    postModal: () => dispatch(openModal({type:'createPost'})),
  }
}

class SettingsDropdown extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      openDropdown: false,
    }

    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  openDropdown(e){
    e.preventDefault();
    this.setState({openDropdown: true});
  }
  
  closeDropdown(){
    // e.preventDefault();
    this.setState({openDropdown: false});
  }

  render(){
    return (
      <div>
        <button onClick={this.state.openDropdown ? this.closeDropdown : this.openDropdown} onBlur={this.closeDropdown} className="main-util-btn">
          {!!this.props.profilePicture ? 
            <img id="header-profile-pic" src="https://i.imgur.com/7x6fTDK.png"/>
            :
            <img id="header-profile-pic" src={this.props.profilePicture}/>
          }
        </button>
        {this.state.openDropdown ? 
        <div className="util-container">
          <button onMouseDown={this.props.logout} className="logout-btn">
            <div>Log Out</div>
          </button>
        </div> : <></>}
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(SettingsDropdown);