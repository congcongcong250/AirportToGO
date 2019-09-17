import React from 'react';
import { shallow, mount } from 'enzyme';
import AirportCard from '../../components/airport-card/AirportCard';
import { mock } from '../../data/mock';

export const createClickTester = () => {
  let clickVal = '';
  return {
    handler: (val: any) => {
      clickVal = val;
    },
    getVal: () => {
      return clickVal;
    },
    clearVal: () => {
      clickVal = '';
    }
  };
};

describe('AirportCard', () => {
  let clickTester = createClickTester();

  afterEach(() => {
    clickTester.clearVal();
  });

  test('Airport Name', () => {
    const wrapper = shallow(<AirportCard detail={mock[0]} onClick={clickTester.handler} />);
    expect(wrapper.contains('Anaa')).toEqual(true);
  });

  test('Click Button', () => {
    const wrapper = mount(<AirportCard detail={mock[0]} onClick={clickTester.handler} />);
    wrapper.find('button').simulate('click');
    expect(clickTester.getVal()).toBe('AAA');
  });
});
