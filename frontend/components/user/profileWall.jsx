import React from 'react';
import { connect } from 'react-redux';
import FriendRequestButton from '../friends/friendRequestButton';
import PostIndexItem from '../posts/post_index_item';

const mSTP = state => ({
  sessionId: state.session.id,
})

const mDTP = dispatch => ({
  // create fetch for user posts
})


class UserProfileWall extends React.Component{

  constructor(props){
    super(props)
    
    this.state = {
    }
    
  }

  
  render(){
    
    return (
      <div className="user-posts">
          {!this.props.posts ? 
          <></>
          :
          Object.values(this.props.posts).map(post => {
            return <PostIndexItem key={post.id} post={post}/>
          })
        }
      </div>
      )
    }
  }

export default connect(mSTP, mDTP)(UserProfileWall);