import React from 'react';
import ProfileButton from "./profileButton";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdWork } from "react-icons/md"
import { Link } from "react-router-dom"
import { withRouter } from 'react-router-dom';

function SideNav({userInfo, history}){

  let currentPage = history.location.pathname === `/newsfeed`;

  return(
    <div className={currentPage ? 'expand-sidenav sidenav' : 'collapse-sidenav sidenav'}>
      <button className={currentPage ? 'active-nav-button center-btn' : 'center-btn'} onClick={() => history.push('/newsfeed')}>
        {currentPage ? <AiFillHome/> : <AiOutlineHome/>}
      </button>
      <ProfileButton/>
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
  )
}

export default (withRouter(SideNav));