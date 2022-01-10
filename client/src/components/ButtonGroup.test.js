import React from 'react'
import { render } from '@testing-library/react';
import ButtonGroup from './ButtonGroup';
import MediaContext from '../mediaContext';

const MOCK = () => console.log('hello')


// smoke test
it('renders without crashing', () => {
    <ButtonGroup />
});

// snapShot
it("matches snapshot", function () {
  const { container } = render(
    <MediaContext.Provider value={{ MOCK }}>
      <ButtonGroup />
    </MediaContext.Provider>
  );
  expect(container).toMatchSnapshot();
});