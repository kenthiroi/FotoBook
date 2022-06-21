import React from 'react';



class UserProfileAbout extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      displayedInfo: 'overview',
    }
  }

  handleSwitch(tabName){
    this.setState({displayedInfo: tabName})
  }
  
  render(){
    let aboutContents; 
    switch (this.state.displayedInfo){
      case 'overview':
        aboutContents = <div></div>;
        break;
    }
    return (
      <div>
        <div id='about-title'>About</div>
        <div className='about-tabs'>
          <div></div>
        </div>
        <div className='about-container'>
          {aboutContents}
        </div>
      </div>
    )
  }
}

export default UserProfileAbout;