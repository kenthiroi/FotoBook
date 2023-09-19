import React from "react";
import { connect } from "react-redux";
import { updateUser } from "../../../../actions/user_actions";

const mSTP = state => ({
  userId: state.session.id,
})

const mDTP = dispatch => ({
  updateUserAbout: (user) => dispatch(updateUser(user)),
})

function AboutTextForm (props) {
  const [body, setBody] = useState("");

  const updateState = (e) => {
    setBody(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[id]', props.userId);
    formData.append(`user[${props.formType}]`, body);

    props.updateUserAbout(formData).then(() => {
      props.closeForm();
    });
  }
    
  let inputLabel;

  switch (props.formType){
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
        <label className={body.length === 0 ? "input-label" : "input-label input-filled"}>{inputLabel}</label>
        <input onChange={updateState}/>
        <div className="about-options">
          <button className="about-cancel" onClick={props.closeForm}>
            Cancel
          </button>
          <button 
            className={body.length === 0 ? "disabled-button about-save" : "about-save"} 
            onClick={handleSubmit}
            disabled={body.length === 0 ? true : false}
            >
            Save
          </button>
        </div>
      </form>
    </div>
}


export default connect(mSTP, mDTP)(AboutTextForm);