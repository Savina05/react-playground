import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const WeAre = () => {
  return (
    <div id="we-are">
      <img src="./assets/images/banner-we-are.jpg" alt="we are" className="we-are_picture" />
      <div>
        <h1 className="heading-h1">
          we
          <br />
          are.
        </h1>
        <p className="we-are__paragraph">
          Consectetur adipiscing elit.
          <br />
          Nulla condimentum tortor sem.
        </p>
        <a href="#we-are" className="btn-white">
          The players
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
      </div>
    </div>
  );
};

export default WeAre;
