import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../../actions/session_actions"
import { withRouter } from 'react-router-dom';
import FriendRequestDropdown from "../friends/friend_request_dropdown";
import CreatePostDropdown from "./create_post_dropdown";
import SettingsDropdown from "./settingsDropdown";

const mapStateToProps = state => {
  return {
    sessionId: state.session.id,
    user: state.entities.user[state.session.id],
    name: state.entities.user[state.session.id].first_name,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  }
}



class HeaderNav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      onProfilePage: false,
      createDropdown: false,
      notificationDropdown: false,
      logoutDropdown: false,
    }

    this.handleOpenDropdown = this.handleOpenDropdown.bind(this);
    this.handleCloseDropdown = this.handleCloseDropdown.bind(this);
  }

  handleOpenDropdown(type){
    return (e) => {
      this.setState({
        createDropdown: false,
        notificationDropdown: false,
        logoutDropdown: false,
      })
      this.setState({[type]: true})
    }
  }
  
  handleCloseDropdown(type){
    return (e) => {
      this.setState({[type]: false})
    }
  }



  render() {
    return <div id="navbar">
      <div id="header-left">
        <div id="header-link">
          <Link to="/" id="header-icon">
            <div id="icon-font">f</div>
          </Link>
        </div>
      </div>
      <div id="header-center">
        <button id={this.state.onHomePage ? 'active-nav-button' : ''} onClick={() => this.props.history.push('/newsfeed')} className="center-btn">
          Home
        </button>
        <Link to="github">
          Github
        </Link>
        <Link to="linkedin">
          LinkedIn
        </Link>
        <Link to="newsfeed">
          My Site
        </Link>
      </div>
      <div id="header-right">
        <button id={this.state.onProfilePage ? 'active-nav-button profile-button' : 'profile-button'} onClick={() => this.props.history.push(`/profile/${this.props.sessionId}`)} className="util-btn">
          {this.props.name}
        </button>
        <CreatePostDropdown/>
        <button id={this.state.notificationDropdown ? 'active-nav-button' : ''} onClick={this.handleOpenDropdown("notificationDropdown")} onBlur={() => this.handleCloseDropdown("notificationDropdown")} className="util-btn">
          <div className="dropdown">&#xf0f3;</div>
        </button>
        <FriendRequestDropdown/>
        {this.state.notificationDropdown ? 
        <div className="util-container">
            {/* renders all notifications */}
        </div> : <></>}
        <SettingsDropdown/>
      </div>
    </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderNav))