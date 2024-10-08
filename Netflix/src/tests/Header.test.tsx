import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Header from '../components/header/Header';
import { MemoryRouter } from 'react-router-dom';
import { test, expect, beforeEach } from 'vitest';
// import { createMemoryHistory } from 'history';
// import { Router } from 'react-router-dom';

beforeEach(() => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );
});

test('it should show what user is typing in the search field', async () => {
  const user = userEvent.setup();
  const input = screen.getByRole('searchbox');

  await user.type(input, 'hello'); // simulate typing in hello

  expect(input).toHaveValue('hello'); // output "hello"
});

// test('it should show me movies in the searchbar through the fuzzy search method', async () => {
// });

// test('it should let me go into a filmpage through the click of the "Learn more" button', async () => {
//   const user = userEvent.setup();
//   const history = createMemoryHistory();
//   render(
//     <Router location={history.location} navigator={history}>
//       <Header />
//     </Router>
//   );

//   // Find the button by its visible text
//   const learnMoreButton = await screen.findByText(/learn more/i);

//   // Simulate clicking the "Learn more" button
//   await user.click(learnMoreButton);

//   expect(history.location.pathname).toBe('/info/:title')
// });

// test('it should navigate to the Categories page when the Categories button is clicked', async () => {
//   const user = userEvent.setup();
//   const history = createMemoryHistory();
//   render(
//     <Router location={history.location} navigator={history}>
//       <Header />
//     </Router>
//   );

//   const categoriesButton = screen.getByLabelText('Categories Header');
//   await user.click(categoriesButton);

//   expect(history.location.pathname).toBe('/categories');
// });

test('it should let me open the dropdown nav menu', async () => {
  const user = userEvent.setup();
  const navIcon = screen.getByLabelText('icon');

  await user.click(navIcon);
  const dropdownMenu = await screen.findByLabelText('dropdown');

  expect(dropdownMenu).toBeVisible();
});

test('it should close the dropdown when clicking the icon again', async () => {
  const user = userEvent.setup();

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

  // If the dropdown is hidden using CSS (still in the DOM, but not visible):
  // expect(dropdownMenu).not.toBeVisible();
});
