import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="../assets/images/logo-playground-white.png" alt="logo" className="navbar__logo" />
      <div>
        <a href="#we-are" className="navbar__menu">we are</a>
        <a href="#we-do" className="navbar__menu">we do</a>
        <a href="#career" className="navbar__menu">career</a>
        <a href="#contact-us" className="navbar__menu">contact us</a>
      </div>
    </div>
  );
};

export default Navbar;
