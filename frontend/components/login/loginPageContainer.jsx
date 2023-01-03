import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';
import LoginPage from './loginPage';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
    session: state.session,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => dispatch(openModal({type:'signup'})),
    closeModal: () => dispatch(closeModal()),
    login: (user) => dispatch(login(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)