import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <img src="./assets/images/logo-playground-white.png" alt="logo" className="footer_logo" />
      <div>
        <a href="#we-are" className="navbar__menu">we are</a>
        <a href="#we-do" className="navbar__menu">we do</a>
        <a href="#careers" className="navbar__menu">careers</a>
        <a href="#contact-us" className="navbar__menu">contact us</a>
      </div>
    </div>
  );
};

export default Footer;
