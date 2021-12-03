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
    super(props)
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
        <div onClick={this.props.logout}>Logout</div>
      </div>
    </div>
  }
}

export default connect(null, mapDispatchToProps)(headerNav)