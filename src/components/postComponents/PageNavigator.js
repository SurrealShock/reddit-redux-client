import React, { Component } from 'react';

class PageNavigator extends Component {
  render() {
    const { count, sort } = this.props;
    console.log(sort);
    return (
      <nav>
        <ul className="pagination justify-content-center">
          {parseInt(count, 10) - 25 < 0 ? (
            <li className="page-item disabled">
              <a className="page-link">« Previous</a>
            </li>
          ) : (
            <li className="page-item">
              <a
                className="page-link"
                href={`?count=${(parseInt(count, 10) - 25).toString()}&before=${
                  this.props.before
                }&raw_json=1${sort ? `&t=${sort}` : ``}`}
                style={{ color: '#ff5722' }}
              >
                « Previous
              </a>
            </li>
          )}

          <li className="page-item">
            <a
              className="page-link"
              href={`?count=${(parseInt(count, 10) + 25).toString()}&after=${
                this.props.after
              }&raw_json=1${sort ? `&t=${sort}` : ``}`}
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
