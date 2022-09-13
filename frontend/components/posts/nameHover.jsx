import React, { useState } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function NameHover({user}){

  return (
    <div>
      <Link to={`/profile/${user.id}`} 
        className="user-name">
          {user.first_name} {user.last_name}
      </Link>
    </div>
  )
}

NameHover.propTypes = {
  user: PropTypes.object.isRequired,
}

export default NameHover;