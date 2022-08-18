import React from 'react';
import ProfileButton from "./profileButton";
import ProfileSideButton from "./profileSideButton";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdWork } from "react-icons/md"
import { Link } from "react-router-dom"
import { withRouter } from 'react-router-dom';

function SideNav({userInfo, history}){

  let currentPage = history.location.pathname === `/newsfeed`;

  return(
    <div className={currentPage ? 'expand-sidenav sidenav' : 'collapse-sidenav sidenav'}>
      <div className={currentPage ? 'active-nav-button sidenav-btn' : 'sidenav-btn'} onClick={() => history.push('/newsfeed')}>
        {currentPage ? <AiFillHome/> : <AiOutlineHome/>}
      </div>
      <ProfileSideButton/>
      <Link to="github" className="sidenav-btn">
        <BsGithub/> Github
      </Link>
      <Link to="linkedin" className="sidenav-btn">
        <BsLinkedin/> LinkedIn
      </Link>
      <Link to="newsfeed" className="sidenav-btn">
        <MdWork/> My Work
      </Link>
    </div>
  )
}

export default (withRouter(SideNav));