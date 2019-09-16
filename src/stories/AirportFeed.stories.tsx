import React from 'react';
import AirportFeed from '../components/airport-feed';
import { mock } from '../data/mock';
import BackGround from './BackGround';

export default {
  title: 'AirportFeed'
};

export const Feed = () => (
  <BackGround mode="grey">
    <AirportFeed feed={mock} />
  </BackGround>
);
