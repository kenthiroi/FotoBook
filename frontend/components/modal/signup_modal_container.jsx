import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';
import { signup } from '../../actions/session_actions';
import SignUpModal from './signup_modal';

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    signup: (user) => dispatch(signup(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpModal)