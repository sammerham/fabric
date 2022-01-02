import React from 'react'
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';


// smoke test
test('renders without crashing', () => {
  render(<App />);
});

// snapShot
test("matches snapshot", function () {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});


test("checking if title and main buttons show on main app", function () {
  render(<App />);
  expect(screen.getByText('Media Information')).toBeInTheDocument()
  expect(screen.getByText('Matrix')).toBeInTheDocument()
  expect(screen.getByText('Matrix Revolutions')).toBeInTheDocument()
  expect(screen.getByText('Matrix Reloaded')).toBeInTheDocument()
});

test("checking matrix results show when clicking matrix button", async function () {
  render(<App />);
  const button = screen.getByText('Matrix');
  fireEvent.click(button)
  await screen.findByText('A Glitch in the Matrix')
  expect(screen.getByText('A Glitch in the Matrix')).toBeInTheDocument()
});

test("checking matrix revolutions results show when clicking matrix button", async function () {
  render(<App />);
  const button = screen.getByText('Matrix Revolutions');
  fireEvent.click(button)
  await screen.findByText('The Matrix Revolutions: Super Burly Brawl')
  expect(screen.getByText('The Matrix Revolutions: Super Burly Brawl')).toBeInTheDocument()
});


test("checking matrix reloaded results show when clicking matrix button", async function () {
  render(<App />);
  const button = screen.getByText('Matrix Reloaded');
  fireEvent.click(button)
  await screen.findByText('The Matrix Reloaded: The Exiles')
  expect(screen.getByText('The Matrix Reloaded: The Exiles')).toBeInTheDocument()
});