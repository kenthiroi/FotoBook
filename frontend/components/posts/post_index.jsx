import React from 'react';
import PostItem from './post_index_item';

class PostIndex extends React.Component{

  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchAllPosts()
  }

  // componentDidUpdate(prevProps){
  //   console.log("did update", this.props.posts);
  //   console.log("prevProps", prevProps.posts);
  // }
  
  
  render(){
    // if (this.props.loading) { return <LoadingIcon />; }
    // console.log("posts", this.props.posts);
    
    return (
      <div className="post-index">
        {this.props.posts.reverse().map(post => {
          return <PostItem key={post.id} post={post}/>
        })
        }
      </div>
    )
  }
}

export default PostIndex;