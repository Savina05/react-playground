import React from 'react';

const Card = ({ title, body }) => {
  return (
    <div className="card">
      <div className="card_title">
        <h1>{title}</h1>
      </div>
      <div className="card_body">
        <h1>{body}</h1>
      </div>
      <div className="card_button">
        <h1>Read more</h1>
      </div>
    </div>
  );
};

export default Card;
