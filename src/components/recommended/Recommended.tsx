import Carousel from '../carousel/Carousel.tsx';
import { Movie } from '../../interfaces/Interfaces.ts';
import data from '../../movies/movies.json';

function Recommended() {
  // Function to select uneven-indexed and shuffled movies
  const selectMovies = (allMovies: Movie[], limit: number): Movie[] => {
    const nonTrendingMovies = allMovies.filter((movie) => !movie.isTrending); // Filter uneven-indexed movies
    const shuffledMovies = nonTrendingMovies.sort(() => Math.random() - 0.5); // Shuffle the filtered array
    return shuffledMovies.slice(0, limit); // Slice the shuffled movies to the limit
  };

  // Check if data is loaded
  if (!data || !Array.isArray(data)) {
    return <h1>Loading...</h1>;
  }

  // Select 5 uneven-indexed movies for trending
  const recMovies = selectMovies(data, 10);

  return (
    <div>
      <Carousel data={recMovies} labelledBy="Recommended" />
    </div>
  );
}

export default Recommended;
