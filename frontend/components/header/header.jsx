import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../../actions/session_actions"
import { withRouter } from 'react-router-dom';
import FriendRequestDropdown from "../friends/friendRequestDropdown";
import CreatePostDropdown from "./createPostDropdown";
import SettingsDropdown from "./settingsDropdown";
import ProfileButton from "./profileButton";
import NotificationDropdown from "./notificationDropdown";
import { getPost } from '../../actions/post_actions';
import { fetchUser } from "../../actions/user_actions";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdWork } from "react-icons/md"


const mapStateToProps = (state, ownProps) => {
  let user = state.entities.user[state.session.id];
  let userImg;
  try {
    // userImg = state.entities.posts[state.entities.user[state.session.id].profile_picture];
    userImg = user.photoUrl,
    console
  } catch (e) {
    userImg = 'https://i.imgur.com/7x6fTDK.png';
  }
  return {
    sessionId: state.session.id,
    profileImgId: state.entities.user[state.session.id].profile_picture,
    userImg,
    user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    getPost: (postId) => dispatch(getPost(postId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
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

  componentDidMount(){
    if (!this.props.userImg){
      this.props.fetchUser(this.props.sessionId);
    }
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
    let currentPage = this.props.history.location.pathname === `/newsfeed`;

    return <div id="navbar">
      <div id="header-left">
        <div id="header-link">
          <Link to="/" id="header-icon">
            <div id="icon-font">f</div>
          </Link>
        </div>
      </div>
      <div id="header-center">
        <button id={currentPage ? 'active-nav-button' : ''} onClick={() => this.props.history.push('/newsfeed')} className="center-btn">
          {this.state.onHomePage ? <AiFillHome/> : <AiOutlineHome/>}
        </button>
        <Link to="github">
          <BsGithub/>
        </Link>
        <Link to="linkedin">
          <BsLinkedin/>
        </Link>
        <Link to="newsfeed">
          <MdWork/>
        </Link>
      </div>
      <div id="header-right">
        <ProfileButton/>
        <CreatePostDropdown/>
        <NotificationDropdown/>
        <SettingsDropdown logout={this.props.logout} profilePicture={this.props.userImg}/>
      </div>
    </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderNav))