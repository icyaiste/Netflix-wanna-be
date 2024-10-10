import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Header from '../components/header/Header';
import { MemoryRouter } from 'react-router-dom';
import { test, expect } from 'vitest';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

const mockMovies = [
  {
    title: 'Seven Samurai',
    year: 1954,
    rating: 'Not Rated',
  },
  {
    title: 'The Godfather',
    year: 1972,
    rating: 'R',
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    rating: 'PG-13',
  },
];

test('it should show what user is typing in the search field', async () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

  const user = userEvent.setup();
  const input = screen.getByRole('searchbox');

  await user.type(input, 'hello'); // simulate typing in hello

  expect(input).toHaveValue('hello'); // output "hello"
});

test('it should show me movies in the searchbar through the fuzzy search method', async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

  const input = screen.getByRole('searchbox');
  user.type(input, 'The Godfather');

  await screen.findByText('The Godfather');

  const searchResults = screen.getAllByRole('listitem');
  expect(searchResults).toHaveLength(1);
  expect(searchResults[0]).toHaveTextContent('The Godfather');
});

test('it should show me multiple movies in the searchbar through the fuzzy search method', async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

  const input = screen.getByRole('searchbox');
  user.type(input, 'the');

  // Wait for the search results to appear
  await screen.findByText('The Godfather');

  // Check that the search results are correct
  const searchResults = screen.getAllByRole('listitem');
  expect(searchResults).toHaveLength(2);
  expect(searchResults[0]).toHaveTextContent('The Godfather');
  expect(searchResults[1]).toHaveTextContent('The Dark Knight');
});

test('it should not show me movies that do not match the search query', async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

  const input = screen.getByRole('searchbox');
  user.type(input, 'Seven');

  // Wait for the search results to appear
  await screen.findByText('Seven Samurai');

  // Check that the search results are correct
  const searchResults = screen.getAllByRole('listitem');
  expect(searchResults).toHaveLength(1);
  expect(searchResults[0]).toHaveTextContent('Seven Samurai');
  expect(screen.queryByText('The Godfather')).not.toBeInTheDocument();
});

test('it should let me go into a filmpage through the click of the "Learn more" button', async () => {
  const user = userEvent.setup();
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <Header />
    </Router>,
  );
  // Simulate searching for the movie
  const input = screen.getByPlaceholderText('Search');

  await user.type(input, 'Seven Samurai');

  // Find the button by its label text
  const learnMoreButton = await screen.findByLabelText('learn-more-button');

  // Simulate clicking the button
  await user.click(learnMoreButton);

  expect(history.location.pathname).toBe('/info/Seven Samurai');
});

test('it should navigate to the Categories page when the Categories button is clicked', async () => {
  const user = userEvent.setup();
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <Header />
    </Router>,
  );

  const categoriesButton = screen.getByLabelText('Categories Header');
  await user.click(categoriesButton);

  expect(history.location.pathname).toBe('/categories');
});

test('it should let me open the dropdown nav menu', async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

  const navIcon = screen.getByLabelText('icon');

  await user.click(navIcon);
  const dropdownMenu = await screen.findByLabelText('dropdown');

  expect(dropdownMenu).toBeVisible();
});

test('it should close the dropdown when clicking the icon again', async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

  // Open the dropdown by clicking the icon
  const navIcon = screen.getByLabelText('icon');
  await user.click(navIcon);

  // Expect the dropdown to be visible after first click
  const dropdownMenu = screen.getByLabelText('dropdown');
  expect(dropdownMenu).toBeVisible();

  // Close the dropdown by clicking the icon again
  await user.click(navIcon);

  // Use `queryByLabelText` to see if it's removed from DOM
  const dropdownAfterClose = screen.queryByLabelText('dropdown');

  // If the dropdown is removed from the DOM:
  expect(dropdownAfterClose).toHaveClass('opacity-0', 'scale-y-0');
});
