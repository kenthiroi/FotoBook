import React from "react";
import { connect } from "react-redux"

const mSTP = (state) => {
  return {
    userId: state.session.id,
  }
}

const mDTP = (dispatch) => {
  return {

  }
}

class CreatePostDropdown extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      openDropdown: true,
    }
  }

  

  render(){
    return (
      <div>
        <button id={this.state.createDropdown ? 'active-nav-button' : ''} onClick={this.openDropdown()} onBlur={() => this.closeDropdown()} className="util-btn">
          <div className="dropdown">&#43;</div>
        </button>
        { this.state.openDropdown ? 
          <div className="util-container">
            <button onMouseDown={this.props.postModal} className="logout-btn">
              <div>Create Post</div>
            </button>
          </div> : <></>
        }
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(CreatePostDropdown);