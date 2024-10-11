import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import Header from '../components/header/Header';
import { MemoryRouter } from 'react-router-dom';
import { test, expect } from 'vitest';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

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

test('it should fuzzy search movies based on title, actors, and genre', async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

  const input = screen.getByRole('searchbox');

  // Array of search terms to test
  const searchTerms = ['bale', 'knight', 'ledger'];

  // loop over the search terms
  for (const term of searchTerms) {
    await user.type(input, term); // simulate typing the search term

    // wait for "The Dark Knight" to appear in the DOM for each search term
    await waitFor(() => {
      const movieTitle = screen.getByText(/The Dark Knight/i); // Match the title
      expect(movieTitle).toBeInTheDocument();
    });

    await user.clear(input); // clears the input after each test
  }
});

test('it should filter movies in a case-insensitive manner', async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

  const input = screen.getByRole('searchbox');
  await user.type(input, 'seven samurai');

  // Ensure the case-insensitive match works
  const movieTitle = await screen.findByText('Seven Samurai');
  expect(movieTitle).toBeInTheDocument();
});

test('it should display "No movies found" when there are no matching results', async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

  const input = screen.getByRole('searchbox');
  await user.type(input, 'NonExistentMovie');

  // make sure the no movies message appears
  const noResultsMessage = await screen.findByText('No movies found');
  expect(noResultsMessage).toBeInTheDocument();
});

test('it should let me go into a filmpage through the click of the "Learn more" button', async () => {
  const user = userEvent.setup();
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <Header />
    </Router>,
  );

  const input = screen.getByPlaceholderText('Search');
  await user.type(input, 'Seven Samurai');

  const learnMoreButton = await screen.findByLabelText('learn-more-button');
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

  const navIcon = screen.getByLabelText('icon');
  await user.click(navIcon);

  const dropdownMenu = screen.getByLabelText('dropdown');
  expect(dropdownMenu).toBeVisible();

  await user.click(navIcon);

  const dropdownAfterClose = screen.queryByLabelText('dropdown');

  expect(dropdownAfterClose).toHaveClass('opacity-0', 'scale-y-0');
});
