import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { selectUsersPosts } from '../../reducers/selectors/posts_selector';
import { getAllPostsByUserId } from '../../actions/post_actions';
import PostItem from '../posts/post_index_item';

const mSTP = (state, ownProps) => {
  return {
    sessionId: state.session.id,
    userPosts: selectUsersPosts(state, ownProps.userId),
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
    if (this.props.userId !== prevProps.userId){
      this.fetchPosts();
    }
  }

  fetchPosts(){
    const formData = new FormData();
    console.log(this.props.userId);
    formData.append('post[user_id]', this.props.userId);
    this.props.fetchUsersPosts(formData);
  }
  
  render(){
    console.log('wall rendering');
    return (
      <div className="user-posts">
        {!this.state.posts ? 
        <></>
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