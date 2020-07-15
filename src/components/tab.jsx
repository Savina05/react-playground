import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Tabs = () => {
  return (
    <div id="tabs">
      <div className="tabs">
        <p className="tab_selection tab_selection_active">
          Vestibulum at odio sit amet
          <span className="tab_icon">
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </p>
        <p className="tab_selection">
          Sed vehicula neque
          <span className="tab_icon">
            <FontAwesomeIcon icon={faChevronUp} />
          </span>
        </p>
        <p className="tab_selection">
          Nulla id libero pretium
          <span className="tab_icon">
            <FontAwesomeIcon icon={faChevronUp} />
          </span>
        </p>
      </div>
      <div className="tab_text">
        <p>Prova</p>
      </div>
    </div>
  );
};

export default Tabs;
