import React from 'react';

const Card = ({ title, body, url }) => {
  return (
    <div className="card">
      <div className="card_title" style={{ backgroundImage: `${url}` }}>
      </div>
      <div>
        <h1 className="card_body">{body}</h1>
      </div>
      <div>
        <h1 className="card_button">Read more</h1>
      </div>
    </div>
  );
};

export default Card;
