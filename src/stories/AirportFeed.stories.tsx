import React from 'react';
import AirportFeed from '../components/airport-feed';
import { mock } from '../data/mock';
import BackGround from './BackGround';
import { action } from '@storybook/addon-actions';

export default {
  title: 'AirportFeed'
};

export const Feed = () => (
  <BackGround mode="grey">
    <AirportFeed feed={mock} onSelectAirport={action('selected')} />
  </BackGround>
);
