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
        like: thisLike
      }
    } else {
      this.state = {
        likedByUser: false,
        like: null,
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
      this.props.createLike(like);
      let newLike = this.props.likes.find(like => like.user_id === this.props.user_id);
      this.setState({likedByUser: true, like: newLike});
    } else {
      // if (!this.state.likeId) {
      //   let newLike = this.props.likes.find(like => like.user_id === this.props.user_id);
      //   this.setState({likeId: newLike.id});
      // }
      this.props.deleteLike(this.state.like.id);
      let likeIndex = this.props.likes.indexOf(this.state.like);
      this.props.likes.splice(likeIndex, 1);
      console.log(this.props.likes.length)
      this.setState({likedByUser: false, like: null});
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