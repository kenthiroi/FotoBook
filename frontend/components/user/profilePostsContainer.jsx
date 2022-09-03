import React from "react";
import ProfileIntro from "./profileIntro";
import ProfileWall from "./profileWall";

function ProfilePostsContainer({userInfo, userImg, isOwner, handleSwitch}){


  return (
    <div className="profile-posts-container">
      <div className="profile-left">
        <ProfileIntro userInfo={userInfo} isOwner={isOwner} handleSwitch={handleSwitch}/>
      </div>
      <div className="profile-right">
        <ProfileWall userInfo={userInfo} userImg={userImg} isOwner={isOwner}/>
      </div>
    </div>
  )
}

export default ProfilePostsContainer