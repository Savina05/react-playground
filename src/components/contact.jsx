import React from 'react';

const ContactUs = () => {
  return (
    <div id="contact-us">
      <div className="contact_text">
        <h1 className="contact_heading">
          contact
          <br />
          us.
        </h1>
        <p className="contact_paragraph">
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
      </div>
      <div>
        <form action="#" className="form">
          <input type="text" placeholder="name" className="form_input input_name" />
          <input type="text" placeholder="last name" className="form_input input_last_name" />
          <input type="email" placeholder="email" className="form_input input_email" />
          <input type="text" placeholder="message" className="form_input input_message" />
          <input type="submit" value="send >" className="btn-form" />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
