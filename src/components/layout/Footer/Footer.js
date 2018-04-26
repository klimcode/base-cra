import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="app__footer">
        <div className="app__container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
