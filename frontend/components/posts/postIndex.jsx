import React from 'react';
import PostItem from './postIndexItem';

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
    console.log(this.props.users);
    
    return (
      <div className="post-index">
        {this.props.posts.reverse().map(post => {
          let userInfo = this.props.users[post.user_id];
          if (!!userInfo){
            console.log('working');
            return <PostItem key={post.id} post={post} userInfo={userInfo}/>
          } else {
            this.props.fetchUser(post.user_id).then(res => {
              return <PostItem key={post.id} post={post} userInfo={res.user}/>
            })
          }
        })
        }
      </div>
    )
  }
}

export default PostIndex;