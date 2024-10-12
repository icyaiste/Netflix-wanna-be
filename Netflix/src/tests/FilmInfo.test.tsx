/*import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import FilmInfo from '../pages/filmInfo/FilmInfo';
import { Movie } from '../interfaces/Interfaces';
import {beforeAll, afterEach, describe, test, expect, vi,} from 'vitest';
import BookmarkProvider from '../context/BookmarkContext';


// Mock movies data
/*const mockMovie: Movie = {
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
*/


/*describe('FilmInfo', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: mockLocalStorage,
    });
  });

  afterEach(() => {
    window.localStorage.clear();
  });
*/
/*//test 1.  render loading..
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

//test 2. display movies not found
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

  //test 3. display movie details
  test('displays movie details when movie is found', async () => {
    render(
      <MemoryRouter initialEntries={['/films/Test Movie']}>
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
   
    expect(screen.getByText('Test Movie')).toBeInTheDocument(); 
  });

 //test 4. render bookmark component
 test(" render bookmark componet in FilmInfo", async ()=>{
  render(
    <MemoryRouter initialEntries={['/films/Test Movie']}>
      <BookmarkProvider>
        <Routes>
          <Route path= "/films/:title" element={<FilmInfo/>}/>
        </Routes>
      </BookmarkProvider>
    </MemoryRouter>,
  );
  await waitFor(()=> expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());
  expect(screen.getByLabelText(/add bookmark/i)).toBeInTheDocument();
 });
 */


 import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import FilmInfo from '../pages/filmInfo/FilmInfo';
import BookmarkProvider from '../context/BookmarkContext';
import {test, expect } from 'vitest';
import movieData from '../movies/movies.json'


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



const realMovieTitle = movieData[0].title;
// Test 3: Display movie details when the movie is found
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
test("renders bookmark component in FilmInfo", async () => {
  render(
    <MemoryRouter initialEntries={[`/films/${realMovieTitle}`]}>
      <BookmarkProvider>
        <Routes>
          <Route path="/films/:title" element={<FilmInfo />} />
        </Routes>
      </BookmarkProvider>
    </MemoryRouter>,
  );

  // Wait for loading state to disappear
  await waitFor(() =>
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument(),
  );

  const bookmarkButton = screen.getByRole('button', { hidden: true });
  console.log(bookmarkButton);
  expect(bookmarkButton).toBeInTheDocument();
});