import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';
import { signup } from '../../actions/session_actions';
import SignUpModal from './signupModal';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    signup: (user) => dispatch(signup(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpModal)