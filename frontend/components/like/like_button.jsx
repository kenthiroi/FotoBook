import React from "react";
import { createLike, deleteLike } from "../../actions/like_actions";

const mountStateToProps = (state) => {
  return {
    // likes: getAllLikesFromPosts(state)
  }
}

const mountDispatchToProps = (dispatch) => {
  return {
    createLike: (like) => createLike(like),
    deleteLike: (likeId) => deleteLike(likeId)
  }
}


class LikeButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      likedByUser: false,
    }

    this.toggleLike = this.toggleLike.bind(this);
  }

  componentDidMount(){
    //fetch all users that liked the post
  }

  toggleLike(){
    if (!this.state.likedByUser) {
      this.setState({likedByUser: true});

    } else {
      this.setState({likedByUser: false});

    }
  }

  render(){
    return (
      <div className="like-box">
        <div className="liked-by">
          {/* populate if liked by anyone. */}
        </div>
        <div className="button-section">
          <div className="like-button"></div>
          <div className="comment-button"></div>
        </div>
      </div>

    )
    
  }
}

export default LikeButton