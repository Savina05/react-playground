import React from 'react';
import Card from './card';

const Cards = () => {
  return (
    <div className="section_cards">
      <Card
        body="Aenean mollis dolor a mattis viverra. In hac habitasse platea dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend ut."
        url="url(./assets/images/card-play-harder.png)"
      />
      <Card

        body="Donec vitae augue tellus. Proin et urna sit amet metus fermentum dapibus non quis urna."
        url="url(./assets/images/card-simplicity.png)"
      />
      <Card
        t
        body="Suspendisse vehicula, lectus sed molestie aliquam, arcu neque gravida lacus."
        url="url(./assets/images/card-innovation.png)"
      />
    </div>
  );
};

export default Cards;
