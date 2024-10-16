import Carousel from '../components/carousel/Carousel';
import { render, screen } from '@testing-library/react';
import movies from '../movies/movies.json';
import { test, expect, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import BookmarkProvider from '../context/BookmarkContext';

beforeEach(() => {
  render(
    <BookmarkProvider>
      <MemoryRouter>
        <Carousel data={movies} labelledBy="Trending" />
      </MemoryRouter>
    </BookmarkProvider>,
  );
});

test('renders trending movies', () => {
  // Filter even indexed movies
  const evenIndexedMovies = movies.filter((_, index) => index % 2 === 0);

  // Check that each even indexed movie is rendered
  for (const movie of evenIndexedMovies) {
    // const movieTitle = movie.title;
    const movieAltText = movie.title;

    // Check if the image for the movie is in the document
    const movieImages = screen.getAllByAltText(movieAltText);

    // Expect each image to be in the document
    movieImages.forEach((image) => {
      expect(image).toBeInTheDocument();
      screen.debug();
    });
  }
});

//Testa om property isTrending = true
