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
import { MdWork } from "react-icons/md";


const mapStateToProps = (state, ownProps) => {
  let user = state.entities.user[state.session.id];
  let defaultImg = 'https://i.imgur.com/7x6fTDK.png';
  let userImg;
  try {
    // userImg = state.entities.posts[state.entities.user[state.session.id].profile_picture];
    if (typeof user.photoUrl === 'undefined'){
      userImg = defaultImg;
    } else {
      userImg = user.photoUrl;
    }
  } catch (e) {
    userImg = defaultImg;
  }
  return {
    sessionId: state.session.id,
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
    // console.log(this.props.userImg);
    // if (!!this.props.user){
    //   this.props.history.push("/");
    // }

    return <div id="navbar">
      <div id="header-left">
        <div id="header-link">
          <Link to="/" id="header-icon">
            <div id="icon-font">fotobook</div>
          </Link>
        </div>
      </div>
      <div id="header-right">
        <NotificationDropdown/>
        <SettingsDropdown logout={this.props.logout} profilePicture={this.props.userImg}/>
      </div>
    </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderNav))