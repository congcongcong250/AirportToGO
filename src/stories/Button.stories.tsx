import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/button';
import { mock } from '../data/mock';
import BackGround from './BackGround';

export default {
  title: 'Button'
};

export const ButtonUnderGreyBackground = () => (
  <BackGround mode="grey">
    <p>Normal</p>
    <Button onClick={action('clicked')}>Submit</Button>
    <br />
    <br />
    <p>Disabled</p>
    <Button disabled onClick={action('clicked')}>
      Submit
    </Button>
  </BackGround>
);

export const ButtonUnderWhiteBackground = () => (
  <BackGround>
    <p>Normal</p>
    <Button onClick={action('clicked')}>Submit</Button>
    <br />
    <br />
    <p>Disabled</p>
    <Button disabled onClick={action('clicked')}>
      Submit
    </Button>
  </BackGround>
);
