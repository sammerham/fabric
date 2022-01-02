import React from 'react'
import { render, screen } from '@testing-library/react';
import MediaItem from './MediaItem';


let MOCK = {
  "Title": "The Matrix Reloaded test",
  "Year": "2003",
  "imdbID": "tt0234215",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
}

// smoke test
it('renders without crashing', () => {
  render(<MediaItem item={MOCK}/>);
});



// snapShot
it("matches snapshot", function () {
  const { container } = render(<MediaItem item={MOCK}/>);
  expect(container).toMatchSnapshot();
});


test("renders the correct item", function () {
  render(<MediaItem item={MOCK} />);
  expect(screen.getByText("The Matrix Reloaded test")).toBeInTheDocument()
});