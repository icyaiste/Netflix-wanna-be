import { test, expect, beforeEach, describe } from 'vitest';
import App from '../App';
import { render, screen } from '@testing-library/react';
import Carousel from '../components/carousel/Carousel';
import movies from '../movies/movies.json';
import { MemoryRouter } from 'react-router-dom';
import BookmarkProvider from '../context/BookmarkContext';
import userEvent from '@testing-library/user-event';

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


describe('bookmarked functionality',() =>{
test('when Bookmarked movie is clicked, it changes image (to yellow)', async () => {
  <MemoryRouter>
    render(
    <App />
    );
  </MemoryRouter>;

const user = userEvent.setup();

//find Bookmarked button and click it
  const bookmarkedBtn = screen.getAllByRole('button')[0];
  expect(bookmarkedBtn).toBeInTheDocument();
  await user.click(bookmarkedBtn);

  //When Bookmarked, button changes color to yellow
  expect(bookmarkedBtn).toHaveClass('text-yellow-500');
});

test.only('bookmarked movies appear in Bookmarked carousel', async () => {
  <MemoryRouter>
    render(
    <App />
    );
  </MemoryRouter>;

const user = userEvent.setup();

  //Find how many movies 'The Shawshank Redemption' there are on page
  let findShanks = screen.getAllByAltText('The Shawshank Redemption');
  const numberOfShanks = findShanks.length;
  expect(findShanks).toHaveLength(numberOfShanks);

  //find Bookmarked button on 'The Shawshank Redemption' movie and click it
  const bookmarkedBtn = screen.getAllByRole('button')[0];
  expect(bookmarkedBtn).toBeInTheDocument();
  await user.click(bookmarkedBtn);

  //When Bookmarked, button changes color to yellow
  expect(bookmarkedBtn).toHaveClass('text-yellow-500');

  //Check if 'The Shawshank Redemption' appeared in Bookmarked carousel
  findShanks = screen.getAllByAltText('The Shawshank Redemption');
  expect(findShanks).toHaveLength(numberOfShanks + 1);
});

test.only('movie disappears from Bookmarked carousel when buttons Bookmarked is clicked again',async () => {
    
  <MemoryRouter>
    render(
    <App />
    );
  </MemoryRouter>;


const user = userEvent.setup();
  //Find how many movies 'The Shawshank Redemption' there are on page
  const findShanks = screen.getAllByAltText('The Shawshank Redemption');
  screen.debug();
  expect(findShanks).toHaveLength(1);
  
  
  //find Bookmarked button on 'The Shawshank Redemption' movie and click it
  const bookmarkedBtn = screen.getAllByRole('button')[0];
  expect(bookmarkedBtn).toBeInTheDocument();
  await user.click(bookmarkedBtn);

  //When Bookmarked, button changes color to yellow
  expect(bookmarkedBtn).toHaveClass('text-yellow-500');

  // //Check if 'The Shawshank Redemption' appeared in Bookmarked carousel
  // findShanks = screen.getAllByAltText('The Shawshank Redemption');
  // expect(findShanks).toHaveLength(numberOfShanks + 1);

  //  //find Bookmarked button on 'The Shawshank Redemption' movie in Bookmarked carousel and click it
  //  const bookmarkCarouselBtn = screen.getAllByRole('button')[numberOfShanks + 1];
  //  expect(bookmarkCarouselBtn).toBeInTheDocument();
  //  await user.click(bookmarkCarouselBtn);

  //  //Check if clicked movie disappeared from Bookmarked carousel
  //  findShanks = screen.getAllByAltText('The Shawshank Redemption');
  //  expect(findShanks).toHaveLength(numberOfShanks +5);
})
});