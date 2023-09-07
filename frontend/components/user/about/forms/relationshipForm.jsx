import React from 'react';
import { connect } from "react-redux";
import { updateUser } from '../../../../actions/user_actions';

const mSTP = state => ({
  userId: state.session.id,
})

const mDTP = dispatch => ({
  updateUserAbout: (user) => dispatch(updateUser(user)),
})

function RelationshipForm(props){
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[id]', props.userId);
    formData.append(`user[relationship]`, value);

    props.updateUserAbout(formData).then(() => {
      props.closeForm();
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select id="relationship-form" value={value} onChange={handleChange}>
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
          <button className="about-save" onClick={handleSubmit}>Save</button>
          <button className="about-cancel" onClick={props.closeForm}>Cancel</button>
        </div>
      </form>
    </div>
  )
}


export default connect(mSTP, mDTP)(RelationshipForm);