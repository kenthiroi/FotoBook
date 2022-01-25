import React from "react";
import { createLike, deleteLike } from "../../actions/like_actions";

const mountStateToProps = (state) => {
  return {
    likes: getAllLikesFromPosts(state)
  }
}

const mountDispatchToProps = (dispatch) => {
  return {
    createLike: (like) => createLike(like),
    deleteLike: (likeId) => deleteLike(likeId)
  }
}


class LikeButton extends React.Component{
  
}

export default LikeButton