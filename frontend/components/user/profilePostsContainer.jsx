import React from "react";
import { useState } from "react";
import ProfileIntro from "./profileIntro";
import ProfileWall from "./profileWall";
import useWindowDimensions from '../customHooks';

function ProfilePostsContainer({userInfo, userImg, isOwner, handleSwitch}){
  const { width } = useWindowDimensions();
  const [mobileView, setMobileView] = useState(width >= 900);

  console.log(width);

  return (
    <div className="profile-posts-container">
      {mobileView ? 
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
          <div className="profile-left">
            <ProfileIntro userInfo={userInfo} isOwner={isOwner} handleSwitch={handleSwitch}/>
          </div>
          <div className="profile-right">
            <ProfileWall userInfo={userInfo} userImg={userImg} isOwner={isOwner}/>
          </div>
        </>
      }
    </div>
  )
}

export default ProfilePostsContainer