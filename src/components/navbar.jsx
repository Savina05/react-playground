import React, { Component } from 'react';

class Navbar extends Component {
  navbarWhiteOnScroll = () => {
    document.addEventListener('scroll', () => {
      document.querySelector('.navbar').classList.add('navbar_white');
      document.querySelector('.navbar__logo').src = "../assets/images/logo-playground-black.png";
    });
  };

  render() {
    return (
      <div className="navbar" onScroll={this.navbarWhiteOnScroll()}>
        <img src="../assets/images/logo-playground-white.png" alt="logo" className="navbar__logo" />
        <div>
          <a href="#we-are" className="navbar__menu">we are</a>
          <a href="#we-do" className="navbar__menu">we do</a>
          <a href="#careers" className="navbar__menu">careers</a>
          <a href="#contact-us" className="navbar__menu">contact us</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
