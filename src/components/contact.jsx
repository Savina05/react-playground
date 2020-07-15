import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  return (
    <div id="contact-us">
      <h1>
        contact
        <br />
        us.
      </h1>
      <p>
        contact us.
        <br />
        Playground srl
        <br />
        Via G. Mazzini 3/C,
        <br />
        Cernusco Sul Naviglio (Milano)
        <br />
        -
        <br />
        T +39 0240706003
      </p>
      <div>
        <form action="#">
          <input type="text" placeholder="name" />
          <input type="text" placeholder="last name" />
          <input type="email" placeholder="email" />
          <input type="text" placeholder="message" />
          <input type="submit" value="send" />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
