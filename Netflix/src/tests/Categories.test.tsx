import { render, screen } from '@testing-library/react';
import Categories from '../pages/categories/Categories';
import ChosenGenre from '../pages/ChosenGenre/ChosenGenre';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { test, expect } from 'vitest';
import userEvent from '@testing-library/user-event';

// 1. Test that it renders.

test('Renders headline', () => {
  render(
    <MemoryRouter>
      <Categories />
    </MemoryRouter>,
  );

  expect(screen.getByText('Drama')).toBeInTheDocument();
  expect(screen.getByText('Action')).toBeInTheDocument();
  expect(screen.getByText('Comedy')).toBeInTheDocument();
  expect(screen.getByText('Western')).toBeInTheDocument();
  expect(screen.getByText('Adventure')).toBeInTheDocument();
  expect(screen.getByText('Crime')).toBeInTheDocument();
  expect(screen.getByText('Romance')).toBeInTheDocument();
  expect(screen.getByText('War')).toBeInTheDocument();
  expect(screen.getByText('Thriller')).toBeInTheDocument();
  expect(screen.getByText('Sci-Fi')).toBeInTheDocument();
  expect(screen.getByText('History')).toBeInTheDocument();
  screen.debug();
});

// 2. Test that shows it has a background image

test('Renders a background image', () => {
  render(
    <MemoryRouter>
      <Categories />
    </MemoryRouter>,
  );

  const genreElements = screen.getAllByRole('heading');
  genreElements.forEach((genreElement) => {
    const section = genreElement.parentElement;

    if (section) {
      const style = window.getComputedStyle(section);
      expect(style.backgroundImage).not.toBe('none');
    }
  });
});

// 3. Test that clicking on a genre navigates to the correct page

test('should navigate to the selected genre when a category is clicked', async () => {
  render(
    <MemoryRouter initialEntries={['/categories']}>
      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route path="/genre/:selectedGenre" element={<ChosenGenre />} />
      </Routes>
    </MemoryRouter>,
  );

  const user = userEvent.setup();

  const actionCategory = screen.getByText(/Action/i);

  await user.click(actionCategory);

  expect(screen.getByText(/Action/i)).toBeInTheDocument();
  expect(screen.getByText('The Dark Knight')).toBeInTheDocument();
  expect(screen.getByText('Inception')).toBeInTheDocument();

  screen.debug();
});
