import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';
import LoginPage from './login_page';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => dispatch(openModal('signup')),
    closeModal: () => dispatch(closeModal()),
    login: (user) => dispatch(login(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)