import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import FilmInfo from '../pages/filmInfo/FilmInfo';
import BookmarkProvider from '../context/BookmarkContext';
import { test, expect } from 'vitest';
import movieData from '../movies/movies.json';

// Test 1: Render loading state initially
test('renders loading state initially', () => {
  render(
    <MemoryRouter initialEntries={['/films/Test Movie']}>
      <BookmarkProvider>
        <Routes>
          <Route path="/films/:title" element={<FilmInfo />} />
        </Routes>
      </BookmarkProvider>
    </MemoryRouter>,
  );

  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

// Test 2: Display "Movie not found" if no movie is found
test("displays 'Movie not found' if no movie is found", async () => {
  render(
    <MemoryRouter initialEntries={['/films/Unknown Movie']}>
      <BookmarkProvider>
        <Routes>
          <Route path="/films/:title" element={<FilmInfo />} />
        </Routes>
      </BookmarkProvider>
    </MemoryRouter>,
  );

  await waitFor(() =>
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument(),
  );
  expect(screen.getByText(/movie not found/i)).toBeInTheDocument();
});

// Test 3: Display movie details when the movie is found
const realMovieTitle = movieData[0].title;
test('displays movie details when movie is found', async () => {
  render(
    <MemoryRouter initialEntries={[`/films/${realMovieTitle}`]}>
      <BookmarkProvider>
        <Routes>
          <Route path="/films/:title" element={<FilmInfo />} />
        </Routes>
      </BookmarkProvider>
    </MemoryRouter>,
  );

  await waitFor(() =>
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument(),
  );

  expect(screen.getByText(realMovieTitle)).toBeInTheDocument();
});

// Test 4: Render bookmark component in FilmInfo
test('renders bookmark component in FilmInfo', async () => {
  render(
    <MemoryRouter initialEntries={[`/films/${realMovieTitle}`]}>
      <BookmarkProvider>
        <Routes>
          <Route path="/films/:title" element={<FilmInfo />} />
        </Routes>
      </BookmarkProvider>
    </MemoryRouter>,
  );

  await waitFor(() =>
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument(),
  );

  const bookmarkButton = screen.getByRole('button', { hidden: true });
  console.log(bookmarkButton);
  expect(bookmarkButton).toBeInTheDocument();
});
