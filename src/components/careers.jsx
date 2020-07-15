import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Careers = () => {
  return (
    <div id="careers">
      <img src="./assets/images/banner-carrers.jpg" alt="careers" className="we-are_picture" />
      <div>
        <h1 className="heading-h1">careers.</h1>
        <p className="we-are__paragraph">
          Consectetur adipiscing elit.
          <br />
          Nulla condimentum tortor sem.
        </p>
        <a href="#careers" className="btn-white">
          The positions
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
      </div>
    </div>
  );
};

export default Careers;
