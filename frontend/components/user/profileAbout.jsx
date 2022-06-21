import React from 'react';



class UserProfileAbout extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      displayedInfo: 'overview',
    }

    this.handleSwitch = this.handleSwitch.bind(this);
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
      case 'profession':
        aboutContents = <div></div>;
        break;
      case 'places':
        aboutContents = <div></div>;
        break;
      case 'contacts':
        aboutContents = <div></div>;
        break;
      case 'details':
        aboutContents = <div></div>;
        break;
      default:
        aboutContents = <div></div>;
        break;
    }
    return (
      <div>
        <div id='about-title'>About</div>
        <div className='about-tabs'>
          <div className={(this.state.displayedInfo === 'overview') ? 'active-about-button' : ''} 
            onClick={() => this.handleSwitch('overview')}>
            Overview
          </div>
          <div className={(this.state.displayedInfo === 'profession') ? 'active-about-button' : ''} 
            onClick={() => this.handleSwitch('profession')}>
            Work and education
          </div>
          <div className={(this.state.displayedInfo === 'places') ? 'active-about-button' : ''} 
            onClick={() => this.handleSwitch('places')}>
            Places lived
          </div>
          <div className={(this.state.displayedInfo === 'contacts') ? 'active-about-button' : ''} 
            onClick={() => this.handleSwitch('contacts')}>
            Contact and basic info
          </div>
          <div className={(this.state.displayedInfo === 'details') ? 'active-about-button' : ''} 
            onClick={() => this.handleSwitch('details')}>
            Details about you
          </div>
        </div>
        <div className='about-container'>
          {aboutContents}
        </div>
      </div>
    )
  }
}

export default UserProfileAbout;