import React from 'react';
import Cards from './cards';
import Careers from './careers';
import ContactUs from './contact';
import Hero from './hero';
import Navbar from './navbar';
import Tabs from './tab';
import WeAre from './weare';
import WeDo from './wedo';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <WeAre />
      <WeDo />
      <Careers />
      <Tabs />
      <ContactUs />
    </div>
  );
};


export default App;
