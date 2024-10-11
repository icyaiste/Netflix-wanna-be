import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { expect } from 'vitest';
import ChosenGenre from '../pages/ChosenGenre/ChosenGenre';
import { test, vi } from 'vitest';

vi.mock('../movies/movies.json', () => ({
  default: [
    {
      title: 'Action Movie 1',
      year: '',
      rating: '-',
      actors: '',
      genre: 'Action',
      synopsis: '',
      thumbnail: 'action-movie-1.jpg',
    },
    {
      title: 'Action Movie 2',
      year: '',
      rating: '-',
      actors: '',
      genre: 'Action',
      synopsis: '',
      thumbnail: 'action-movie-2.jpg',
    },
    {
      title: 'Drama Movie 1',
      year: '',
      rating: '-',
      actors: '',
      genre: 'Drama',
      synopsis: '',
      thumbnail: 'drama-movie-1.jpg',
    },
  ],
}));

test('displays movies for the selected genre', () => {
  render(
    <MemoryRouter initialEntries={['/genre/Action']}>
      <Routes>
        <Route path="/genre/:selectedGenre" element={<ChosenGenre />} />
      </Routes>
    </MemoryRouter>,
  );

  expect(screen.getByText('Action Movies')).toBeInTheDocument();
  expect(screen.getByText('Action Movie 1')).toBeInTheDocument();
  expect(screen.getByText('Action Movie 2')).toBeInTheDocument();

  expect(screen.queryByText('Drama Movie 1')).not.toBeInTheDocument();
});
