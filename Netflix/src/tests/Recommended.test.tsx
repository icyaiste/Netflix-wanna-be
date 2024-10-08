import Recommended from '../components/recommended/Recommended';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { test, expect, beforeEach } from 'vitest';
import BookmarkProvider from '../context/BookmarkContext';

beforeEach(() => {
  render(
    <BookmarkProvider>
      <MemoryRouter>
        <Recommended />
      </MemoryRouter>
    </BookmarkProvider>,
  );
});

test('there are 10 recommended movies', async () => {
  const container = screen.getByLabelText('Recommended');
  const movies = await within(container).findAllByRole('img');
  expect(movies).toHaveLength(10);
});
