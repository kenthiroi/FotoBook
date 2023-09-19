import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { selectUsersPosts } from '../../reducers/selectors/posts_selector';
import { getAllPostsByUserId } from '../../actions/post_actions';
import PostItem from '../posts/postIndexItem';

const mSTP = (state, ownProps) => {
  return {
    sessionId: state.session.id,
    userPosts: selectUsersPosts(state, ownProps.userInfo.id),
  }
}

const mDTP = (dispatch, ownProps) => {
  // create fetch for user posts
  return {
    fetchUsersPosts: (formData) => dispatch(getAllPostsByUserId(formData)),
  }
}


class UserProfileWall extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      posts: this.props.userPosts,
    }

    this.fetchPosts = this.fetchPosts.bind(this);

    this.fetchPosts();
  }

  componentDidUpdate(prevProps){
    if (this.props.userInfo.id !== prevProps.userInfo.id){
      this.fetchPosts();
    }
  }

  fetchPosts(){
    const formData = new FormData();
    console.log(this.props.userInfo.id);
    formData.append('post[user_id]', this.props.userInfo.id);
    this.props.fetchUsersPosts(formData);
  }
  
  render(){
    return (
      <div className="user-posts">
        {this.props.isOwner ? 
          <div className="create-post-container">    
            <div className="create-post-profile-pic">
              <img src={this.props.userImg}/>
            </div>
            <div onClick={this.props.openModal}>Whats on your mind?</div>
          </div>
        : <></>}
        <div id="user-posts-header">Posts</div>
        {this.state.posts.length === 0 ? 
          <div id="empty-posts-section">No Posts Available</div>
            :
          Object.values(this.props.userPosts).reverse().map(post => {
            return <PostItem key={post.id} post={post}/>
          })
        }
    </div>
    )
  }
}

export default connect(mSTP, mDTP)(withRouter(UserProfileWall));