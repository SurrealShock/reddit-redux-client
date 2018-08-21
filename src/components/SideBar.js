import React, { Component } from 'react';

class SideBar extends Component {
  render() {
    return (
      <div className="mt-5 mb-3" id="sidemenu">
        <ul className="nav flex-md-column flex-row justify-content-between">
          <li className="nav-item">
            <a href="#sec1" className="nav-link active pl-0">
              One
            </a>
          </li>
          <li className="nav-item">
            <a href="#sec2" className="nav-link pl-0">
              Two
            </a>
          </li>
          <li className="nav-item">
            <a href="#sec3" className="nav-link pl-0">
              Three
            </a>
            <ul className="nav flex-md-column ml-2 hidden-sm-down">
              <li className="nav-item">
                <a href="#sec3a" className="nav-link">
                  Section A
                </a>
              </li>
              <li className="nav-item">
                <a href="#sec3b" className="nav-link">
                  Section B
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#sec4" className="nav-link pl-0">
              Four
            </a>
          </li>
          <li className="nav-item">
            <a href="#sec5" className="nav-link pl-0">
              Five
            </a>
          </li>
          <li className="nav-item">
            <a href="#sec6" className="nav-link pl-0">
              Six
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
