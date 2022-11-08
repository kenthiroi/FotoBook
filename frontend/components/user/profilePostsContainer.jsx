import React from "react";
import { useState } from "react";
import ProfileIntro from "./profileIntro";
import ProfileWall from "./profileWall";
import useWindowDimensions from '../customHooks';

function ProfilePostsContainer({userInfo, userImg, isOwner, handleSwitch}){
  const { width } = useWindowDimensions();

  return (
    <div className="profile-posts-container">
      {width >= 1230 ? 
        <>
          <div className="profile-left">
            <ProfileIntro userInfo={userInfo} isOwner={isOwner} handleSwitch={handleSwitch}/>
          </div>
          <div className="profile-right">
            <ProfileWall userInfo={userInfo} userImg={userImg} isOwner={isOwner}/>
          </div>
        </>
        : 
        <>
            <ProfileIntro userInfo={userInfo} isOwner={isOwner} handleSwitch={handleSwitch}/>
            <ProfileWall userInfo={userInfo} userImg={userImg} isOwner={isOwner}/>
        </>
      }
    </div>
  )
}

export default ProfilePostsContainer