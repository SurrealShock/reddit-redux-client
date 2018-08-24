import React, { Component } from 'react';
import SideBar from '../components/SideBar';
import PostList from '../components/PostList';
import { fetchPosts } from '../actions/postActions';
import { connect } from 'react-redux';
import qs from 'query-string';

class PostListPage extends Component {
  componentDidMount = () => {
    console.log(
      `https://www.reddit.com/${this.props.match.params.sort}/.json${
        this.props.location.search
      }`
    );
    this.props.fetchPosts(
      `https://www.reddit.com/${this.props.match.params.sort}/.json${
        this.props.location.search
      }`
    );
  };

  DropDownSort = sort => {
    return (
      <a
        className="dropdown-item"
        href={
          this.props.location.pathname +
          `?raw_json=1&t=${sort.split(' ')[0].toLowerCase()}`
        }
      >
        {sort}
      </a>
    );
  };

  render() {
    return (
      <div className="row mr-0">
        <div className="col-2">
          <SideBar section={this.props.match.params.sort} />
        </div>
        <div className="col-10">
          <div className="row align-items-center mt-3 mb-3">
            <div className="col-auto">
              <h5 style={{ textTransform: 'capitalize' }} className="m-0">
                {this.props.match.params.sort}
              </h5>
            </div>
            <div className="col-auto mr-auto">
              {this.props.match.params.sort === 'controversial' ||
              this.props.match.params.sort === 'top' ? (
                <div className="dropdown">
                  <h5
                    className="m-0"
                    style={{ color: '#ff4500', cursor: 'pointer' }}
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Past Day <i className="fas fa-angle-down" />
                  </h5>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    {this.DropDownSort('Hour')}
                    {this.DropDownSort('Day')}
                    {this.DropDownSort('Week')}
                    {this.DropDownSort('Month')}
                    {this.DropDownSort('Year')}
                    {this.DropDownSort('All Time')}
                  </div>
                </div>
              ) : null}
            </div>
            <div className="col-auto pl-1">
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
          {console.log(this.props)}

          <PostList
            count={
              qs.parse(this.props.location.search).count
                ? qs.parse(this.props.location.search).count
                : 0
            }
            sort={this.props.match.params.sort}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchPosts }
)(PostListPage);
