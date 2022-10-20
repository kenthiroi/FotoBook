import React from "react";
import { connect } from "react-redux";
import { updateUser } from "../../../../actions/user_actions";

const mSTP = state => ({
  userId: state.session.id,
})

const mDTP = dispatch => ({
  updateUserAbout: (user) => dispatch(updateUser(user)),
})

class AboutTextForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      body: "",
    }

    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateState(e){
    this.setState({ body: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[id]', this.props.userId);
    formData.append(`user[${this.props.formType}]`, this.state.body);

    this.props.updateUserAbout(formData).then(() => {
      this.props.closeForm();
    });
  }

  render(){
    let inputLabel;

    switch (this.props.formType){
      case 'work':
        inputLabel = 'Company and position';
        break;
      case 'hometown':
        inputLabel = 'Hometown';
        break;
      case 'school':
        inputLabel = 'School name';
    }

    return <div className="about-form">
        <form>
          <input onChange={this.updateState}/>
          <span className="input-label">{inputLabel}</span>
          <div className="about-options">
            <button className="about-cancel" onClick={this.props.closeForm}>
              Cancel
            </button>
            <button 
              className={this.state.body.length === 0 ? "disabled-button about-save" : "about-save"} 
              onClick={this.handleSubmit}
              disabled={this.state.body.length === 0 ? true : false}
              >
              Save
            </button>
          </div>
        </form>
      </div>
  }
}


export default connect(mSTP, mDTP)(AboutTextForm);