import React from 'react'
import { render, screen } from '@testing-library/react';
import MediaList from './MediaList';


// smoke test
it('renders without crashing', () => {
  render(<MediaList />);
});


// snapShot
it("matches snapshot", function () {
  const { container } = render(<MediaList />);
  expect(container).toMatchSnapshot();
});
