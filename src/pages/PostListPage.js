import React, { Component } from 'react';
import SideBar from '../components/SideBar';
import PostList from '../components/PostList';
import { fetchPosts } from '../actions/postActions';
import { connect } from 'react-redux';
import qs from 'query-string';

class PostListPage extends Component {
  state = {
    search: ''
  };

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
    const sort = qs.parse(this.props.location.search).t;
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
                    Past {sort} <i className="fas fa-angle-down" />
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
              <form
                onSubmit={e => {
                  e.preventDefault();
                  window.location.href = `/search/.json?q=${
                    this.state.search
                  }&raw_input=1`;
                }}
              >
                <input
                  type="search"
                  className="shadow"
                  placeholder="Search"
                  name="search"
                  role="search"
                  value={this.state.search}
                  onChange={e =>
                    this.setState({ [e.target.name]: e.target.value })
                  }
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
              </form>
            </div>
          </div>
          <PostList
            count={
              qs.parse(this.props.location.search).count
                ? qs.parse(this.props.location.search).count
                : 0
            }
            sort={sort}
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
