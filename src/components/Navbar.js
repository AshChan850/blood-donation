
import React, { Component } from 'react';
import img from './blodlogo.png'

class Navbar extends Component {

  render() {
    return (
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="http://localhost:3000/"
          target="_self"
          rel="noopener noreferrer"
        >
         <img src={img} width="100" height="40"/>  Blockchain Blood Bank
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block text-white">
          <b>Account address :</b> <small className="text-white"><span id="account">{this.props.account}</span></small>
          </li>
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block text-white">
          <b><a className="text-white" href="#">Logout</a></b>

          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
