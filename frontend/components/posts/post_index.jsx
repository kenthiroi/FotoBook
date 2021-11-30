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
      <section className="post-index">
        <ul>
          {this.props.posts.map(post => (
          <PostItem key={post.id} post={post}/>))
          }
        </ul>
      </section>
    )
  }
}

export default PostIndex;