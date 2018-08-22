import React, { Component } from 'react';

class PostDetailPage extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.match.params.subreddit}</h1>
      </div>
    );
  }
}

export default PostDetailPage;
