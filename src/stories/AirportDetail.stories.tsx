import React from 'react';
import { action } from '@storybook/addon-actions';
import AirportDetail from '../components/airport-detail';
import { mock } from '../data/mock';

export default {
  title: 'AirportDetail'
};

export const Detail = () => <AirportDetail detail={mock[0]} onBackClick={action('clicked')} />;
