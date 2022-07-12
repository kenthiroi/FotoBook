import React from 'react';
import { connect } from 'react-redux';
import AddAboutItem from './addAboutItem';
import AboutItemNull from './aboutItemNull';

const mSTP = (state, ownProps) => {
  let aboutData;
  switch (ownProps.formType){
    case 'work':
      aboutData = state.entities.user[ownProps.userId].work;
    case 'hometown':
      aboutData = state.entities.user[ownProps.userId].hometown;
    case 'school':
      aboutData = state.entities.user[ownProps.userId].school;
    case 'relationship':
      aboutData = state.entities.user[ownProps.userId].relationship;
    default:
      break;
  }

  return {
    sessionId: state.session.id,
    aboutData,
  }
}

class AboutItem extends React.Component{

  constructor(props){
    super(props)


    this.state = {

    }


  }

  
  render(){
    let aboutItemNull;
    if (this.props.sessionId === this.props.userId) {
      aboutItemNull = <AddAboutItem formType={this.props.formType}/>;
    } else {
      aboutItemNull = <AboutItemNull formType={this.props.formType}/>;
    }

    return (
      <div>
        {(!!this.props.aboutData) ? 
          <AboutItemLabel aboutData={this.props.aboutData} formType={this.props.formType}/>
          :
          aboutItemNull
        }
      </div>
    )
  }
}

export default connect(mSTP, null)(AboutItem);