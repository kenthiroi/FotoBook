import React from 'react';
import ProfileButton from "./profileButton";
import ProfileSideButton from "./profileSideButton";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdWork } from "react-icons/md"
import { Link } from "react-router-dom"
import { withRouter } from 'react-router-dom';

function SideNav({userInfo, history}){

  let homePage = history.location.pathname === `/newsfeed`;

  return(
    <div className={homePage ? 'expand-sidenav sidenav' : 'collapse-sidenav sidenav'}>
      <div className={homePage ? 'active-nav-button sidenav-btn' : 'sidenav-btn'} onClick={() => history.push('/newsfeed')}>
        {homePage ? <AiFillHome/> : <AiOutlineHome/>}
      </div>
      <ProfileSideButton onHomepage={homePage}/>
      <Link to="github" className="sidenav-btn">
        <div><BsGithub/></div>{homePage ? "Github" : ""}
      </Link>
      <Link to="linkedin" className="sidenav-btn">
        <div><BsLinkedin/></div>{homePage ? "LinkedIn" : ""}
      </Link>
      <Link to="newsfeed" className="sidenav-btn">
        <div><MdWork/></div> {homePage ? "My Work" : ""}
      </Link>
    </div>
  )
}

export default (withRouter(SideNav));