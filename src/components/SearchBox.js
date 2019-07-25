import React from 'react';

const SearchBox = props => {
  console.log('SearchBox');
  return (
    <div className="pa2">
      <input
        aria-label="Search Robots"
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={props.onChange}
      />
    </div>
  );
};

export default SearchBox;
