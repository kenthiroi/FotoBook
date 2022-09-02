import React from 'react';
import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';
import { createPost, editPost } from '../../actions/post_actions';

const mapStateToProps = (state) => {
  return {
    userId: state.session.id,
    userInfo: state.entities.user[state.session.id],
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
    if (!this.props.post) {
      this.state = {
        body: "",
        userId: this.props.userId,
        photoFile: undefined,
      }
    } else {
      this.state = {
        postId: this.props.post.id,
        body: this.props.post.body,
        userId: this.props.userId,
        photoFile: this.props.post.photoFile,
      }
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
    formData.append('post[user_id]', this.state.userId);
    if (this.state.photoFile !== undefined) {
      formData.append('post[photo]', this.state.photoFile);
    }
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
        formData.append('post[id]', this.state.postId);
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
      <form>
        <textarea 
          onChange={this.updateState('body')} 
          defaultValue={this.state.body}
          rows="4"
          placeholder={"Whats on your mind, " + this.props.userInfo.first_name + "?"} 
          autofocus
        />
        <input type="submit" value={submit_text} onClick={this.handleSubmit}/>
        <input type="file" onChange={this.handleFile}/>
      </form>
    </div>
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(PostModal)