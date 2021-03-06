import React from 'react';
import Banner from './Banner/Banner';
import Faq from './Faq/Faq';
import Features from './Features/Features';
import Foods from './Foods/Foods';

const Home = ({ handleOrderNow }) => {
  return (
    <div>
      <Banner />
      <Features />
      <div>
        <h3 className="text-center text-primary">Order your favourite food</h3>
        <Foods handleOrderNow={handleOrderNow} />
      </div>
      <Faq />
    </div>
  );
};

export default Home;
