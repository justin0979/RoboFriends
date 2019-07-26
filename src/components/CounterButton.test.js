import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('should render CounterButton component', () => {
  const mockColor = 'red';
  expect(shallow(<CounterButton color={mockColor} />).debug()).toMatchSnapshot();
});

it('correctly increments the counter', () => {
  const mockColor = 'red';

  const wrapper = shallow(<CounterButton color={mockColor} />);

  wrapper.find('#counter').simulate('click');
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 2 });
  expect(wrapper.props()).toHaveProperty('color', 'red');
});
