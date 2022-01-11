import React from 'react'
import { render } from '@testing-library/react';
import SearchBar from './SearchBar';
import MediaContext from '../mediaContext';

const MOCK = () => console.log('hello')


// smoke test
it('renders without crashing', () => {
  <SearchBar />
});

// snapShot
it("matches snapshot", function () {
  const { container } = render(
    <MediaContext.Provider value={{ MOCK }}>
      <SearchBar />
    </MediaContext.Provider>
  );
  expect(container).toMatchSnapshot();
});