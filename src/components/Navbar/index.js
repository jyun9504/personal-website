import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <NavLink to="/personal-website/" 
            className="router-link" 
            activeClassName="router-link--active"
            exact
      >
        About
      </NavLink>
      <NavLink to="/personal-website/works" 
            className="router-link" 
            activeClassName="router-link--active"
      >
        Works
      </NavLink>
    </nav>
  )
}

export default Navbar;