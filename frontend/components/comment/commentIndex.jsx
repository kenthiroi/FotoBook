import React from "react";
import CommentItem from "./commentItem";


function CommentIndex (props){
  return (
    <div className="post-comments">
      {!this.props.comments ? 
        <></>
        :
        Object.values(this.props.comments).map(comment => {
          return <CommentItem key={comment.id} comment={comment}/>
        })
      }
    </div>
  )
}

export default CommentIndex;