import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="app__header">
        <div className="app__container">
          <h1>Xxx</h1>
          <p>Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Neque cum, temporibus vel nesciunt at pariatur
            autem cupiditate porro magni tenetur deleniti doloremque qui veritatis
            esse omnis molestias quis? Numquam, enim.
          </p>
          <table className="rhytm_table">
            <tr>
              <td>111</td>
              <td>222</td>
            </tr>
            <tr>
              <td>333</td>
              <td>444</td>
            </tr>
            <tr>
              <td>555</td>
              <td>666</td>
            </tr>
            <tr>
              <td>560</td>
              <td>716</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
