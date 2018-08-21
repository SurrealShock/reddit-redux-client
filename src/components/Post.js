import React, { Component } from 'react';
import moment from 'moment';
import HoverIcon from './HoverIcon';

class Post extends Component {
  render() {
    const {
      thumbnail,
      name,
      title,
      url,
      permalink,
      selftext,
      author,
      score,
      created_utc
    } = this.props.post;

    return (
      <div className="container pt-4 pl-4">
        <div className="row align-items-center">
          <div className="col-md-auto">
            {RegExp('https?://.*.jpg').test(thumbnail) ? (
              <div>
                <img
                  style={{
                    cursor: 'pointer'
                  }}
                  data-toggle="modal"
                  data-target={`#${name}`}
                  src={thumbnail}
                  className="rounded"
                />
                <div className="modal fade" id={name}>
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h3>{title}</h3>
                      </div>
                      <div className="modal-body text-center">
                        <img
                          style={{ maxWidth: '95%' }}
                          src={url}
                          className="rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <i className="fas fa-align-left" style={{ fontSize: '140px' }} />
            )}
          </div>
          <div className="col">
            <a
              style={{ color: 'inherit' }}
              href={`https://www.reddit.com${permalink}`}
            >
              {title}
            </a>
            {selftext !== '' ? <p>{selftext}</p> : null}
            <p className="text-muted">
              submitted {moment(created_utc * 1000).fromNow()} by
              <span style={{ color: '#FF6F00' }}> {author}</span>
            </p>
          </div>

          <div className="col-md-auto text-center">
            <HoverIcon className="fas fa-angle-up" />
            <p className="mb-0">{score}</p>
            <HoverIcon className="fas fa-angle-down" color="#AA00FF" />
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
