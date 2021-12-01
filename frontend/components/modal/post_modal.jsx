import React from 'react';
import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';
import { createPost } from '../../actions/post_actions';
import { editPost } from '../../util/posts_api_util';
import SignUpModal from './signup_modal';

const mapStateToProps = (state) => {
  return {
    user_id: state.session.id,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    uploadPost: (post) => dispatch(createPost(post)),
    updatePost: (post) => dispatch(editPost(post))
  }
}

class PostModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      body: "",
      user_id: this.props.user_id,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const post = Object.assign({}, this.state);
    this.props.createPost(post);
    this.props.closeModal();
  }

  render(){

    let modal_title = "";
    switch (this.props.type){
      case 'create':
        modal_title = "Create Post";
        break;
      case 'edit':
        modal_title = "Edit Post";
        break;
      default:
        modal_title = "Error";
    }

    return <div className="post-modal">
      <div className="modal-title">{modal_title}</div>
      <form>

      </form>
    </div>
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(PostModal)