import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Modal from 'react-modal';

class PostModal extends Component {
  constructor(props) {
    super(props);
    Modal.setAppElement(document.getElementById(this.props.name));

    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { name, thumbnail, preview, title } = this.props;
    return (
      <React.Fragment>
        <img
          style={{
            width: '140px',
            maxHeight: '180px',
            objectFit: 'cover',
            cursor: 'pointer'
          }}
          onClick={this.handleOpenModal}
          src={thumbnail}
          className="rounded"
          alt="post"
        />
        <Modal
          style={{ width: '1000px' }}
          className="Modal__Bootstrap modal-dialog modal-lg"
          closeTimeoutMS={150}
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h3>{title}</h3>
            </div>
            <div className="modal-body text-center">
              {typeof preview === typeof '' ? (
                <div>{ReactHtmlParser(preview)}</div>
              ) : (
                preview
              )}
            </div>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default PostModal;
