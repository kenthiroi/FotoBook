import React from "react";
import UserSearchBar from "./userSearchBar";

function UserSearchContainer(props){
  const [focused, setFocused] = React.useState(false);

  const onFocus = () => setFocused(true);
  const onBlur = () => {
    console.log('before');
    setFocused(false);
    console.log('after');
  }

  return (
    <div id='search-container' onFocus={onFocus} onBlur={onBlur}>
      <UserSearchBar focused={focused}/>
    </div>
  );
}

export default UserSearchContainer;