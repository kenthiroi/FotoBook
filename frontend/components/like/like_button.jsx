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
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (likeId) => dispatch(deleteLike(likeId))
  }
}


class LikeButton extends React.Component{
  constructor(props){
    super(props);
    if (this.props.likes.some(like => like.user_id === this.props.user_id)) {
      let thisLike = this.props.likes.find(like => like.user_id === this.props.user_id);
      this.state = {
        likedByUser: true,
        likeId: thisLike.id
      }
    } else {
      this.state = {
        likedByUser: false,
        likeId: null,
      }
    }

    this.toggleLike = this.toggleLike.bind(this);
  }

  toggleLike(){
    if (!this.state.likedByUser) {
      let like = {
        user_id: this.props.user_id,
        post_id: this.props.post_id,
      }
      console.log(like);
      this.props.createLike(like);
      let newLikeId = this.props.likes.find(like => like.user_id === this.props.user_id);
      this.setState({likedByUser: true, likeId: newLikeId});
    } else {
      if (!this.state.likeId) {
        let newLike = this.props.likes.find(like => like.user_id === this.props.user_id);
        this.setState({likeId: newLike.id});
      }
      console.log(this.state.likeId);
      this.props.deleteLike(this.state.likeId);
      this.setState({likedByUser: false, likeId: null});
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
          <button className="like-button" onClick={() => this.toggleLike()}>{this.state.likedByUser ? "Unlike" : "Like"}</button>
          <div className="comment-button">Comment</div>
        </div>
      </div>
    )
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton)