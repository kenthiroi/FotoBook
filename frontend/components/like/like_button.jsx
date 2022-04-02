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
    let likesArr = (this.props.likes) ? Object.values(this.props.likes) : [];
    if (likesArr.some(like => like.user_id === this.props.user_id)) {
      let thisLike = likesArr.find(like => like.user_id === this.props.user_id);
      this.state = {
        likedByUser: true,
        like: thisLike,
        count: likesArr.length,
        likes: likesArr,
      }
    } else {
      this.state = {
        likedByUser: false,
        like: null,
        count: likesArr.length,
        likes: likesArr,
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
      this.props.createLike(like).then((res) => {
        this.setState({likedByUser: true, like: res.like, count: this.state.count + 1});
        this.setState({likesArr})
      });
      this.state.like
      // let newLike = this.state.likes.find(like => like.user_id === this.props.user_id);
      console.log(this.state.like);
    } else {
      // if (!this.state.likeId) {
      //   let newLike = this.props.likes.find(like => like.user_id === this.props.user_id);
      //   this.setState({likeId: newLike.id});
      // }
      this.props.deleteLike(this.state.like.id);
      // let likeIndex = this.props.likes.indexOf(this.state.like);
      // this.props.likes.splice(likeIndex, 1);
      this.setState({likedByUser: false, like: null, count: this.state.count - 1});
    }
  }

  render(){
    return (
      <div className="like-box">
        {this.state.count !== 0 ? 
          <div className="liked-by">
            {this.state.count} people like this.
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