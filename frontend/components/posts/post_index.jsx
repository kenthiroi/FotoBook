import React from 'react';
import PostItem from './post_index_item';

class PostIndex extends React.Component{

  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchAllPosts()
  }
  
  render(){
    // if (this.props.loading) { return <LoadingIcon />; }

    return (
      <div className="post-index">
        {this.props.posts.reverse().map(post => (
        <PostItem key={post.id} post={post}/>))
        }
      </div>
    )
  }
}

export default PostIndex;