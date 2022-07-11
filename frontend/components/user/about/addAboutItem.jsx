import React from 'react';
import AboutTextForm from './forms/TextForm';


class AddAboutItem extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      displayForm: false,
    }

    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  openForm(){
    this.setState({displayForm: true});
  }

  closeForm(){
    this.setState({displayForm: false});
  }
  
  render(){
    let buttonType;
    let inputForm;

      switch (this.props.formType){
        case 'hometown':
          buttonType = 'hometown';
        case 'school':
          buttonType = 'a high school or college';
        case 'work':
          buttonType = 'a workplace';
        case 'relationship':
          buttonType = 'a relationship status';
          inputForm = <RelationshipForm closeForm={this.closeForm}/>;
          break;
        default:
          inputForm = <AboutTextForm formType={this.props.formType} closeForm={this.closeForm}/>;
          console.log('default');
      }

    return (
      <div>
        {this.state.displayForm ? 
          inputForm
            : 
          <button className='add-item' onClick={this.openForm}>Add {buttonType}</button>
        }
      </div>
    )
  }
}

export default AddAboutItem;