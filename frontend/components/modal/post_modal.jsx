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
      photoFile: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);

  }

  handleFile(e){
    this.setState({photoFile: e.currentTarget.files[0]});
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[body]', this.state.body);
    formData.append('post[user_id]', this.state.user_id);
    formData.append('post[photo]', this.state.photoFile);
    // $.ajax({
    //   url: '/api/posts',
    //   method: 'POST',
    //   data: formData,
    //   contentType: false,
    //   processData: false
    // });

    switch (this.props.type){
      case 'create':
        this.props.uploadPost(formData);
        break;
      case 'edit':
        this.props.updatePost(formData);
        break;
      default:
        break;
    }
    this.props.closeModal();
  }

  updateState(type){
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  render(){
    console.log(this.state)
    let modal_title = "";
    let submit_text = "";
    switch (this.props.type){
      case 'create':
        modal_title = "Create Post";
        submit_text = "Post";
        break;
      case 'edit':
        modal_title = "Edit Post";
        submit_text = "Save";
        break;
      default:
        modal_title = "Error";
        submit_text = "oops";
    }

    return <div className="post-modal">
      <div className="modal-title">{modal_title}</div>
      <form >
        <textarea onChange={this.updateState('body')} defaultValue={this.state.body}/>
        <input type="submit" value={submit_text} onClick={this.handleSubmit}/>
        <input type="file" onChange={this.handleFile}/>
      </form>
    </div>
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(PostModal)