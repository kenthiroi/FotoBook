import React, { useState } from 'react';
import { BsFillExclamationCircleFill } from "react-icons/bs";

function ErrorBubble (props){
  const [hovering, setHovering] = useState(false);

  return (
    <div className={'error-icon'} onMouseOver={() => setHovering(true)}>
      <BsFillExclamationCircleFill/>
      {hovering && <div className='error-bubble'>{props.error}</div>}
    </div>
  )
}

export default ErrorBubble;