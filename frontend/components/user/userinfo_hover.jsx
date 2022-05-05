import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { withRouter } from 'react-router-dom';

const mSTP = state => ({
  
})

const mDTP = dispatch => ({

})


class UserInfoHover extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      showInfo: false
    }

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(){
    this.setState({
      showInfo: true
    })

    console.log(showInfo);
  }

  handleMouseLeave(){
    this.setState({
      showInfo: false
    })
    console.log(showInfo);
  }

  render(){
    
    return (
      <div className="user-info">
        <Link to={"/profile/" + this.props.user.id} 
          className="user-name" 
          onMouseEnter={this.handleMouseEnter} 
          onMouseLeave={this.handleMouseLeave}>
            {this.props.user.first_name} {this.props.user.last_name}
        </Link>
        {this.state.showInfo ? <div className="user-hover-container">
          <div className="user-hover-name">{this.props.user.first_name} {this.props.user.last_name}</div>
          <div className="user-hover-info">
            <div className="user-hometown">{this.props.user.hometown}</div>
            <div className="user-mutual-friends">39</div>
          </div>
        </div> : <></>}
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(withRouter(UserInfoHover));