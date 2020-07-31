import React from 'react';
import CarList from '../containers/CarList';
import DetailsCar from '../containers/details';

const WebPage = () => (
    <div>
      <h3>WebPage</h3>
      <CarList />
      <h3> Details </h3>
      <DetailsCar />
    </div>
);

export default WebPage;
