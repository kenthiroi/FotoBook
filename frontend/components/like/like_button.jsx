import React from "react";
import { createLike, deleteLike } from "../../actions/like_actions";

const mountStateToProps = (state) => {
  return {
    likes: getAllLikesFromPosts(state),
    user: state.session.id
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
    if (this.props.likes[this])
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
      this.props.createLike();
    } else {
      this.setState({likedByUser: false});
      this.props.deleteLike();
    }
  }

  render(){
    return (
      <div className="like-box">
        <div className="liked-by">
          {/* populate if liked by anyone. */}
        </div>
        <div className="button-section">
          <div className="like-button" onClick={this.toggleLike}>Like</div>
          <div className="comment-button">Comment</div>
        </div>
      </div>
    )
    
  }
}

export default LikeButton