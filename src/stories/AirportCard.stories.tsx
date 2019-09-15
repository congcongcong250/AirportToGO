import React from 'react';
import { action } from '@storybook/addon-actions';
import AirportCard from '../components/airport-card';
import { mock } from '../data/mock';
import BackGround from './BackGround';

export default {
  title: 'AirportCard'
};

export const Card = () => (
  <BackGround mode="grey">
    <AirportCard detail={mock[0]} onClick={action('clicked')} />
  </BackGround>
);
