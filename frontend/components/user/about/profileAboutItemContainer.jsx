import React from 'react';
import { connect } from 'react-redux';
import AddAboutItem from './addAboutItem';
import AboutItemNull from './aboutItemNull';

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
    default:
      break;
  }

  return {
    sessionId: state.session.id,
    aboutData,
  }
}

class AboutItemContainer extends React.Component{

  constructor(props){
    super(props)


    this.state = {

    }


  }

  
  render(){
    let aboutItem;
    console.log(typeof this.props.userId);
    if (this.props.sessionId === this.props.userId) {
      aboutItem = <AddAboutItem formType={this.props.formType}/>;
    } else {
      aboutItem = <AboutItemNull formType={this.props.formType}/>;
    }

    return (
      <div>
        {(!!this.props.aboutData) ? 
          <AboutItemLabel aboutData={this.props.aboutData} formType={this.props.formType}/>
          :
          aboutItem
        }
      </div>
    )
  }
}

export default connect(mSTP, null)(AboutItemContainer);