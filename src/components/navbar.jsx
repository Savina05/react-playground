import React, { Component } from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <h3 classNmame="navbar-h3">Playground.</h3>
      <div>
        <a href="#we-are" className="navbar_menu">we are</a>
        <a href="#we-do" className="navbar_menu">we do</a>
        <a href="#career" className="navbar_menu">career</a>
        <a href="#contact-us" className="navbar_menu">contact us</a>
      </div>
    </div>
  );
};

export default Navbar;
