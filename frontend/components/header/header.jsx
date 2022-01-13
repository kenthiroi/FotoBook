import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../../actions/session_actions"
import { withRouter } from 'react-router-dom';
import { openModal } from "../../actions/modal_actions"

const mapStateToProps = state => {
  console.log(state);
  return {
    user: state.entities.user[state.session.id],
    name: state.entities.user[state.session.id].first_name,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    postModal: () => dispatch(openModal('createPost')),
  }
}



class headerNav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      onProfilePage: false,
      createDropdown: false,
      notificationDropdown: false,
      logoutDropdown: false,
    }
    this.handleOpenDropdown = this.handleOpenDropdown.bind(this);
    this.handleCloseDropdown = this.handleCloseDropdown.bind(this)
  }

  handleOpenDropdown(type){
    // debugger
    return (e) => {
      this.setState({
        // onProfilePage: false,
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
        <button id={this.state.onProfilePage ? 'active-nav-button profile-button' : 'profile-button'} onClick={() => this.props.history.push('/profile')} className="util-btn">
          {this.props.name}
        </button>
        <button id={this.state.createDropdown ? 'active-nav-button' : ''} onClick={this.handleOpenDropdown("createDropdown")} onBlur={this.handleCloseDropdown("createDropdown")} className="util-btn">
          <div className="dropdown">&#43;</div>
        </button>
        {this.state.createDropdown ? 
        <div className="util-container">
          <button onMouseDown={this.props.postModal} className="logout-btn">
            <div>Create Post</div>
          </button>
        </div> : <></>}
        <button id={this.state.notificationDropdown ? 'active-nav-button' : ''} onClick={this.handleOpenDropdown("notificationDropdown")} onBlur={this.handleCloseDropdown("notificationDropdown")} className="util-btn">
          <div className="dropdown">&#xf0f3;</div>
        </button>
        {this.state.notificationDropdown ? 
        <div className="util-container">
          <button onMouseDown={this.props.logout} className="logout-btn">
            {/* renders all notifications */}
          </button>
        </div> : <></>}
        <button id={this.state.logoutDropdown ? 'active-nav-button' : ''} onClick={this.handleOpenDropdown("logoutDropdown")} onBlur={this.handleCloseDropdown("logoutDropdown")} className="util-btn">
          <div className="dropdown">&#8964;</div>
        </button>
        {this.state.logoutDropdown ? 
        <div className="util-container">
          <button onMouseDown={this.props.logout} className="logout-btn">
            <div>Log out</div>
          </button>
        </div> : <></>}
      </div>
    </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(headerNav))