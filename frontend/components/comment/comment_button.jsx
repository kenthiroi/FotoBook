// import React from "react";
// import { connect } from "react-redux";
// import { openModal } from "../../actions/modal_actions";

// const mapStateToProps = (state) => {
//   return {
//     // likes: getAllLikesFromPosts(state),
//     user_id: state.session.id
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     commentModal: () => dispatch(openModal({type:'createComment'})),
//   }
// }


// class CommentButton extends React.Component{
//   constructor(props){
//     super(props);
//   }

//   render(){
//     return (
//       <div className="comment-box">
//         <div className="button-section">
//           <button className="like-button" onClick={this.}>{this.state.likedByUser ? "Unlike" : "Like"}</button>
//           <div className="comment-button">Comment</div>
//         </div>
//       </div>
//     )
    
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LikeAndCommentButton)