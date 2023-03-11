import React from 'react';
import { connect } from "react-redux";
import { updateUser } from '../../../../actions/user_actions';

const mSTP = state => ({
  userId: state.session.id,
})

const mDTP = dispatch => ({
  updateUserAbout: (user) => dispatch(updateUser(user)),
})

class RelationshipForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[id]', this.props.userId);
    formData.append(`user[relationship]`, this.state.value);

    this.props.updateUserAbout(formData).then(() => {
      this.props.closeForm();
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select id="relationship-form" value={this.state.value} onChange={this.handleChange}>
            <option value="">Status</option>
            <option value="Single">Single</option>
            <option value="In a relationship">In a relationship</option>
            <option value="Engaged">Engaged</option>
            <option value="Married">Married</option>
            <option value="It's complicated">It's complicated</option>
            <option value="Separated">Separated</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
          <div className='relationship-options'>
            <button className="about-save" onClick={this.handleSubmit}>Save</button>
            <button className="about-cancel" onClick={this.props.closeForm}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}


export default connect(mSTP, mDTP)(RelationshipForm);