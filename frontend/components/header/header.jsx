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
    return <div>
      <Link to="/" className="header-link">
        <h1>FotoBook</h1>
      </Link>
      <div onClick={this.props.logout}>Logout</div>
    </div>
  }
}

export default connect(null, mapDispatchToProps)(headerNav)