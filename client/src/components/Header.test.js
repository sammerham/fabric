import React from 'react'
import { render } from '@testing-library/react';
import Header from './Header';
import MediaContext from '../mediaContext';

const MOCK = () => console.log('hello')


// smoke test
it('renders without crashing', () => {
  <Header />
});

// snapShot
it("matches snapshot", function () {
  const { container } = render(
    <MediaContext.Provider value={{ MOCK }}>
      <Header />
    </MediaContext.Provider>
  );
  expect(container).toMatchSnapshot();
});