import React, { Component } from 'react';
import SideBar from '../components/SideBar';
import PostList from '../components/PostList';
import { fetchPosts } from '../actions/postActions';
import { connect } from 'react-redux';

class PostListPage extends Component {
  componentDidMount = () => {
    this.props.fetchPosts(
      `https://www.reddit.com/${this.props.match.params.sort}/.json`
    );
  };

  render() {
    return (
      <div className="row mr-0">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-10">
          <div className="row align-items-center mt-3 mb-3">
            <div className="col-md-auto">
              <h5 style={{ textTransform: 'capitalize' }} className="m-0">
                {this.props.match.params.sort}
              </h5>
            </div>
            <div className="col-6">
              <h5 className="m-0" style={{ color: '#ff4500' }}>
                Past 24 hours <i className="fas fa-angle-down" />
              </h5>
            </div>
            <div className="col-md-auto">
              <i className="fas fa-envelope" />
            </div>
            <div className="pl-0 col-1">
              <input
                type="text"
                className="shadow"
                placeholder="Search"
                style={{
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  paddingLeft: '1rem',
                  borderRadius: '25px',
                  border: 'none',
                  width: '200px',
                  outline: 'none'
                }}
              />
            </div>
          </div>
          <div
            className="rounded float-left"
            style={{
              boxShadow: '0 0 20px rgba(0,0,0,0.10), 0 6px 6px rgba(0,0,0,0.15)'
            }}
          >
            <PostList />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchPosts }
)(PostListPage);
