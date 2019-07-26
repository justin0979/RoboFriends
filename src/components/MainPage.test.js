import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it('should render the MainPage without crashing', () => {
  expect(wrapper.debug()).toMatchSnapshot();
});

it('should filter robots correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: 'Jon',
        email: 'jon@gmail.com'
      }
    ],
    searchField: 'jon',
    isPending: false
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterRobots()).toEqual(mockProps2.robots);
});

it('should filter robots correctly', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: 'Jon',
        email: 'jon@gmail.com'
      }
    ],
    searchField: 'a',
    isPending: false
  };
  const filteredRobots = [];
  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
});

it('should filter robots correctly', () => {
  const mockProps4 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: 'Jon',
        email: 'jon@gmail.com'
      }
    ],
    searchField: 'a',
    isPending: true
  };
  const filteredRobots = [];
  const wrapper4 = shallow(<MainPage {...mockProps4} />);
  expect(wrapper4.instance().pendingStatus()).toEqual(<h1>Loading</h1>);
});
