import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="app__footer">
        <div className="app__container">
          <h2>Footer</h2>
          {this.props.children}
        </div>
      </div>
    );
  }
}
