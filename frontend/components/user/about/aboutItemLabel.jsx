import React from 'react';
import { connect } from "react-redux";
import AboutTextForm from './forms/textForm';
import RelationshipForm from './forms/relationshipForm';
import { IoLocationSharp, IoSchoolSharp } from 'react-icons/io5';
import { FaBriefcase } from 'react-icons/fa';
import { RiHeartsFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import { updateUser } from "../../../actions/user_actions";

const mDTP = dispatch => ({
  updateUserAbout: (user) => dispatch(updateUser(user)),
})

class AboutItemLabel extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      openDropdown: false,
      editForm: false,
    }

    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  openDropdown(){
    if (!this.state.openDropdown) {
      this.setState({
        openDropdown: true,
      });
    } else {
      this.setState({
        openDropdown: false,
      });
    }
  };

  closeDropdown(){
    this.setState({openDropdown: false});
  }

  openForm(){
    this.setState({editForm: true});
  }

  closeForm(){
    this.setState({openDropdown: false, editForm: false});
  }

  handleDelete(){
    const formData = new FormData();
    formData.append('user[id]', this.props.userId);
    formData.append(`user[${this.props.formType}]`, '');

    this.props.updateUserAbout(formData).then(() => {
      this.closeForm();
    });
  }
  
  render(){
    let itemIcon;
    let inputForm;
  
    switch (this.props.formType){
      case 'work':
        itemIcon = <FaBriefcase/>;
        inputForm = <AboutTextForm formType={this.props.formType} closeForm={this.closeForm}/>;
        break;
      case 'hometown':
        itemIcon = <IoLocationSharp/>;
        inputForm = <AboutTextForm formType={this.props.formType} closeForm={this.closeForm}/>;
        break;
      case 'school':
        itemIcon = <IoSchoolSharp/>;
        inputForm = <AboutTextForm formType={this.props.formType} closeForm={this.closeForm}/>;
        break;
      case 'relationship':
        itemIcon = <RiHeartsFill/>;
        inputForm = <RelationshipForm closeForm={this.closeForm}/>;
        break;
      case 'email':
        itemIcon = <MdEmail/>;
    }
    
    if (this.state.editForm){
      return (
        inputForm
      )
    }
    else {
      return (
        <div className='about-item'>
          {itemIcon}
          <span>{this.props.aboutData}</span>
          {this.props.isOwner ? <div onClick={this.state.openDropdown ? this.closeDropdown : this.openDropdown} onBlur={this.closeDropdown}>&hellip;</div> : <></>}
          {this.state.openDropdown ? 
            <div className="about-edit-container">
              <div onClick={this.openForm}>Edit {this.props.formType}</div>
              <div onClick={this.handleDelete}>Delete {this.props.formType}</div>
          </div> : <></>}
        </div>
      )
    }
  }

}

export default connect(null, mDTP)(AboutItemLabel);