import { test, expect, beforeEach } from 'vitest';
import App from '../App';
import { render, screen } from '@testing-library/react';
import Carousel from '../components/carousel/Carousel';
import movies from '../movies/movies.json';
import { MemoryRouter } from 'react-router-dom';
import BookmarkProvider from '../context/BookmarkContext';

beforeEach(() => {
  render(
    <BookmarkProvider>
      <MemoryRouter>
        <Carousel data={movies} labelledBy="Trending" />
        <App />
      </MemoryRouter>
    </BookmarkProvider>,
  );
});

test('trending movies are not in recommended movies', () => {
  <MemoryRouter>
    render(
    <App />
    );
  </MemoryRouter>;

  // Find all the movies in the "Trending" section by aria-label
  const trendingMovies = screen.getAllByLabelText('Trending');
  expect(trendingMovies.length).toBeGreaterThan(0); // Ensure there are movies in "Trending"

  // Get the first trending movie
  const firstTrendingMovie = screen.getAllByAltText('The Shawshank Redemption');
  expect(firstTrendingMovie[0]).toBeInTheDocument();

  // Now check that the first trending movie is NOT in the "Recommended" section
  const recommendedMovies = screen.getAllByLabelText('Recommended');

  recommendedMovies.forEach((movie) => {
    expect(movie).not.toHaveTextContent('The Shawshank Redemption');
  });
});
