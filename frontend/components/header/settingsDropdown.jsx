import React from "react";
import { connect } from "react-redux"

const mSTP = (state) => {
  return {
    sessionId: state.session.id,
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
        <button id={this.state.openDropdown ? 'active-nav-button' : ''} onClick={this.state.openDropdown ? this.closeDropdown : this.openDropdown} onBlur={this.closeDropdown} className="util-btn">
          <div className="dropdown">&#8964;</div>
        </button>
        {this.state.openDropdown ? 
        <div className="util-container">
          <button onMouseDown={this.props.logout} className="logout-btn">
            <div>Log out</div>
          </button>
        </div> : <></>}
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(SettingsDropdown);