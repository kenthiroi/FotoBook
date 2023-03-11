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
          <select id="relationship" value={this.state.value} onChange={this.handleChange}>
            <option value="">Status</option>
            <option value="single">Single</option>
            <option value="relationship">In a relationship</option>
            <option value="engaged">Engaged</option>
            <option value="married">Married</option>
            <option value="complicated">It's complicated</option>
            <option value="separated">Separated</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
          <input type="submit" value="Save"/>
          <button onClick={this.props.closeForm}>Cancel</button>
        </form>
      </div>
    )
  }
}


export default connect(mSTP, mDTP)(RelationshipForm);