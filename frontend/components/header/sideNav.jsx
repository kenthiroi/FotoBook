import React from 'react';
import ProfileButton from "./profileButton";
import ProfileSideButton from "./profileSideButton";
import { connect } from "react-redux"
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdWork } from "react-icons/md"
import { Link } from "react-router-dom"
import { withRouter } from 'react-router-dom';

const mSTP = (state) => {
  return {
    sessionId: state.session.id
  }
}

function SideNav({userInfo, history, sessionId}){

  let onHomePage = history.location.pathname === `/newsfeed`;
  let onProfile = history.location.pathname === `/profile/${sessionId}`

  return(
    <div className={onHomePage ? 'expand-sidenav sidenav' : 'collapse-sidenav sidenav'}>
      <div className='sidenav-btn' id='sidenav-home-button' onClick={() => history.push('/newsfeed')}>
        <span className={onHomePage ? 'active-sidenav-btn' : ''}></span>
        {onHomePage ? <><AiFillHome/>Home</> : <AiFillHome/>}
      </div>
      <ProfileSideButton onHomepage={onHomePage} onProfile={onProfile}/>
      <Link to="github" className="sidenav-btn">
        <div><BsGithub/></div>{onHomePage ? "Github" : ""}
      </Link>
      <Link to="linkedin" className="sidenav-btn">
        <div><BsLinkedin/></div>{onHomePage ? "LinkedIn" : ""}
      </Link>
      <Link to="newsfeed" className="sidenav-btn">
        <div><MdWork/></div> {onHomePage ? "My Work" : ""}
      </Link>
    </div>
  )
}

export default connect(mSTP, null)(withRouter(SideNav));