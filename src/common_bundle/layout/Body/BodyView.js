import React, { Component } from 'react';

export default class Body extends Component {
  render() {
    return (
      <div className="app__body">
        <div className="app__container">
          <h2>Body</h2>
        </div>
        {
          // this.props.children.map((child, i) => (
          //   <div className="app__container" key={i}>
          //     {child}
          //   </div>
          // ))
        }
      </div>
    );
  }
}
