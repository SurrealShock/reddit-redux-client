import React, { Component } from 'react';
import moment from 'moment';
import HoverIcon from './HoverIcon';
import ReactHtmlParser from 'react-html-parser';

class Post extends Component {
  render() {
    const {
      thumbnail,
      name,
      title,
      preview,
      url,
      permalink,
      selftext,
      author,
      score,
      created_utc,
      subreddit
    } = this.props.post;

    return (
      <div className="row align-items-center pl-4 pr-4 pt-4">
        <div className="col-auto">
          {thumbnail ? (
            <div>
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
                alt="post"
              />
              <div className="modal fade" id={name}>
                <div className="modal-dialog modal-lg">
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
                </div>
              </div>
            </div>
          ) : (
            <a className="text-muted" href={url}>
              <i
                className="fas fa-align-left"
                style={{ width: '140px', fontSize: '140px' }}
              />
            </a>
          )}
        </div>
        <div style={{ width: '80%' }} className="col-auto mr-auto">
          <a
            style={{ color: 'inherit', fontWeight: '600' }}
            href={`https://www.reddit.com${permalink}`}
          >
            {title}
          </a>
          {selftext !== '' ? (
            <p
              style={{
                maxHeight: '4.4em',
                overflow: 'hidden'
              }}
            >
              {selftext}
            </p>
          ) : null}
          <p className="text-muted">
            submitted {moment(created_utc * 1000).fromNow()} by{' '}
            <a
              href={`https://www.reddit.com/u/${author}`}
              style={{ color: '#ff4500' }}
            >
              {author}
            </a>{' '}
            to{' '}
            <a
              href={`https://www.reddit.com/r/${subreddit}`}
              style={{ color: '#ff4500' }}
            >
              {subreddit}
            </a>
          </p>
        </div>
        <div className="col-auto text-center">
          <HoverIcon className="fas fa-chevron-circle-up" />
          <p className="mb-0">{score}</p>
          <HoverIcon className="fas fa-chevron-circle-down" color="#AA00FF" />
        </div>
      </div>
    );
  }
}

export default Post;
