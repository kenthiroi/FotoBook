import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SignupFormContainer from './signup_modal_container';
import PostModal from './post_modal';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.type) {
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'createPost':
      component = <PostModal type="create"/>;
      break;
    case 'editPost':
      component = <PostModal type="edit" post={modal.post}/>;
      break;
    case 'createComment':
      component = <CommentModal type="create" comment={}/>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);