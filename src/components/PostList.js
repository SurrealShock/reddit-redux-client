import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import React, { Component } from 'react';

import Post from './Post';

class PostList extends Component {
  componentWillMount = () => {
    this.props.fetchPosts();
  };

  render() {
    if (this.props.posts.length !== 0) {
      const postItems = this.props.posts.map(post => {
        const postData = {
          thumbnail: post.data.thumbnail,
          name: post.data.name,
          title: post.data.title,
          url:
            post.data.media != null
              ? post.data.is_reddit_media_domain
                ? post.data.media.reddit_video.fallback_url
                : post.data.media.oembed.thumbnail_url
              : post.data.url,
          permalink: post.data.permalink,
          selftext: post.data.selftext,
          author: post.data.author,
          score: post.data.score,
          created_utc: post.data.created_utc
        };
        return <Post key={post.data.id} post={postData} />;
      });
      return <div>{postItems}</div>;
    }
    return <h1>Loading</h1>;
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
