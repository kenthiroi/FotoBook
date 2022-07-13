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
      userId: this.props.userId,
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
    formData.append('user[id]', this.state.userId);
    formData.append(`user[${this.props.formType}]`, this.state.body);

    this.props.updateUserAbout(formData).then(() => {
      this.props.closeForm();
    });
  }

  render(){
    return <div className="about-form">
        <form>
          <textarea onChange={this.updateState}/>
          <button id="about-save" onClick={this.handleSubmit}>Save</button>
          <button id="about-cancel" onClick={this.props.closeForm}>Cancel</button>
        </form>
      </div>
  }
}


export default connect(mSTP, mDTP)(AboutTextForm);