import React from 'react';
import PostItem from './postIndexItem';

class FriendsPostIndex extends React.Component{

  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchFriendsPosts()
  }

  // componentDidUpdate(prevProps){
  //   console.log("did update", this.props.posts);
  //   console.log("prevProps", prevProps.posts);
  // }

  
  
  render(){
    
    return (
      <div className="post-index">
        {this.props.posts.reverse().map(post => {
          let userInfo = this.props.users[post.user_id];
          if (!!userInfo){
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

const mapStateToProps = state => ({
  posts: selectAllPosts(state),
  users: state.entities.user,
})

const mapDispatchToProps = dispatch => ({
  fetchAllPosts: () => dispatch(getAllPosts()),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendsPostIndex);