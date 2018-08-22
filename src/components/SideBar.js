import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            href="/hot"
            className="nav-link pl-0 pt-4"
            style={{ color: '#ff4500' }}
          >
            <i className="fas fa-bullseye" /> HOT
          </a>
          <a
            href="/new"
            className="nav-link pl-0 pt-4 text-muted"
            style={{ color: 'inherit' }}
          >
            <i className="fas fa-plus-circle" /> NEW
          </a>
          <a
            href="/rising"
            className="nav-link pl-0 pt-4 text-muted"
            style={{ color: 'inherit' }}
          >
            <i className="fas fa-chart-line" /> RISING
          </a>
          <a
            href="/controversial"
            className="nav-link pl-0 pt-4 text-muted"
            style={{ color: 'inherit' }}
          >
            <i
              style={{ transform: 'rotate(90deg)' }}
              className="fas fa-exchange-alt"
            />{' '}
            CONTROVERSIAL
          </a>
          <a
            href="/top"
            className="nav-link pl-0 pt-4 text-muted"
            style={{ color: 'inherit' }}
          >
            <i className="fas fa-sort-amount-up" /> TOP
          </a>
          <a
            href="/gilded"
            className="nav-link pl-0 pt-4 text-muted"
            style={{ color: 'inherit' }}
          >
            <i className="fas fa-medal" /> GILDED
          </a>
          <a
            href="#"
            className="nav-link pl-0 pt-4 text-muted"
            style={{ color: 'inherit' }}
          >
            <i className="fas fa-university" /> WIKI
          </a>
          <a
            href="#"
            className="nav-link pl-0 pt-4 text-muted"
            style={{ color: 'inherit' }}
          >
            <i className="fas fa-cog" /> Settings
          </a>
          <a
            href="#"
            className="nav-link pl-0 pt-4 text-muted"
            style={{ color: 'inherit' }}
          >
            <i className="fas fa-users" /> Communities
          </a>
        </div>
      </div>
    );
  }
}

export default SideBar;
