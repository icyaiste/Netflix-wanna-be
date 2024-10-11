import { test, expect, beforeEach, describe } from 'vitest';
import App from '../App';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookmarkProvider from '../context/BookmarkContext';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  render(
    <BookmarkProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </BookmarkProvider>,
  );
});

test('trending movies are not in recommended movies', () => {
  // Find all the movies in the "Trending" section by aria-label
  const trendingMovies = screen.getAllByLabelText('Trending');
  expect(trendingMovies.length).toBeGreaterThan(0); // Ensure there are movies in "Trending"

  // Get the first trending movie
  const firstTrendingMovie = screen.getAllByAltText('Fight Club');
  expect(firstTrendingMovie[0]).toBeInTheDocument();

  // Now check that the first trending movie is NOT in the "Recommended" section
  const recommendedMovies = screen.getAllByLabelText('Recommended');

  recommendedMovies.forEach((movie) => {
    expect(movie).not.toHaveTextContent('Fight Club');
  });
});

describe('bookmarked functionality', () => {
  test('when Bookmarked movie is clicked, it changes icon (to yellow)', async () => {
    const user = userEvent.setup();

    //find Bookmarked button and click it
    const bookmarkedBtn = screen.getAllByRole('button')[0];
    expect(bookmarkedBtn).toBeInTheDocument();
    await user.click(bookmarkedBtn);

    //When Bookmarked, button changes color to yellow
    expect(bookmarkedBtn).toHaveClass(
      'text-xl bg-transparent text-yellow-500 transition-all',
    );
  });

  test('bookmarked movies appear in Bookmarked carousel', async () => {
    const user = userEvent.setup();

    //Find how many movies 'Fight Club' there are on page
    const findMovies = screen.getAllByAltText('The Godfather: Part II');
    expect(findMovies).toHaveLength(1);

    //find Bookmarked button on 'Fight Club' movie and click it
    const bookmarkedBtn = screen.getAllByLabelText('Add Bookmark')[0];
    expect(bookmarkedBtn).toBeInTheDocument();
    await user.click(bookmarkedBtn);

    //When Bookmarked, button changes color to yellow
    expect(bookmarkedBtn).toHaveClass(
      'text-xl bg-transparent text-yellow-500 transition-all',
    );

    //Check if 'Fight Club' appeared in Bookmarked carousel
    const findMoviesAgain = screen.getAllByAltText('The Godfather: Part II');
    expect(findMoviesAgain).toHaveLength(2);
  });

  test('movie disappears from Bookmarked carousel when buttons Bookmarked is clicked again', async () => {
    const user = userEvent.setup();

    //Find how many movies 'Fight Club' there are on page
    let findMovies = screen.getAllByAltText('The Godfather: Part II');
    expect(findMovies).toHaveLength(1);

    //find Bookmarked button on 'Fight Club' movie and click it
    const bookmarkedBtn = screen.getAllByLabelText('Add Bookmark')[0];
    expect(bookmarkedBtn).toBeInTheDocument();
    await user.click(bookmarkedBtn);

    //When Bookmarked, button changes color to yellow
    expect(bookmarkedBtn).toHaveClass(
      'text-xl bg-transparent text-yellow-500 transition-all',
    );

    //Check if 'Fight Club' appeared in Bookmarked carousel
    findMovies = screen.getAllByAltText('The Godfather: Part II');
    expect(findMovies).toHaveLength(2);

    // Find the 'The Godfather: Part II' movie card/container
    const GodfatherMovie = screen
      .getAllByAltText('The Godfather: Part II')[1]
      .closest('div');

    // Ensure godfatherMovie is not null
    expect(GodfatherMovie).not.toBeNull();
    if (!GodfatherMovie) return;

    // Find the bookmark button within that specific movie card
    const bookmarkBtnWithinMovie = within(GodfatherMovie).getByRole('button');

    await user.click(bookmarkBtnWithinMovie);

    //Check if clicked movie disappeared from Bookmarked carousel
    findMovies = screen.getAllByAltText('The Godfather: Part II');
    expect(findMovies).toHaveLength(1);
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