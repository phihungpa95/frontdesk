import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import logo from "../../asset/images/5cde7711af6ddaa327c08cc3_FDA-logo-white-font.svg";
import Link from '../Link';

index.propTypes = {
    
};

function index(props) {
    return (
      <header className="bg-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse nav-header"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav ml-auto header-nav">
                <Link to="/product">
                  Product <span className="sr-only">(current)</span>
                </Link>
                <Link to="/company">Company</Link>
                <Link to="/plans">Plans</Link>
                <button type="button" className="btn btn-success">
                  Sign up
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
}

export default index;