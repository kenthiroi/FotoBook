import React from 'react';
import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';
import { updateUser } from '../../actions/user_actions';
import { createPost, editPost } from '../../actions/post_actions';


const mSTP = (state) => {
  return {
    userId: state.session.id,
    user: state.entities.user[state.session.id]
  }
}

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    uploadPost: (post) => dispatch(createPost(post)),
    updateUserPhoto: (user) => dispatch(updateUser(user)),
  }
}

class ProfilePictureModal extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      body: "",
      userId: this.props.userId,
      photoFile: undefined,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleFile(e){
    this.setState({photoFile: e.currentTarget.files[0]});
  }

  handleSubmit(e){
    e.preventDefault();

    const postFormData = new FormData();

    postFormData.append('post[body]', this.state.body);
    postFormData.append('post[user_id]', this.state.userId);
    postFormData.append('post[photo]', this.state.photoFile);

    switch (this.props.mode){
      case 'profile':
        postFormData.append('post[profile_pic_update]', true);
        this.props.uploadPost(postFormData).then(res => {
          const userFormData = new FormData();
          userFormData.append('user[id]', res.post.user_id);
          userFormData.append('user[profile_picture]', res.post.id);
      
          this.props.updateUserPhoto(userFormData);

          this.props.closeModal();
        })
        break;
      case 'banner':
        postFormData.append('post[profile_banner_update]', true);
        this.props.uploadPost(postFormData).then(res => {
          const userFormData = new FormData();
          userFormData.append('user[id]', res.post.user_id);
          userFormData.append('user[profile_banner]', res.post.id);
      
          this.props.updateUserPhoto(userFormData);
          
          this.props.closeModal();
        })
        break;
      default:
        break;
    }
    
    // How do i get the post ID after I upload?
  }

  updateState(type){
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  render(){
    return <div className="profile-modal">
      <div className="modal-title">{this.props.mode === 'profile' ? 'Update profile picture' : 'Update cover photo'}</div>
      <form>
        <textarea onChange={this.updateState('body')} defaultValue={this.state.body}/>
        <input type="submit" value={'Upload Photo'} onClick={this.handleSubmit}/>
        <input type="file" onChange={this.handleFile}/>
      </form>
    </div>
  }

}

export default connect(mSTP, mDTP)(ProfilePictureModal)