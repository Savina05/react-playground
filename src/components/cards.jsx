import React from 'react';
import Card from './card';

const Cards = () => {
  return (
    <div className="section_cards">
      <Card title="PLAY HARDER" body="Aenean mollis dolor a mattis viverra. In hac habitasse platea dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend ut." />
      <Card title="SIMPLICITY" body="Donec vitae augue tellus. Proin et urna sit amet metus fermentum dapibus non quis urna." />
      <Card title="INNOVATION" body="Suspendisse vehicula, lectus sed molestie aliquam, arcu neque gravida lacus." />
    </div>
  );
};

export default Cards;
