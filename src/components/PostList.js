import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import React, { Component } from 'react';
import Post from './Post';
import PageNavigator from './PageNavigator';

class PostList extends Component {
  previewURL = data => {
    if (data.crosspost_parent_list) {
      data = data.crosspost_parent_list[0];
    }
    if (data.media) {
      if (data.media.oembed) {
        const embedString = data.media.oembed.html.replace('\\', '');
        return embedString;
      } else {
        return (
          <video
            controls
            muted={false}
            autoPlay
            style={{ maxWidth: '90%', height: 'auto' }}
          >
            <source src={data.media.reddit_video.fallback_url} />
          </video>
        );
      }
    } else if (data.preview) {
      if (data.preview.reddit_video_preview) {
        return (
          <video
            controls
            muted={false}
            autoPlay
            style={{ maxWidth: '90%', height: 'auto' }}
          >
            <source src={data.preview.reddit_video_preview.fallback_url} />)
          </video>
        );
      } else if (data.url.indexOf('.gif') !== -1) {
        return (
          <img
            style={{ maxWidth: '95%' }}
            src={data.url}
            className="rounded"
            alt="gif"
          />
        );
      } else {
        return (
          <img
            style={{ maxWidth: '95%' }}
            src={data.preview.images[0].source.url}
            className="rounded"
            alt="image"
          />
        );
      }
    } else {
      return null;
    }
  };

  render() {
    if (this.props.posts.length !== 0) {
      const postItems = this.props.posts.data.children.map(post => {
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
      return (
        <React.Fragment>
          <div
            className="rounded pb-3 mb-3"
            style={{
              boxShadow: '0 0 20px rgba(0,0,0,0.10), 0 6px 6px rgba(0,0,0,0.15)'
            }}
          >
            {postItems}
          </div>
          <PageNavigator
            count={this.props.count}
            after={this.props.posts.data.after}
            before={this.props.posts.data.before}
            sort={this.props.sort}
          />
        </React.Fragment>
      );
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
