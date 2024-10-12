// Mock movies data
const mockMovie: Movie = {
  title: 'Test Movie',
  year: 2021,
  rating: 'PG-13',
  genre: 'Action',
  actors: ['Actor One', 'Actor Two'],
  synopsis: 'An exciting test movie.',
  thumbnail: 'test-thumbnail.jpg',
};

vi.mock('../movies/movies.json', () => ({
  default: [mockMovie],
}));


import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import FilmInfo from '../pages/filmInfo/FilmInfo';
import { Movie } from '../interfaces/Interfaces';
import {
  beforeAll,
  afterAll,
  afterEach,
  describe,
  it,
  expect,
  vi,
} from 'vitest';

import BookmarkProvider from '../context/BookmarkContext';
// Mocking localStorage
const mockLocalStorage = (() => {
  //Create an empty "store" object to hold data
  let store: { [key: string]: string } = {};

  return {
    //get data from the store, if the key exist get value otherwise null
    getItem: (key: string) => store[key] || null,
    //save data in store, a label on a value and put it in storage
    setItem: (key: string, value: string) => (store[key] = value),
    //remove data by key from store
    removeItem: (key: string) => delete store[key],
    //clear data in store
    clear: () => (store = {}),
  };
})();



describe('FilmInfo', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: mockLocalStorage,
    });
  });

  afterEach(() => {
    window.localStorage.clear();
  });

  it.only('renders loading state initially', () => {
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

 it.only("displays 'Movie not found' if no movie is found", async () => {
    render(
      <MemoryRouter initialEntries={['/films/Unknown Movie']}>
        <BookmarkProvider>
          <Routes>
            <Route path="/films/:title" element={<FilmInfo />} />
          </Routes>
        </BookmarkProvider>
      </MemoryRouter>,
    );

    // Wait for the loading state to complete
    await waitFor(() =>
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument(),
    );

    expect(screen.getByText(/movie not found/i)).toBeInTheDocument();
  });

  it.only('displays movie details when movie is found', async () => {
    render(
      <MemoryRouter initialEntries={['/films/Test Movie']}>
        <BookmarkProvider>
          <Routes>
            <Route path="/films/:title" element={<FilmInfo />} />
          </Routes>
        </BookmarkProvider>
      </MemoryRouter>,
    );

    // Wait for the loading state to complete
    await waitFor(() =>
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument(),
    );

    expect(screen.getByText(mockMovie.title)).toBeInTheDocument();
    expect(screen.getByText(mockMovie.year.toString())).toBeInTheDocument();
    expect(screen.getByText(mockMovie.rating)).toBeInTheDocument();
    expect(screen.getByText(mockMovie.actors.join(', '))).toBeInTheDocument();
    expect(screen.getByText(mockMovie.genre)).toBeInTheDocument();
    expect(screen.getByText(mockMovie.synopsis)).toBeInTheDocument();
  });


/*  it.only('toggles bookmark status on button click', async () => {
    render(
      <MemoryRouter initialEntries={['/films/Test Movie']}>
        <BookmarkProvider>
          <Routes>
            <Route path="/films/:title" element={<FilmInfo />} />
          </Routes>
        </BookmarkProvider>
      </MemoryRouter>,
    );

    // Wait for the loading state to complete
    await waitFor(() =>
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument(),
    );

    const bookmarkButton = screen.getByLabelText(/add bookmark/i);

    // Initially, it should be 'Add Bookmark'
    expect(bookmarkButton).toBeInTheDocument();

    // Click to bookmark
    fireEvent.click(bookmarkButton);

    // Check local storage
    expect(window.localStorage.getItem('faves')).toContain(mockMovie.title);
    expect(bookmarkButton).toHaveAttribute('aria-label', 'Remove Bookmark');

    // Click to remove bookmark
    fireEvent.click(bookmarkButton);

    // Check local storage
    expect(window.localStorage.getItem('faves')).not.toContain(mockMovie.title);
    expect(bookmarkButton).toHaveAttribute('aria-label', 'Add Bookmark');
  });*/
});  