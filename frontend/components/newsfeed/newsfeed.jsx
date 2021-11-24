import React from "react";

class Newsfeed extends React.Component {
  render(){
    return <div>
        <h1>WELCOME TO FOTOBOOK</h1>
        <div onClick={this.props.logout}>Logout</div>
      </div>
  }
}

export default Newsfeed