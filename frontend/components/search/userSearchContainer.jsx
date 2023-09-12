import React from "react";
import UserSearchBar from "./userSearchBar";

function UserSearchContainer(props){
  const [focused, setFocused] = React.useState(false);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
    <div id='search-container' onFocus={onFocus} onBlur={onBlur}>
      <UserSearchBar focused={focused} onBlurFunc={onBlur}/>
    </div>
  );
}

export default UserSearchContainer;