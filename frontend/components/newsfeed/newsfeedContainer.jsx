import { connect } from "react-redux"
import { openModal } from "../../actions/modal_actions"
import { logout } from "../../actions/session_actions"
import Newsfeed from "./newsfeed"

const mSTP = state => {
  let userInfo = state.entities.user[state.session.id];
  let userImg;
  try {
    // userImg = state.entities.posts[state.entities.user[state.session.id].profile_picture];
    userImg = userInfo.photoUrl,
    console
  } catch (e) {
    userImg = 'https://i.imgur.com/7x6fTDK.png';
  }

  return {
    userInfo,
    userImg,
  }
}

const mDTP = dispatch => {
  return {
    openModal: () => dispatch(openModal({type:'createPost'}))
  }
}

export default connect(mSTP, mDTP)(Newsfeed)