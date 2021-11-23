import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';
import SignUpModal from './signup_modal';

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => dispatch(openModal),
    closeModal: () => dispatch(closeModal)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpModal)