import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import React, { Component } from 'react';

import Post from './Post';

class PostList extends Component {
  previewURL = data => {
    if (data.media) {
      if (data.media.oembed) {
        const embedString = data.media.oembed.html.replace('\\', '');
        return embedString;
      } else {
        return (
          <video
            autoPlay={true}
            muted={true}
            loop={true}
            preload="auto"
            style={{ maxWidth: '90%', height: 'auto' }}
          >
            <source src={data.media.reddit_video} />
          </video>
        );
      }
    } else if (data.preview) {
      if (data.preview.reddit_video_preview) {
        return (
          <video
            autoPlay={true}
            muted={true}
            loop={true}
            preload="auto"
            style={{ maxWidth: '90%', height: 'auto' }}
          >
            <source src={data.preview.reddit_video_preview.fallback_url} />)
          </video>
        );
      } else {
        return (
          <img
            style={{ maxWidth: '95%' }}
            src={data.preview.images[0].source.url}
            className="rounded"
          />
        );
      }
    } else {
      return null;
    }
  };

  render() {
    if (this.props.posts.length !== 0) {
      const postItems = this.props.posts.map(post => {
        const postData = {
          thumbnail:
            post.data.thumbnail.indexOf('ps') !== -1
              ? post.data.thumbnail
              : null,
          name: post.data.name,
          title: post.data.title,
          preview: this.previewURL(post.data),
          url: post.data.url,
          permalink: post.data.permalink,
          selftext: post.data.selftext,
          author: post.data.author,
          score: post.data.score,
          created_utc: post.data.created_utc,
          subreddit: post.data.subreddit
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
