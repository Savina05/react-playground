import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons';

const images = ["url(./assets/images/slide-circle.jpg)", "url(./assets/images/slide-hello.jpg)","url(./assets/images/slide-play.jpg)"];

class Hero extends Component {
  slideLeft = () => {
    const div = document.querySelector('.section_hero');
    div.style.backgroundImage = images[0];
  }

  circleOne = () => {
    const div = document.querySelector('.section_hero');
    div.style.backgroundImage = images[0];
  }

  circleTwo = () => {
    const div = document.querySelector('.section_hero');
    div.style.backgroundImage = images[1];
  }

  circleThree = () => {
    const div = document.querySelector('.section_hero');
    div.style.backgroundImage = images[2];
  }

  render() {
    return (
      <div className="section_hero" style={{ backgroundImage: "url(./assets/images/slide-hello.jpg)" }}>
        <FontAwesomeIcon icon={faChevronLeft} className="slide slide-left" onClick={this.slideLeft} />
        <h1 className="section_hero-h1">
          lorem
          <br />
          ipsum.
        </h1>
        <p className="section_hero-p">
          Consectetur adipiscing elit.
          <br />
          Nulla condimentum tortor sem,
          <br />
          in semper nisl bibendum eu.
        </p>
        <FontAwesomeIcon icon={faChevronRight} className="slide slide-right" onClick={this.circleThree} />
        <div className="hero_circle">
          <FontAwesomeIcon icon={faCircle} className="circle-1" onClick={this.circleOne} />
          <FontAwesomeIcon icon={faCircle} className="circle-2" onClick={this.circleTwo} />
          <FontAwesomeIcon icon={faCircle} className="circle-3" onClick={this.circleThree} />
        </div>
      </div>
    );
  }
}

export default Hero;
