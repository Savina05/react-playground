import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Tabs = () => {
  return (
    <div id="tabs">
      <div className="tabs">
        <p>
          Vestibulum at odio sit amet
          <FontAwesomeIcon icon={faChevronDown} />
        </p>
        <p>
          Sed vehicula neque
          <FontAwesomeIcon icon={faChevronUp} />
        </p>
        <p>Nulla id libero pretium</p>
      </div>
      <div>
        <p>Prova</p>
      </div>
    </div>
  );
};

export default Tabs;
