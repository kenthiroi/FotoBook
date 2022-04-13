import { connect } from "react-redux"
import { openModal } from "../../actions/modal_actions"
import { logout } from "../../actions/session_actions"
import Newsfeed from "./newsfeed"

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: () => dispatch(openModal({type:'createPost'}))
  }
}

export default connect(null, mapDispatchToProps)(Newsfeed)