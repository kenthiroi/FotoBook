import React from 'react';



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
    let updateForm;

    switch(this.props.itemType){
      case 'work':
        break;
      case 'school':
        break;
      case 'hometown':
        break;
      case 'relationship':
        break;
      default:
        break;
    }


    return (
      <div>
        
      </div>
    )
  }
}

export default AddAboutItem;