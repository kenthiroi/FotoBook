import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { selectUsersPosts } from '../../reducers/selectors/posts_selector';
import PostIndexItem from '../posts/post_index_item';

const mSTP = (state, ownProps) => {
  return {
    sessionId: state.session.id,
    userPosts: selectUsersPosts(state, ownProps.userId),
  }
}

const mDTP = dispatch => ({
  // create fetch for user posts
})


class UserProfileWall extends React.Component{

  constructor(props){
    super(props)
  }
  
  render(){
    return (
      <div className="user-posts">
        {!this.props.userPosts ? 
        <></>
        :
        Object.values(this.props.userPosts).map(post => {
          return <PostIndexItem key={post.id} post={post}/>
        })
      }
    </div>
    )
  }
}

export default connect(mSTP, mDTP)(withRouter(UserProfileWall));