import React from "react";
import { connect } from "react-redux"
import { openModal } from "../../actions/modal_actions"

const mSTP = (state) => {
  return {
    sessionId: state.session.id,
  }
}

const mDTP = (dispatch) => {
  return {
    postModal: () => dispatch(openModal({type:'createPost'})),
  }
}

class CreatePostDropdown extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      openDropdown: false,
    }

    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  openDropdown(e){
    e.preventDefault();
    this.setState({openDropdown: true});
  }
  
  closeDropdown(){
    // e.preventDefault();
    this.setState({openDropdown: false});
  }

  render(){
    return (
      <div>
        <button id={this.state.openDropdown ? 'active-nav-button' : ''} onClick={this.state.openDropdown ? this.closeDropdown : this.openDropdown} onBlur={() => this.closeDropdown()} className="util-btn">
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