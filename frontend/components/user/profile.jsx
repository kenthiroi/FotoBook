import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mSTP = state => ({
  user_id: state.session.id,
})

const mDTP = dispatch => ({
  fetchUserInfo: (user_id) => dispatch(fetchUser(user_id))
})


class UserProfile extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      displayedInfo: 'main',
    }
  }

  componentDidMount(){
    this.props.fetchUserInfo()
  }
  
  render(){
    
    return (
      <div className="profile-container">
        <div className='profile-main'>
          <div className='profile-picture'>
            {/* <img src=`${}` alt="" /> */}
          </div>
          <div className="profile-name"></div>
        </div>
        <div className='profile-info'>
          
        </div>
        
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(withRouter(UserProfile));