import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const { section } = this.props;
    return (
      <div
        className="sticky-top p-3 shadow"
        style={{ height: this.state.height }}
      >
        <h2>
          <i style={{ color: '#ff4500' }} className="fab fa-reddit" /> redd
          <span style={{ color: '#ff4500' }}>i</span>t
        </h2>
        <div className="nav flex-column">
          <a
            href="/hot?raw_json=1"
            className="nav-link pl-0 mt-4"
            style={{ color: section === 'hot' ? '#ff4500' : 'inherit' }}
          >
            <i className="fas fa-bullseye" /> HOT
          </a>
          <a
            href="/new?raw_json=1"
            className="nav-link pl-0 mt-4"
            style={{ color: section === 'new' ? '#ff4500' : 'inherit' }}
          >
            <i className="fas fa-plus-circle" /> NEW
          </a>
          <a
            href="/rising?raw_json=1"
            className="nav-link pl-0 mt-4"
            style={{ color: section === 'rising' ? '#ff4500' : 'inherit' }}
          >
            <i className="fas fa-chart-line" /> RISING
          </a>
          <a
            href="/controversial?raw_json=1"
            className="nav-link pl-0 mt-4"
            style={{
              color: section === 'controversial' ? '#ff4500' : 'inherit'
            }}
          >
            <i
              style={{ transform: 'rotate(90deg)' }}
              className="fas fa-exchange-alt"
            />{' '}
            CONTROVERSIAL
          </a>
          <a
            href="/top?raw_json=1"
            className="nav-link pl-0 mt-4"
            style={{ color: section === 'top' ? '#ff4500' : 'inherit' }}
          >
            <i className="fas fa-sort-amount-up" /> TOP
          </a>
          <a
            href="/gilded?raw_json=1"
            className="nav-link pl-0 mt-4"
            style={{ color: section === 'gilded' ? '#ff4500' : 'inherit' }}
          >
            <i className="fas fa-medal" /> GILDED
          </a>
          <a
            href="https://www.reddit.com/wiki/index"
            className="nav-link pl-0 mt-4"
            style={{ color: 'inherit' }}
          >
            <i className="fas fa-university" /> WIKI
          </a>
          {/* <a
            href="#"
            className="nav-link pl-0 mt-4 text-muted"
            style={{ color: section === 'settings' ? '#ff4500' : 'inherit' }}
          >
            <i className="fas fa-cog" /> Settings
          </a> */}
        </div>
      </div>
    );
  }
}

export default SideBar;
