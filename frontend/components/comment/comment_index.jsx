import React from "react";
import CommentItem from "./comment_item";


class CommentIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="post-comments">
        {this.props.comments.map(comment => {
          return <CommentItem key={comment.id} comment={comment}/>
        })}
      </div>
    )
    
  }
}

export default connect(mSTP, mDTP)(CommentIndex)