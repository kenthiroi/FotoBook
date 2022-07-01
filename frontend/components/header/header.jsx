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


const mapStateToProps = (state, ownProps) => {
  let userImg;
  try {
    userImg = state.entities.posts[state.entities.user[state.session.id].profile_picture].photoUrl;
  } catch (e) {
    userImg = 'https://i.imgur.com/7x6fTDK.png';
  }
  return {
    sessionId: state.session.id,
    user: state.entities.user[state.session.id],
    profileImgId: state.entities.user[state.session.id].profile_picture,
    userImg: userImg,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    getPost: (postId) => dispatch(getPost(postId)),
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
      this.props.getPost(this.props.profileImgId);
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
        <ProfileButton/>
        <CreatePostDropdown/>
        <NotificationDropdown/>
        <SettingsDropdown logout={this.props.logout} profilePicture={this.props.userImg}/>
      </div>
    </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderNav))