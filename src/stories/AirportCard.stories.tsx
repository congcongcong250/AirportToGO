import React from 'react';
import { action } from '@storybook/addon-actions';
import AirportCard from '../components/airport-card';
import { mock } from '../data/mock';
import { COLORS } from '../utils/constants';

export default {
  title: 'AirportCard'
};

export const Card = () => (
  <div style={{ width: '100%', height: '100%', backgroundColor: COLORS.background, padding: 20 }}>
    <AirportCard detail={mock[0]} onClick={action('clicked')} />
  </div>
);
