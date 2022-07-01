import React from 'react';
import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  }
}

class ViewModal extends React.Component {
  constructor(props){
    super(props)

  }

  render(){
    return <div className="view-modal">
    </div>
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(ViewModal);