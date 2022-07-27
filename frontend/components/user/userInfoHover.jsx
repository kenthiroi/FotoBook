import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';

const mSTP = (state, ownProps) => ({
  user: state.entities.user[ownProps.userId],
  sessionId: state.session.id,
  friends: state.entities.friends,
})

const mDTP = dispatch => ({
  fetchUserInfo: (userId) => dispatch(fetchUser(userId))
})


class UserInfoHover extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      showInfo: false
    }

    if (!this.props.user){
      this.props.fetchUserInfo(this.props.userId);
    }

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(){
    this.setState({
      showInfo: true
    })
  }

  handleMouseLeave(){
    this.setState({
      showInfo: false
    })
  }

  render(){
    let sideMessage;
    
    if (!!this.props.post){
      if (this.props.post.profile_pic_update) {
        sideMessage = <span className='light-text-description'> updated their profile picture.</span>
      } else if (this.props.post.profile_banner_update){
        sideMessage = <span className='light-text-description'> updated their cover photo.</span>
      }
    }
    
    return (
      <div className="user-info">
        {!!this.props.user ? 
        <Link to={`/profile/${this.props.userId}`} 
          className="user-name" 
          onMouseEnter={this.handleMouseEnter} 
          onMouseLeave={this.handleMouseLeave}>
            {this.props.user.first_name} {this.props.user.last_name}
        </Link> 
        : <></>}
        {sideMessage}
        {/* {!!this.props.user && this.props.post.profile_picture_update ? <span className='light-text-description'>updated their profile picture.</span> : <></>}
        {!!this.props.user && this.props.post.profile_banner_update ? <span className='light-text-description'>updated their cover photo.</span> : <></>} */}
        {this.state.showInfo ? <div className="user-hover-container">
          <div className="user-hover-name">{this.props.user.first_name} {this.props.user.last_name}</div>
          <div className="user-hover-info">
            {/* <div className="user-hometown">{this.props.user.hometown}</div> */}
            <div className="user-mutual-friends">39</div>
          </div>
        </div> : <></>}
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(withRouter(UserInfoHover));