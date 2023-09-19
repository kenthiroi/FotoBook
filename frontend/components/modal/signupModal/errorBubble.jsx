import React, { useState } from 'react';
import { BsFillExclamationCircleFill } from "react-icons/bs";

function ErrorBubble (props){

  return (
    <div className='error-icon' onMouseOver={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
      <BsFillExclamationCircleFill/>
      {props.showError && <div className='error-bubble'>{props.error}</div>}
    </div>
  )
}

export default ErrorBubble;