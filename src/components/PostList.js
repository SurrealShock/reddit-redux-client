import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import React, { Component } from 'react';
import moment from 'moment';

class PostList extends Component {
  componentWillMount = () => {
    this.props.fetchPosts();
  };

  render() {
    if (this.props.posts.length !== 0) {
      const postItems = this.props.posts.map(post => (
        <div key={post.data.id} className="container">
          <div className="row">
            <div className="col-md-auto">
              {post.data.thumbnail !== 'self' ? (
                <img src={post.data.thumbnail} />
              ) : (
                <i className="fas fa-align-left" style={{ fontSize: '5rem' }} />
              )}
            </div>
            <div className="col" align="center">
              <h6>{post.data.title}</h6>
              {post.data.selftext !== '' ? <p>{post.data.selftext}</p> : null}
              <p className="text-muted">
                submitted {moment(post.data.created_utc * 1000).fromNow()} by
                {post.data.author}
              </p>
            </div>
          </div>
          <hr />
        </div>
      ));
      return <div>{postItems}</div>;
    }
    return <div>Loading</div>;
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
