import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

export const setSearchField = text => {
  return {
    type: CHANGE_SEARCHFIELD,
    payload: text
  };
};

export const requestRobots = () => async dispatch => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  try {
    const results = await fetch('https://jsonplaceholder.typicode.com/users');
    const robots = await results.json();
    dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: robots });
  } catch (error) {
    dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error });
  }
};
