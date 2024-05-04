import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS for the Navbar

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <nav className="navbar">
          <div className="navbar-content">
            <button className="navbar-toggler" type="button"></button>
            <Link className="navbar-brand" to="/">
              Currency Converter
            </Link>
            <div className="collapse navbar-collapse" id="navbarMenu">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
