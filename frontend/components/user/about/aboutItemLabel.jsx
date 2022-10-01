import React from 'react';
import { connect } from "react-redux";
import AboutTextForm from './forms/textForm';
import RelationshipForm from './forms/relationshipForm';
import { IoLocationSharp, IoSchoolSharp } from 'react-icons/io5';
import { FaBriefcase } from 'react-icons/fa';
import { RiHeartsFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
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
    let description;
  
    switch (this.props.formType){
      case 'work':
        itemIcon = <FaBriefcase/>;
        description = 'Works at';
        inputForm = <AboutTextForm formType={this.props.formType} closeForm={this.closeForm}/>;
        break;
      case 'hometown':
        itemIcon = <IoLocationSharp/>;
        description = 'Lives in';
        inputForm = <AboutTextForm formType={this.props.formType} closeForm={this.closeForm}/>;
        break;
      case 'school':
        itemIcon = <IoSchoolSharp/>;
        description = 'Studied at';
        inputForm = <AboutTextForm formType={this.props.formType} closeForm={this.closeForm}/>;
        break;
      case 'relationship':
        itemIcon = <RiHeartsFill/>;
        description = '';
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
          {description}
          <span> {this.props.aboutData}</span>
          {this.props.isOwner ? <button className="about-edit-button" onClick={this.state.openDropdown ? this.closeDropdown : this.openDropdown} onBlur={this.closeDropdown}><BsThreeDots/></button> : <></>}
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