import React from "react";
import UserSearchBar from "./userSearchBar";

function UserSearchContainer(props){
  const [focused, setFocused] = React.useState(true);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
    <div id='search-container'>
      <UserSearchBar focused={focused}/>
    </div>
  );
}

export default UserSearchContainer;