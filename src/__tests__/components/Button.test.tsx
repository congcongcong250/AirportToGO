import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../../components/button';
import { createClickTester } from './AirportCard.test';

describe('Button', () => {
  let clickTester = createClickTester();

  afterEach(() => {
    clickTester.clearVal();
  });

  test('Button should render text', () => {
    const wrapper = shallow(<Button>Submit</Button>);
    expect(wrapper.contains('Submit')).toEqual(true);
  });

  test('Click Button', () => {
    clickTester.handler('to be clear');
    const wrapper = mount(<Button onClick={clickTester.clearVal}>Submit</Button>);
    wrapper.find('button').simulate('click');
    expect(clickTester.getVal()).toBe('');
  });

  test('Disabled button should do nothing', () => {
    clickTester.handler('do not clear');
    const wrapper = mount(
      <Button onClick={clickTester.clearVal} disabled>
        Submit
      </Button>
    );
    wrapper.find('button').simulate('click');
    expect(clickTester.getVal()).toBe('do not clear');
  });
});
