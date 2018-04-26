import React, { Component } from 'react';

export default class Body extends Component {
  render() {
    return (
      <div className="app__body">
        {
          this.props.children.map((child, i) => (
            <div className="app__container" key={i}>
              {child}
            </div>
          ))
        }
      </div>
    );
  }
}
