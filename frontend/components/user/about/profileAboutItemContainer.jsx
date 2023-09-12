import React from 'react';
import { connect } from 'react-redux';
import AddAboutItem from './addAboutItem';
import AboutItemNull from './aboutItemNull';
import AboutItemLabel from './aboutItemLabel';

const mSTP = (state, ownProps) => {
  let aboutData;
  switch (ownProps.formType){
    case 'work':
      aboutData = state.entities.user[ownProps.userId].work;
      break;
    case 'hometown':
      aboutData = state.entities.user[ownProps.userId].hometown;
      break;
    case 'school':
      aboutData = state.entities.user[ownProps.userId].school;
      break;
    case 'relationship':
      aboutData = state.entities.user[ownProps.userId].relationship;
      break;
    case 'email':
      aboutData = state.entities.user[ownProps.userId].email;
  }

  return {
    sessionId: state.session.id,
    aboutData,
  }
}

function AboutItemContainer(props){

  let aboutItem;
  let isOwner;

  if (!!this.props.onProfilePage){
    isOwner = false;
  } else {
    isOwner = this.props.sessionId === this.props.userId;
  }

  if (isOwner) {
    aboutItem = <AddAboutItem formType={this.props.formType}/>;
  } else {
    aboutItem = <AboutItemNull formType={this.props.formType}/>;
  }

  return (
    <div className='about-item-container'>
      {(!!this.props.aboutData) ? 
        <AboutItemLabel userId={this.props.userId} isOwner={isOwner} aboutData={this.props.aboutData} formType={this.props.formType}/>
        :
        aboutItem
      }
    </div>
  )
}

export default connect(mSTP, null)(AboutItemContainer);