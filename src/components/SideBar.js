import React, { Component } from 'react';

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
            href="#"
            className="nav-link pl-0 pt-4"
            style={{ color: '#ff4500' }}
          >
            <i class="fas fa-bullseye" /> HOT
          </a>
          <a
            href="#"
            className="nav-link pl-0 pt-4 text-muted"
            style={{ color: 'inherit' }}
          >
            <i class="fas fa-plus-circle" /> NEW
          </a>
          <a
            href="#"
            className="nav-link pl-0 pt-4 text-muted"
            style={{ color: 'inherit' }}
          >
            <i class="fas fa-chart-line" /> RISING
          </a>
          <a
            href="#"
            className="nav-link pl-0 pt-4 text-muted"
            style={{ color: 'inherit' }}
          >
            <i
              style={{ transform: 'rotate(90deg)' }}
              class="fas fa-exchange-alt"
            />{' '}
            CONTROVERSIAL
          </a>
          <a
            href="#"
            className="nav-link pl-0 pt-4 text-muted"
            style={{ color: 'inherit' }}
          >
            <i class="fas fa-sort-amount-up" /> TOP
          </a>
          <a
            href="#"
            className="nav-link pl-0 pt-4 text-muted"
            style={{ color: 'inherit' }}
          >
            <i class="fas fa-medal" /> GILDED
          </a>
          <a
            href="#"
            className="nav-link pl-0 pt-4 text-muted"
            style={{ color: 'inherit' }}
          >
            <i class="fas fa-university" /> WIKI
          </a>
          <a
            href="#"
            className="nav-link pl-0 pt-4 text-muted"
            style={{ color: 'inherit' }}
          >
            <i class="fas fa-bullhorn" /> PROMOTED
          </a>
          <a
            href="#"
            className="nav-link pl-0 pt-4 text-muted"
            style={{ color: 'inherit' }}
          >
            <i class="fas fa-comment" /> COMMENTS
          </a>
          <a
            href="#"
            className="nav-link pl-0 pt-4 text-muted"
            style={{ color: 'inherit' }}
          >
            <i class="fas fa-cog" /> Settings
          </a>
          <a
            href="#"
            className="nav-link pl-0 pt-4 text-muted"
            style={{ color: 'inherit' }}
          >
            <i class="fas fa-users" /> Communities
          </a>
        </div>
      </div>
    );
  }
}

export default SideBar;
