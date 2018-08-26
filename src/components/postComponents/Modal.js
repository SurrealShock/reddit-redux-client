import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

class Modal extends Component {
  state = {
    pressed: false
  };
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
          data-toggle="modal"
          data-target={`#${name}`}
          src={thumbnail}
          className="rounded"
          onClick={() => this.setState({ pressed: !this.state.pressed })}
          alt="post"
        />
        <div className="modal fade" id={name}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h3>{title}</h3>
              </div>
              {this.state.pressed ? (
                <div className="modal-body text-center">
                  {typeof preview === typeof '' ? (
                    <div>{ReactHtmlParser(preview)}</div>
                  ) : (
                    preview
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
