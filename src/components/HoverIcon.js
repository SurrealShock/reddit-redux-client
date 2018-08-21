import React, { Component } from 'react';

export default class SocialIcon extends Component {
  state = {
    hover: false
  };

  onMouseUpdate = () => {
    this.setState({
      hover: !this.state.hover
    });
  };

  render() {
    const { className, color, size } = this.props;

    return (
      <i
        className={className}
        style={
          this.state.hover
            ? { cursor: 'pointer', fontSize: size, color: color }
            : { cursor: 'pointer', fontSize: size }
        }
        onMouseEnter={this.onMouseUpdate}
        onMouseLeave={this.onMouseUpdate}
      />
    );
  }
}

SocialIcon.defaultProps = {
  size: '1em',
  color: '#ff4500'
};
