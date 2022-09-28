import React from 'react';
import AboutCareer from './about/pages/profileAboutCareer';
import AboutContacts from './about/pages/profileAboutContacts';
import AboutLocation from './about/pages/profileAboutLocation';
import AboutOverview from './about/pages/profileAboutOverview';


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
        aboutContents = <AboutOverview userId={this.props.userId}/>;
        break;
      case 'profession':
        aboutContents = <AboutCareer userId={this.props.userId}/>;
        break;
      case 'places':
        aboutContents = <AboutLocation userId={this.props.userId}/>;
        break;
      case 'contacts':
        aboutContents = <AboutContacts userId={this.props.userId}/>;
    }
    return (
      <div className='about-container'>
        <div className='about-tabs'>
          <div id='about-title'>About</div>
          <div className={(this.state.displayedInfo === 'overview') ? 'about-button active-about-button' : 'about-button'} 
            onClick={() => this.handleSwitch('overview')}>
            Overview
          </div>
          <div className={(this.state.displayedInfo === 'profession') ? 'about-button active-about-button' : 'about-button'} 
            onClick={() => this.handleSwitch('profession')}>
            Work and education
          </div>
          <div className={(this.state.displayedInfo === 'places') ? 'about-button active-about-button' : 'about-button'} 
            onClick={() => this.handleSwitch('places')}>
            Places lived
          </div>
          <div className={(this.state.displayedInfo === 'contacts') ? 'about-button active-about-button' : 'about-button'} 
            onClick={() => this.handleSwitch('contacts')}>
            Contact and basic info
          </div>
        </div>
        <div className='about-contents'>
          {aboutContents}
        </div>
      </div>
    )
  }
}

export default UserProfileAbout;