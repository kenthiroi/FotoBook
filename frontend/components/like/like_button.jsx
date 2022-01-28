import React from "react";
import { connect } from "react-redux";
import { createLike, deleteLike } from "../../actions/like_actions";

const mapStateToProps = (state) => {
  return {
    // likes: getAllLikesFromPosts(state),
    user_id: state.session.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createLike: (like) => createLike(like),
    deleteLike: (likeId) => deleteLike(likeId)
  }
}


class LikeButton extends React.Component{
  constructor(props){
    super(props);
    if (this.props.likes.some(like => like.user_id === this.props.user_id)) {
      this.state = {
        likedByUser: true,
      }
    } else {
      this.state = {
        likedByUser: false,
      }
    }

    this.toggleLike = this.toggleLike.bind(this);
  }

  toggleLike(){
    if (!this.state.likedByUser) {
      this.setState({likedByUser: true});
      let like = {
        user_id: this.props.user_id,
        post_id: this.props.post_id,
      }
      this.props.createLike(like);
    } else {
      this.setState({likedByUser: false});
      this.props.deleteLike();
    }
  }

  render(){
    return (
      <div className="like-box">
        {this.props.likes.length !== 0 ? 
          <div className="liked-by">
            {this.props.likes.length} people like this.
          </div>
          :
          <></>
        }
        <div className="button-section">
          <button className="like-button" onClick={() => this.toggleLike()}>Like</button>
          <div className="comment-button">Comment</div>
        </div>
      </div>
    )
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton)