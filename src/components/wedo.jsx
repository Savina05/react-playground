import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const WeDo = () => {
  return (
    <div id="we-do">
      <div className="we-do_text">
        <h1 className="heading_white">
          we
          <br />
          do.
        </h1>
        <p className="paragraph_white">
          Consectetur adipiscing elit.
          <br />
          Nulla condimentum tortor sem.
        </p>
        <a href="#we-do" className="btn-black">
          The projects
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
      </div>
      <img src="./assets/images/banner-we-do.jpg" alt="we are" className="we-do_picture" />
    </div>
  );
};

export default WeDo;
