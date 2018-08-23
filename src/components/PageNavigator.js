import React, { Component } from 'react';

class PageNavigator extends Component {
  render() {
    const { count, url } = this.props;
    return (
      <nav>
        <ul className="pagination justify-content-center">
          {parseInt(count) - 25 <= 0 ? (
            <li className="page-item disabled">
              <a className="page-link">« Previous</a>
            </li>
          ) : (
            <li className="page-item">
              <a
                className="page-link"
                href={`${url}?count=${(
                  parseInt(count) - 25
                ).toString()}&before=${this.props.before}&raw_json=1`}
                style={{ color: '#ff5722' }}
              >
                « Previous
              </a>
            </li>
          )}

          <li className="page-item">
            <a
              className="page-link"
              href={`${url}?count=${(parseInt(count) + 25).toString()}&after=${
                this.props.after
              }&raw_json=1`}
              style={{ color: '#ff5722' }}
            >
              Next »
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default PageNavigator;
