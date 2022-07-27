import React from 'react';
import { connect } from 'react-redux';

const mSTP = (state, ownProps) => ({
})

const mDTP = dispatch => ({
})


class UserProfileIntro extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      showForm: false
    }

    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  openForm(){
    this.setState({
      showForm: true
    })
  }

  closeForm(){
    this.setState({
      showForm: false
    })
  }

  render(){


    return (

    )
  }
}

export default UserProfileIntro;