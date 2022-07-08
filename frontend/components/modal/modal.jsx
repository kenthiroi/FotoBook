import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SignupFormContainer from './signupModalContainer';
import UserPicModal from './userPicModal';
import PostModal from './postModal';
import ViewModal from './viewModal';

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
    case 'showPhoto':
      component = <ViewModal postId={modal.post.id}/>;
      break;
    case 'editUserPic':
      component = <UserPicModal mode={modal.mode}/>;
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