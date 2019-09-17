import React from 'react';
import { shallow, mount } from 'enzyme';
import AirportDetail from '../../components/airport-detail';
import { mock } from '../../data/mock';
import { createClickTester } from './AirportCard.test';

describe('AirportDetail', () => {
  let clickTester = createClickTester();

  test('Airport Name', () => {
    const wrapper = shallow(<AirportDetail detail={mock[1]} />);
    expect(wrapper.contains('Arrabury')).toEqual(true);
  });

  test('Click Button', () => {
    clickTester.handler('to be clear');
    const wrapper = mount(<AirportDetail detail={mock[1]} onBackClick={clickTester.clearVal} />);
    wrapper.find('button').simulate('click');
    expect(clickTester.getVal()).toBe('');
  });
});
