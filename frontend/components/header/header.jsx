import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../../actions/session_actions"

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}



class headerNav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      logoutDropdown: false,

    }
    this.handleOpenDropdown = this.handleOpenDropdown.bind(this);
    this.handleCloseDropdown = this.handleCloseDropdown.bind(this)
  }

  handleOpenDropdown(type){
    // debugger
    return (e) => {
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
      <div id="header-center"></div>
      <div id="header-right">
        <button id={this.state.onProfilePage ? 'active-nav-button' : ''} onClick={this.history.push('/profile')} className="util-btn">
          <div className="dropdown">{this.props.user.name}</div>
        </button>
        <button id={this.state.createDropdown ? 'active-nav-button' : ''} onClick={this.handleOpenDropdown("createDropdown")} onBlur={this.handleCloseDropdown("createDropdown")} className="util-btn">
          <div className="dropdown">&#xe145;</div>
        </button>
        {this.state.createDropdown ? 
        <div className="util-container">
          <button onMouseDown={this.props.logout} className="logout-btn">
            <div>Create Post</div>
          </button>
        </div> : <></>}
        <button id={this.state.notificationDropdown ? 'active-nav-button' : ''} onClick={this.handleOpenDropdown("notificationDropdown")} onBlur={this.handleCloseDropdown("notificationDropdown")} className="util-btn">
          <div className="dropdown">&#8964;</div>
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

export default connect(null, mapDispatchToProps)(headerNav)