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
        class="menu sticky-top p-3 shadow"
        style={{ height: this.state.height }}
      >
        <h2>
          <i style={{ color: '#ff4500' }} class="fab fa-reddit" /> redd
          <span style={{ color: '#ff4500' }}>i</span>t
        </h2>
        <div class="nav flex-column">
          <a href="#" class="nav-link pl-0">
            Menu 1
          </a>
          <a href="#" class="nav-link pl-0">
            Menu 2
          </a>
          <a href="#" class="nav-link pl-0">
            Menu 3
          </a>
        </div>
      </div>
    );
  }
}

export default SideBar;
